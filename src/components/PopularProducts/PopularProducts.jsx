import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router";
import popularImg from "../../assets/more/1.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function PopularProducts() {
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
        <Link className="btn bg-[#E3B577] border-[#331A15] border-1 text-lg font-extralight text-white">
          Add Coffee <FiCoffee className="text-[#331A15]" />
        </Link>
      </div>
      <main className="grid grid-cols-2 gap-4 my-10">
        <div className="card card-side bg-[#F5F4F1] shadow-sm">
          <figure>
            <img src={img1} alt="Movie" />
          </figure>
          <div className="card-body mt-6">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
          <div className="card-actions justify-end items-center mr-8">
            <div className="join join-vertical gap-3">
              <Link to='/details-coffee' className="btn bg-[#D2B48C] text-white rounded-lg join-item">
                <FaEye />
              </Link>
              <Link to='/update-coffee' className="btn bg-[#3C393B] text-white rounded-lg join-item">
                <FaPencilAlt />
              </Link>
              <Link to='/delete-coffee' className="btn bg-[#EA4744] text-white rounded-lg join-item">
                <MdDelete />
              </Link>
            </div>
          </div>
        </div>
       <div className="card card-side bg-[#F5F4F1] shadow-sm">
          <figure>
            <img src={img1} alt="Movie" />
          </figure>
          <div className="card-body mt-6">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
          <div className="card-actions justify-end items-center mr-8">
            <div className="join join-vertical gap-3">
              <button className="btn bg-[#D2B48C] text-white rounded-lg join-item">
                <FaEye />
              </button>
              <button className="btn bg-[#3C393B] text-white rounded-lg join-item">
                <FaPencilAlt />
              </button>
              <button className="btn bg-[#EA4744] text-white rounded-lg join-item">
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-[#F5F4F1] shadow-sm">
          <figure>
            <img src={img1} alt="Movie" />
          </figure>
          <div className="card-body mt-6">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
          <div className="card-actions justify-end items-center mr-8">
            <div className="join join-vertical gap-3">
              <button className="btn bg-[#D2B48C] text-white rounded-lg join-item">
                <FaEye />
              </button>
              <button className="btn bg-[#3C393B] text-white rounded-lg join-item">
                <FaPencilAlt />
              </button>
              <button className="btn bg-[#EA4744] text-white rounded-lg join-item">
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-[#F5F4F1] shadow-sm">
          <figure>
            <img src={img1} alt="Movie" />
          </figure>
          <div className="card-body mt-6">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
          <div className="card-actions justify-end items-center mr-8">
            <div className="join join-vertical gap-3">
              <button className="btn bg-[#D2B48C] text-white rounded-lg join-item">
                <FaEye />
              </button>
              <button className="btn bg-[#3C393B] text-white rounded-lg join-item">
                <FaPencilAlt />
              </button>
              <button className="btn bg-[#EA4744] text-white rounded-lg join-item">
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-[#F5F4F1] shadow-sm">
          <figure>
            <img src={img1} alt="Movie" />
          </figure>
          <div className="card-body mt-6">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
          <div className="card-actions justify-end items-center mr-8">
            <div className="join join-vertical gap-3">
              <button className="btn bg-[#D2B48C] text-white rounded-lg join-item">
                <FaEye />
              </button>
              <button className="btn bg-[#3C393B] text-white rounded-lg join-item">
                <FaPencilAlt />
              </button>
              <button className="btn bg-[#EA4744] text-white rounded-lg join-item">
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PopularProducts;
