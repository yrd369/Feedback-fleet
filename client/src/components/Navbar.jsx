import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 p-3 text-white font-poppins">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <h1 className="text-xl tracking-tighter">Feedback Fleet</h1>
        <ul className="flex space-x-3 tracking-wider">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to={"/feedbackform"}>
            <li>Product feedback</li>
          </Link>
          <li>Contact</li>
        </ul>
        <ul className="flex space-x-3 tracking-tight">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
