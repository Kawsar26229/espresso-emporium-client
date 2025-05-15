import axios from "axios";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

function CoffeeCard({ coffee, coffees, setCoffees }) {
  const {
    _id,
    coffeeName,
    coffeeChef,
    coffeeSupplier,
    coffeeTaste,
    coffeeCategory,
    coffeeDetails,
    coffeePhoto,
  } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:4000/coffees/${id}`)
          .then((res) => {
            if (res.data.acknowledged) {
              Swal.fire({
                title: "Good Luck !!!",
                text: "Deleted coffee details",
                icon: "success",
              });
              setCoffees(coffees?.filter((c) => c._id !== id));
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
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
            to={`/details-coffee/${_id}`}
            className="btn bg-[#D2B48C] text-white rounded-lg join-item"
          >
            <FaEye />
          </Link>
          <Link
            to={`/update-coffee/${_id}`}
            className="btn bg-[#3C393B] text-white rounded-lg join-item"
          >
            <FaPencilAlt />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-[#EA4744] text-white rounded-lg join-item"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
