import React, { useEffect, useState } from "react";
import Productcard from "../components/Productcard";
import axios from "axios";

export default function ProductCards() {
  const productProperties = [
    {
      name: "Grey T-shirt",
      price: 15.99,
      description: "Grey long sleeve T-shirt",
      image: "/724855s.webp",
    },
    {
      name: "Sweatshirt",
      price: 50.99,
      description: "blue long sleeve Tshirt",
      image: "/205867_1696480316.webp",
    },
    {
      name: "Red round neck",
      price: 500,
      description: "red round neck top",
      image: "/download.jpg",
    },
  ];

  const [getProduct, SetgetProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      SetgetProduct(res.data);
    });
  }, []);

  return (
    <div className="w-full p-6 bg-black min-h-screen">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* /w-full space-x-4 grid grid-cols-4 */}
        {getProduct.map((item, index) => (
          <Productcard
            name={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
