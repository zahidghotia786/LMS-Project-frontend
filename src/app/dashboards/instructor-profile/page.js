import AdminDashboardMain from "@/components/layout/main/dashboards/AdminDashboardMain";
import InstructorProfileMain from "@/components/layout/main/dashboards/InstructorProfileMain";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";
import ThemeController from "@/components/shared/others/ThemeController";
import DsahboardWrapper from "@/components/shared/wrappers/DsahboardWrapper";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Instructor Profile | Tanga Academy - Online Learning Platform",
  description: "Instructor Profile | Tanga Academy - Empowering Education through Online Learning",
};
const Instructor_Profile = () => {
  return (
    <PageWrapper>
      <main>
        <DsahboardWrapper>
          <DashboardContainer>
            <InstructorProfileMain />
          </DashboardContainer>
        </DsahboardWrapper>
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Instructor_Profile;
