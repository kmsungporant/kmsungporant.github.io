import AboutPage from "../components/aboutPage";
import Contacts from "../components/contactPage";
import Footer from "../components/footer";
import MainPage from "../components/mainPage";
import PorfolioPage from "../components/portfolioPage";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <div className="h-auto min-h-full bg-gray-800 lg:h-full space-y-44 lg:space-y-0 dark:bg-light-background font-Consolas">
      <MainPage />
      <AboutPage />
      <PorfolioPage />
      <Timeline />
      <Contacts />
      <Footer />
    </div>
  );
}
