const Card = ({title,desc}) => {
  return (
    <div className="bg-gray-300 p-10 h-screen">
      <div className="bg-white rounded p-5">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Card;
