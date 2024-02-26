const Input = ({ input, name }) => {
    return (
      <div className=" container text-center my-5">
        <input
          type="search"
          className="bg-gray-200 mx-auto px-4 py-1 outline-none rounded w-96"
          placeholder="Enter ingredient"
          onChange={input}
          name={name}
        />
      </div>
    );
  };
  export default Input;