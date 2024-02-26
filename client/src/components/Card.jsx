const Card = ({ title, desc, image }) => {
  return (
    <div className="bg-gray-300 p-10 ">
      <div className="bg-white rounded p-5">
        <img src={image} />
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className = "tracking-wide">{desc}</p>
      </div>
    </div>
  );
};
export default Card;
