import Navbar from "./components/organisms/Navbar";
import CallToAction from "./components/organisms/CallToAction";
import ShopCollection from "./components/organisms/ShopCollection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CallToAction />
      <ShopCollection />
    </div>
  );
}

export default App;
