import TheAbout from "./components/About";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins ">
      <Navbar />
      <TheAbout />
      {/* <Card /> */}
      <Footer />
    </div>
  );
}

export default App;
