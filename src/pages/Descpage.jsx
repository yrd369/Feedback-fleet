import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../server/firebase";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

const Descpage = () => {
  const { register, handleSubmit, formState: errors } = useForm();
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(1);
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [updatee, setUpdatee] = useState(false);
  const { id } = useParams();

  console.log(index);

  const formShow = () => {
    setShow(!show);
    // console.log(show);
  };

  const updateCommet = (index) => {
    setUpdatee(!updatee);
    setIndex(index);

    // var indee = index;
  };

  // getting data from database
  useEffect(() => {
    async function getRecipes() {
      const querySnapshot = await getDoc(doc(db, "products", id));
      setValue(querySnapshot.data());
      setComments(querySnapshot.data().comments || []);
    }
    getRecipes();
  }, [id]);

  // added time created
  const currentTime = dayjs().format("DD, MMM, YYYY, hh:mma");

  const sendData = async (formData) => {
    const { userName, feedback, time } = formData;
    const newComment = { userName, feedback, time }; // Combine user name and comment
    const newComments = [...comments, newComment];
    await updateDoc(doc(db, "products", id), { comments: newComments });
    setComments(newComments);
    alert("Comment posted");
  };

  async function updateCom(data) {
    const { userName, feedback, time } = data;
    const newComment = { userName, feedback, time };
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      comments: [
        ...comments.slice(0, index),
        newComment,
        ...comments.slice(index + 1),
      ],
    });
    location.reload();
  }

  // const updateCom = async (data) => {

  //   // await updateDoc(doc(db, "products", id), { comments: newComments });
  //   // console.log(newComments);
  //   // console.log(data);
  //   // await updateDoc(docRef, data);
  // };

  // deleting comment
  const handleDel = async (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments.splice(commentIndex, 1); // Remove the comment at the specified index
    await updateDoc(doc(db, "products", id), { comments: updatedComments });
    setComments(updatedComments);
    alert("Comment deleted");
  };
  const toggleForm = () => {
    document.getElementById("form").style.display = "hidden" ? "block" : "";
  };
  return (
    <>
      <div className="p-10 space-y-2 flex-col text-center ">
        <Link to={"/"}>
          <IoArrowBack className="text-3xl" />
        </Link>
        <img src={value.productImage} className="mx-auto" />
        <h1 className="font-semibold">{value.productName}</h1>
        <button
          className="bg-[#ED6926] text-white px-4 py-1 rounded-md mt-3"
          onClick={formShow}
        >
          Add review
        </button>
      </div>
      {comments.length > 0 &&
        comments.map((comment, index) => {
          return (
            <div
              className="px-20 mt-5 bg-gray-50 p-5 flex justify-between"
              key={index}
            >
              <div>
                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Reviewed by {comment.userName} <span>{comment.time}</span>
                  </p>
                </footer>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {comment.feedback}
                </p>
              </div>
              <div className="flex space-x-2 text-2xl">
                <FaEdit onClick={() => updateCommet(index)} />
                <MdDelete className="text-red-600" onClick={handleDel} />
              </div>
            </div>
          );
        })}
      {show ? (
        <form
          className={
            "bg-gray-500  p-10 max-w-lg mx-auto rounded-lg mt-10 space-y-5 text-white"
          }
          id="form"
          onSubmit={handleSubmit(sendData)}
        >
          <div>
            <label>Name</label>
            <input
              className="outline-none px-4 py-1 rounded-md w-full text-black"
              name="userName"
              placeholder="Enter your name"
              {...register("userName", {
                required: "Name field is required",
                minLength: {
                  value: 3,
                  message: "Message should be more than 3 characters",
                },
              })}
            />
          </div>
          <div>
            <label>Share your thoughts</label>
            <textarea
              className="outline-none px-4 py-1 rounded-md w-full text-black"
              name="feedback"
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
          <input
            value={currentTime}
            className="text-black hidden"
            name="time"
            {...register("time")}
          />
          <button className="bg-green-500 px-4 py-1 rounded-lg w-full text-black">
            Send Feedback
          </button>
        </form>
      ) : (
        ""
      )}
      {updatee ? (
        <div>
          <form
            className={
              "bg-gray-500  p-10 max-w-lg mx-auto rounded-lg mt-10 space-y-5 text-white"
            }
            id="form"
            onSubmit={handleSubmit(updateCom)}
          >
            <h1 className="text-center font-semibold">Edit Your Commets</h1>

            <div>
              <label>Name</label>
              <input
                className="outline-none px-4 py-1 rounded-md w-full text-black"
                name="userName"
                placeholder="Enter your name"
                {...register("userName", {
                  required: "Name field is required",
                  minLength: {
                    value: 3,
                    message: "Message should be more than 3 characters",
                  },
                })}
              />
            </div>
            <div>
              <label>Share your thoughts</label>
              <textarea
                className="outline-none px-4 py-1 rounded-md w-full text-black"
                name="feedback"
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
            <input
              value={currentTime}
              className="text-black hidden"
              name="time"
              {...register("time")}
            />
            <button className="bg-green-500 font-semibold px-4 py-1 rounded-lg w-full text-black">
              Update Comment
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Descpage;
