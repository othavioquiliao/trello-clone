"use client";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

import { ListWithCards } from "@/types";

import { ListForm } from "./list-form";
import { ListItem } from "./list_item";

import { useAction } from "@/hooks/use-action";
import { updateListOrder } from "@/actions/update-list-order";
import { updateCardOrder } from "@/actions/update-card-order";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

interface Card {
  id: string;
  title: string;
  order: number;
  listId: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { execute: executeUpdateListOrder } = useAction(updateListOrder, {
    onSuccess: () => {
      toast.success("Lista reorganizada");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { execute: executeUpdateCardOrder } = useAction(updateCardOrder, {
    onSuccess: () => {
      toast.success("Cartão reorganizado");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    // se soltar na mesma posição
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // O usuário move uma lista
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index })
      );

      setOrderedData(items);
      executeUpdateListOrder({ items, boardId });
    }

    // O usuário move um cartão
    if (type === "card") {
      const newOrderedData = [...orderedData];

      // Lista de origem e destino
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      );
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      );

      if (!sourceList || !destList) {
        return;
      }

      // Verifica se existem cartões na sourceList
      if (!sourceList.cards) {
        sourceList.cards = [];
      }

      // Verifica se existem cartões na destList
      if (!destList.cards) {
        destList.cards = [];
      }

      // Movendo o cartão na mesma lista
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder<Card>(
          sourceList.cards,
          source.index,
          destination.index
        );

        reorderedCards.forEach((card: Card, idx: number) => {
          card.order = idx;
        });

        sourceList.cards = reorderedCards;

        setOrderedData(newOrderedData);
        executeUpdateCardOrder({
          boardId: boardId,
          items: reorderedCards,
        });
        // O usuário move o cartão para outra lista
      } else {
        // Remove o cartão da lista de origem
        const [movedCard] = sourceList.cards.splice(source.index, 1);

        // Atribui o novo listId ao cartão movido
        movedCard.listId = destination.droppableId;

        // Adiciona o cartão à lista de destino
        destList.cards.splice(destination.index, 0, movedCard);

        sourceList.cards.forEach((card: Card, idx: number) => {
          card.order = idx;
        });

        // Atualiza a ordem de cada cartão na lista de destino
        destList.cards.forEach((card: Card, idx: number) => {
          card.order = idx;
        });

        setOrderedData(newOrderedData);
        executeUpdateCardOrder({
          boardId: boardId,
          items: destList.cards,
        });
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="lists"
        type="list"
        direction={isMobile ? "vertical" : "horizontal"}
        ignoreContainerClipping={!isMobile}
      >
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={cn(
              "flex gap-3 h-full flex-col items-center md:flex-row md:items-start"
            )}
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
            <ListForm />
            <div className={isMobile ? "h-2" : "w-2"} />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};
