const Card = ({ productName, image }) => {
  return (
    <div className="rounded-lg flex-col justify-center text-center">
      <img src={image} className="rounded-lg w-40 mx-auto"/>
      <p className="font-semibold tracking-wide mt-2">{productName}</p>
    </div>
  );
};
export default Card;
