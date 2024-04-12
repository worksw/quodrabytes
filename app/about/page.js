import About from "../components/about";
import AboutBanner from "../components/about/aboutBanner";
import ChooseUs from "../components/about/chooseUs";

export default function page() {
  return (
    <div>
      <AboutBanner />
      <About/>
      <ChooseUs />
    </div>
  );
}
