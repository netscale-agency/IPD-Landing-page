import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import VideoRar from "../Components/VideoRar/VideoRar";
import SelfDiscovery from "../Components/SelfDiscovery/SelfDiscovery";
import Contact from "../Components/Contact/Contact";
import InteraktivneRadionice from "../Components/interaktivneRadionice/interaktivneRadionice";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <InteraktivneRadionice />
      <VideoRar />
      <SelfDiscovery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
