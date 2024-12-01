import { auth } from "@clerk/nextjs/server";

const OrganizationIdPage = async () => {
  const { orgId } = await auth();
  return <div>ID da organização: {orgId}</div>;
};

export default OrganizationIdPage;
