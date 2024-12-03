import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              paddingTop: "1rem",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
