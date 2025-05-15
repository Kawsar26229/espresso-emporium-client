import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";
import addCoffeeBg from "../../assets/more/11.png";
import { Helmet } from "react-helmet";

function DetailedCoffee() {
  const {
    coffeeName,
    coffeeChef,
    coffeeSupplier,
    coffeeTaste,
    coffeeCategory,
    coffeeDetails,
    coffeePhoto,
  } = useLoaderData();
  return (
    <div
      className="w-9/12 mx-auto p-10"
      style={{ backgroundImage: `url(${addCoffeeBg})` }}
    >
      <Helmet>
        <title>Espresso Emporium | Details Coffee</title>
      </Helmet>
      <Link
        to="/"
        className="flex gap-2 text-xl text-shadow-md text-shadow-gray-800"
      >
        <FaArrowLeft className="mt-1" /> Back to home
      </Link>
      <main className="bg-[#F4F3F0] my-10 rounded-sm py-10">
        <div className="flex justify-center gap-28 my-10">
          <div>
            <img className="w-64" src={coffeePhoto} alt="Coffee" />
          </div>
          <div className="mr-48 mt-12">
            <h4 className="text-3xl mb-2.5 text-shadow-md text-shadow-[#493e3e]">
              Niceties
            </h4>
            <p className="mb-1 text-xl">
              Name: <span className="text-neutral-500">{coffeeName}</span>
            </p>
            <p className="mb-1 text-xl">
              Chef: <span className="text-neutral-500">{coffeeChef}</span>
            </p>
            <p className="mb-1 text-xl">
              Supplier: <span className="text-neutral-500">{coffeeSupplier}</span>
            </p>
            <p className="mb-1 text-xl">
              Taste: <span className="text-neutral-500">{coffeeTaste}</span>
            </p>
            <p className="mb-1 text-xl">
              Category: <span className="text-neutral-500">{coffeeCategory}</span>
            </p>
            <p className="mb-1 text-xl">
              Details:{" "}
              <span className="text-neutral-500">{coffeeDetails}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailedCoffee;
