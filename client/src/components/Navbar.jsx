const Navbar = () => {
  return (
    <div className="bg-blue-400 p-3 text-white">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <h1 className="text-xl tracking-tighter">Feedback Fleet</h1>
        <ul className="flex space-x-3 tracking-wider">
          <li>Home</li>
          <li>About</li>
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
