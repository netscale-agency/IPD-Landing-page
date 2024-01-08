import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import VideoRar from "../Components/VideoRar/VideoRar";
import SelfDiscovery from "../Components/SelfDiscovery/SelfDiscovery";
import Contact from "../Components/Contact/Contact";
import InteraktivneRadionice from "../Components/interaktivneRadionice/interaktivneRadionice";
import RaniRazvoj from "../Components/RaniRazvoj/raniRazvoj";
import PrijaviSe from "../Components/PrijaviSe/prijaviSe";
import AboutTomislav from "../Components/AboutTomislav/aboutTomislav";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <SelfDiscovery />
      <VideoRar />
      <RaniRazvoj />
      <AboutTomislav />
      <PrijaviSe />

      <InteraktivneRadionice />

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
