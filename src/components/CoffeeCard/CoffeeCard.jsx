import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

function CoffeeCard(coffee) {
    const {coffeeName, coffeeChef, coffeeSupplier, coffeeTaste, coffeeCategory, coffeeDetails, coffeePhoto} = coffee?.coffee
    console.log(coffeePhoto);
    
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-sm">
      <figure className="pl-5 w-full">
        <img src={coffeePhoto} alt="Coffee" />
      </figure>
      <div className="card-body mt-6">
        <h2 className="text-2xl font-bold">Name: {coffeeName}</h2>
        <p className="text-lg">Chef: {coffeeChef}</p>
        <p className="text-lg">Supplier: {coffeeSupplier}</p>
        <p className="text-lg">Taste: {coffeeTaste}</p>
        <p className="text-lg">Category: {coffeeCategory}</p>
        <p className="text-lg">Details: {coffeeDetails}</p>
      </div>
      <div className="card-actions justify-end items-center mr-8">
        <div className="join join-vertical gap-5">
          <Link
            to="/details-coffee"
            className="btn bg-[#D2B48C] text-white rounded-lg join-item"
          >
            <FaEye />
          </Link>
          <Link
            to="/update-coffee"
            className="btn bg-[#3C393B] text-white rounded-lg join-item"
          >
            <FaPencilAlt />
          </Link>
          <Link
            to="/delete-coffee"
            className="btn bg-[#EA4744] text-white rounded-lg join-item"
          >
            <MdDelete />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
