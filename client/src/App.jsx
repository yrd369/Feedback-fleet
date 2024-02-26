import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="bg-gray-300 grid grid-cols-4">
        <Card title="CyberDude" desc="desc" />
        <Card title="Mongo DB" desc="desc" />
      </div>
    </div>
  );
}

export default App;
