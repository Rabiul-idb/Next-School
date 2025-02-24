
import Navbar from "./Component/Navbar";
import HeaderTop from "./Component/HeaderTop";
import LatestNews from "./Component/LatestNews";
import Banner from "./Component/Banner";
import Messages from "./Component/Messages";
import About from "./Component/About";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <HeaderTop></HeaderTop>
      <Navbar></Navbar>
      <LatestNews></LatestNews>
      <Banner></Banner>
      <Messages></Messages>
      <About></About>
      <Footer></Footer>
    </div>
  );
}
