import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../server/firebase";
const Feedbackform = () => {
  const { register, handleSubmit } = useForm();
  const sendData = (data) => {
    const querySnapshot = setDoc(doc(db, "products", data.productName), data);
    alert(`Thank you for sharing your opinion. ✅`);
    console.log(data);
  };
  return (
    <div className="p-32">
      <form
        className="bg-gray-900 p-10 max-w-2xl mx-auto rounded-lg mt-5 space-y-5 text-white"
        onSubmit={handleSubmit(sendData)}
      >
        <div>
          <label className="block mb-1.5">Product Name</label>
          <input
            type="text "
            className="outline-none px-4 py-1 rounded-md w-full text-black"
            name="productName"
            placeholder="Enter your product name"
            {...register("productName", {
              required: "productName",
            })}
          />
        </div>
        <div>
          <label className="block mb-1.5 ">Product image</label>
          <input
            name="ProductImage"
            type="url"
            className="px-4 py-1 rounded-md outline-none w-full text-black"
            placeholder="Paste your image link"
            {...register("productImage")}
          />
        </div>
        <div>
            <label>Share your thoughts</label>
          <textarea
            className="outline-none px-4 py-1 rounded-md w-full text-black"
            name="f"
            placeholder="Share your thoughts"
            {...register("feedback", {
              required: "feedback",
            })}
          ></textarea>
        </div>
        <button className="bg-green-500 px-4 py-1 rounded-lg w-full text-black">
          Send Feedback
        </button>
      </form>
    </div>
  );
};
export default Feedbackform;
