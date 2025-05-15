import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router";

function Products() {
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
    <div className="w-11/12 mx-auto p-10">
      <Helmet>
        <title>Espresso Emporium | Products</title>
      </Helmet>
      <div className="w-9/12 mx-auto p-10">
        <h3 className="text-[#331A15] text-4xl text-center text-shadow-lg text-shadow-[#331A15] mb-4">
          Our Coffee House
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
          {coffees?.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Products;
