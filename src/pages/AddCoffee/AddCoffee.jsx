import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import addCoffeeBg from "../../assets/more/11.png";

function AddCoffee() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div
      className="w-9/12 mx-auto p-10"
      style={{ backgroundImage: `url(${addCoffeeBg})` }}
    >
      <Link
        to="/"
        className="flex gap-2 text-xl text-shadow-md text-shadow-gray-800"
      >
        <FaArrowLeft className="mt-1" /> Back to home
      </Link>
      <div className="bg-[#F4F3F0] my-10 rounded-sm py-10">
        <h3 className="text-[#331A15] text-4xl font-light text-center text-shadow-md text-shadow-[#331A15] my-4">
          Add New Coffee
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
                  placeholder="Enter coffee name"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Chef</p>
                <input
                  className="input w-96 text-lg"
                  name="name"
                  type="text"
                  placeholder="Enter coffee chef"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Supplier</p>
                <input
                  className="input w-96 text-lg"
                  name="name"
                  type="text"
                  placeholder="Enter coffee supplier"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Taste</p>
                <input
                  className="input w-96 text-lg"
                  name="name"
                  type="text"
                  placeholder="Enter coffee taste"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Category</p>
                <input
                  className="input w-96 text-lg"
                  name="name"
                  type="text"
                  placeholder="Enter coffee category"
                />
            </div>
            <div>
                <p className="text-lg mb-1">Details</p>
                <input
                  className="input w-96 text-lg"
                  name="name"
                  type="text"
                  placeholder="Enter coffee details"
                />
            </div>
            <div className="col-span-2">
                <p className="text-lg mb-1">Photo</p>
                <input
                  className="input w-full text-lg"
                  name="name"
                  type="text"
                  placeholder="Enter photo URL"
                />
            </div>
            <div className="col-span-2">
                <input type="submit" value="Add Coffee" className="btn w-full bg-[#D2B48C]" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCoffee;
