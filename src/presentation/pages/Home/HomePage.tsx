import Header from "@/presentation/Components/Organisms/Header/Header";
import Sidebar from "@/presentation/Components/Organisms/Sidebar/Sidebar";
import MainContent from "@/presentation/Components/Templates/MainContent/MainContent";
import MainFrame from "@/presentation/Components/Templates/MainFrame/MainFrame";

export const HomePage = () => {
  return (
    <MainFrame>
      <Sidebar />
      <MainContent>
        <Header />
      </MainContent>
    </MainFrame>
  );
};
