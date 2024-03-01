import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../server/firebase";
import dayjs from "dayjs";

const Feedbackform = () => {
  function formatMyDate(date, format = "DD, MMM - YYYY, hh:mma") {
    return (dayjs(date).format(format));
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendData = (data) => {
    const querySnapshot = setDoc(doc(db, "products", data.productName), data);
    alert(`Thank you for sharing your opinion. ✅`);
  };
  return (
    <div className="bg-[#FEF7ED] p-10">
      <form
        className="bg-gray-900 p-10 max-w-2xl mx-auto rounded-lg mt-5 space-y-5 text-white"
        onSubmit={handleSubmit(sendData)}
      >
        <div>
          <label className="block mb-1.5">Product Name</label>
          <input
            type="text "
            className="outline-none px-4 py-1 rounded-md w-full text-black mb-1"
            name="productName"
            placeholder="Enter your product name"
            {...register("productName", {
              required: "Product name is required",
              minLength: {
                value: 3,
                message: "Product name should be more than 3 characters",
              },
            })}
          />
          {errors.productName && (
            <small className="text-red-500 font-medium">
              {errors.productName.message}
            </small>
          )}
        </div>
        <div>
          <label className="block mb-1.5 ">Product image</label>
          <input
            name="ProductImage"
            type="url"
            className="px-4 py-1 rounded-md outline-none w-full text-black mb-1"
            placeholder="Paste your image link"
            {...register("productImage", {
              required: "Product Image is required",
            })}
          />
          {errors.productImage && (
            <small className="text-red-500 font-medium">
              {errors.productImage.message}
            </small>
          )}
        </div>
        <div>
          <label>Share your thoughts</label>
          <textarea
            className="outline-none px-4 py-1 rounded-md w-full text-black"
            name="f"
            placeholder="Share your thoughts"
            {...register("feedback", {
              required: "Feedback field is required",
              minLength: {
                value: 3,
                message: "Message should be more than 3 characters",
              },
            })}
          ></textarea>
          {errors.feedback && (
            <small className="text-red-500 font-medium">
              {errors.feedback.message}
            </small>
          )}
        </div>
        <input value={formatMyDate()} className="text-black" name="time" {...register("time")}/>
        <button className="bg-green-500 px-4 py-1 rounded-lg w-full text-black">
          Send Feedback
        </button>
      </form>
    </div>
  );
};
export default Feedbackform;
