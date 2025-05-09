import AdminProfileMain from "@/components/layout/main/dashboards/AdminProfileMain";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";

import ThemeController from "@/components/shared/others/ThemeController";
import DsahboardWrapper from "@/components/shared/wrappers/DsahboardWrapper";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Admin Profile | Tanga Academy - Education LMS",
  description: "Admin Profile page for Tanga Academy's Education LMS Dashboard",
};
const Admin_Profile = () => {
  return (
    <PageWrapper>
      <main>
        <DsahboardWrapper>
          <DashboardContainer>
            <AdminProfileMain />
          </DashboardContainer>
        </DsahboardWrapper>
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Admin_Profile;
