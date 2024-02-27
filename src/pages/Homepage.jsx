import Card from "../components/Card";
import { db } from "../../server/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="bg-gray-300 grid grid-cols-4">
      {products.map((product, index) => {
        return (
          <Link to={"/desc/" + product.data().productName} key={index}>
            <Card
              key={index}
              desc={product.data().productName}
              image = {product.data().productImage}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Homepage;
