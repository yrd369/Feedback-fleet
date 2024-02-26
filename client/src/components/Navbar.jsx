const Navbar = () => {
  return (
    <div className="bg-blue-400 p-5 text-xl tracking-tighter">
      <div className="container px-10 flex justify-between">
        <h1>Feedback Fleet</h1>
        <ul className="flex space-x-3">
          <li>Home</li>
          <li>About</li>
        </ul>
        <ul className="flex space-x-3">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
