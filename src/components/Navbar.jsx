import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#ED6926] p-3 text-white font-poppins">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <h1 className="text-xl tracking-tighter">Feedback Fleet</h1>
        <ul className="flex space-x-3 tracking-wider">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex space-x-3 tracking-tight">
          <Link to={"/feedbackform"}>
            <li className="bg-[#FEF7ED] text-black px-4 py-1 rounded-md">Add review</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
