import { Route, Routes } from "react-router-dom";
import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";
import { MainContentWrapper } from "./ui/MainContentWrapper";
import { News } from "./components/news/News";
import { AsideProvider } from "./contexts/AsideContext";
import { Footer } from "./components/footer/Footer";
import { NewsModal } from "./components/news/newsModal/NewsModal";

export const App = () => {
  return (
    <>
      <AsideProvider>
        <Header />
        <main className="flex">
          <Aside />
          <MainContentWrapper>
            <Routes>
              <Route path="/news" element={<News />} />
            </Routes>
          </MainContentWrapper>
          <NewsModal modalTitle="" />
        </main>
        <Footer />
      </AsideProvider>
    </>
  );
};
