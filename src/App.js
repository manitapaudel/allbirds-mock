import Navbar from "./components/organisms/Navbar";
import CallToAction from "./components/organisms/CallToAction";
import ShopCollection from "./components/organisms/ShopCollection";
import OurFavourites from "./components/organisms/OurFavourites";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CallToAction />
      <OurFavourites />
      <ShopCollection />
    </div>
  );
}

export default App;
