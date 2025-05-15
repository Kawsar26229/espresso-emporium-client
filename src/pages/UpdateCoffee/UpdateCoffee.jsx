import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import addCoffeeBg from "../../assets/more/11.png";
import { Helmet } from "react-helmet";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function UpdateCoffee() {  
  const {
    _id,
    coffeeName,
    coffeeChef,
    coffeeSupplier,
    coffeeTaste,
    coffeeCategory,
    coffeeDetails,
    coffeePhoto,
  } = useLoaderData();
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        axios.put(`http://localhost:4000/coffees/${_id}`, {
          coffeeName: name,
          coffeeChef: chef,
          coffeeSupplier: supplier,
          coffeeTaste: taste,
          coffeeCategory: category,
          coffeeDetails: details,
          coffeePhoto: photo
        })
        .then(res => {
          if(res.data?.acknowledged) {
            toast.success(`${name} is successfully updated.`, {
              className: 'text-xl'
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
        form.reset()
    }
  return (
    <div
      className="w-9/12 mx-auto p-10"
      style={{ backgroundImage: `url(${addCoffeeBg})` }}
    >
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Helmet>
        <title>Espresso Emporium | Update Coffee</title>
      </Helmet>
      <Link
        to="/"
        className="flex gap-2 text-xl text-shadow-md text-shadow-gray-800"
      >
        <FaArrowLeft className="mt-1" /> Back to home
      </Link>
      <div className="bg-[#F4F3F0] my-10 rounded-sm py-10">
        <h3 className="text-[#331A15] text-4xl font-light text-center text-shadow-md text-shadow-[#331A15] my-4">
          Update Existing Coffee Details
        </h3>
        <p className="w-1/2 mx-auto text-center mt-6 text-neutral-500 text-lg">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleSubmit} className="px-64 mt-10 place-items-center pb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
                <p className="text-lg mb-1">Name</p>
                <input
                  className="input w-96 text-lg"
                  name="name"
                  type="text"
                  defaultValue={coffeeName}
                  placeholder="Enter coffee name"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Chef</p>
                <input
                  className="input w-96 text-lg"
                  name="chef"
                  defaultValue={coffeeChef}
                  type="text"
                  placeholder="Enter coffee chef"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Supplier</p>
                <input
                  className="input w-96 text-lg"
                  name="supplier"
                  type="text"
                  defaultValue={coffeeSupplier}
                  placeholder="Enter coffee supplier"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Taste</p>
                <input
                  className="input w-96 text-lg"
                  name="taste"
                  defaultValue={coffeeTaste}
                  type="text"
                  placeholder="Enter coffee taste"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Category</p>
                <input
                  className="input w-96 text-lg"
                  name="category"
                  defaultValue={coffeeCategory}
                  type="text"
                  placeholder="Enter coffee category"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Details</p>
                <input
                  className="input w-96 text-lg"
                  name="details"
                  type="text"
                  defaultValue={coffeeDetails}
                  placeholder="Enter coffee details"
                />
            </div>
            <div className="col-span-2">
                <p className="text-lg mb-1">Photo</p>
                <input
                  className="input w-full text-lg"
                  name="photo"
                  defaultValue={coffeePhoto}
                  type="text"
                  placeholder="Enter photo URL"
                />
            </div>
            <div className="col-span-2">
                <input type="submit" value="Update Coffee Details" className="btn w-full bg-[#D2B48C]" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateCoffee