import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router";
import popularImg from "../../assets/more/1.png";
import img1 from "../../assets/1.png";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import axios from "axios";

function PopularProducts() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/coffees")
      .then((res) => {
        setCoffees(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      className="w-9/12 mx-auto p-10 mt-10"
      style={{ backgroundImage: `url(${popularImg})` }}
    >
      <p className="text-center text-xl">--- Sip & Savor ---</p>
      <h3 className="text-[#331A15] text-4xl text-center text-shadow-lg text-shadow-[#331A15] my-4">
        Our Popular Products
      </h3>
      <div className="flex justify-center">
        <Link
          to="/add-coffee"
          className="btn bg-[#E3B577] border-[#331A15] border-1 text-lg font-extralight text-white"
        >
          Add Coffee <FiCoffee className="text-[#331A15]" />
        </Link>
      </div>
      <main className="grid grid-cols-2 gap-4 my-10">
        {coffees?.slice(0,6)?.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
      </main>
      <div className="flex justify-center">
        <Link
          to="/products"
          className="btn bg-[#E3B577] border-[#331A15] border-1 text-lg font-extralight text-white"
        >
          Show More <FiCoffee className="text-[#331A15]" />
        </Link>
      </div>
    </div>
  );
}

export default PopularProducts;
