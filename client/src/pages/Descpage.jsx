import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../server/firebase";

const Descpage = () => {
    const [value, setValue] = useState("");
    const { id } = useParams();
  
    // getting data from database
    useEffect(() => {
      async function getRecipes() {
        const querySnapshot = await getDoc(doc(db, "products", id));
        setValue(querySnapshot.data());
        console.log(querySnapshot.data());
      }
      getRecipes();
    }, []);

  console.log(value);
  return <></>;
};
export default Descpage;
