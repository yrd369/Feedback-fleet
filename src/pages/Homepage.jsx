import Card from "../components/Card";
import { db } from "../../server/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
function Homepage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs);
    }
    getData();
  }, []);
  return (
    <>
      <Hero />
      <div className="mt-10 px-5">
      <div className="grid grid-cols-4">
        {products.map((product, index) => {
          return (
            <Link to={"/desc/" + product.data().productName} key={index}>
              <Card
                key={index}
                productName={product.data().productName}
                image={product.data().productImage}
              />
            </Link>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default Homepage;
