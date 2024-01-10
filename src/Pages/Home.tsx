import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import VideoRar from "../Components/VideoRar/VideoRar";
import SelfDiscovery from "../Components/SelfDiscovery/SelfDiscovery";
import Contact from "../Components/Contact/Contact";
import InteraktivneRadionice from "../Components/interaktivneRadionice/interaktivneRadionice";
import RaniRazvoj from "../Components/RaniRazvoj/raniRazvoj";
import PrijaviSe from "../Components/PrijaviSe/prijaviSe";
import AboutTomislav from "../Components/AboutTomislav/aboutTomislav";
import Testimonials from "../Components/Testimonials/testimonials";
import SadrzajPrograma from "../Components/SadrzajPrograma/sadrzajPrograma";
import Faq from "../Components/FAQ/Faq";
import HeaderMobile from "../Components/Header/HeaderMobile";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <SelfDiscovery />
      <VideoRar />
      <SadrzajPrograma />
      <RaniRazvoj />
      <AboutTomislav />
      <Testimonials />
      <InteraktivneRadionice />
      <PrijaviSe />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
