import { IoIosMail, IoMdCall } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import footerBg from "../../assets/more/10.png";
import footerLogo from "../../assets/more/logo1.png";
import footerBg1 from '../../assets/more/24.jpg'

// #331A15
function Footer() {
  return (
    <footer>
      <div
        className="footer text-neutral-content p-10"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <main className="w-9/12 mx-auto grid grid-cols-2 gap-10">
          <aside>
            <img src={footerLogo} className="w-14" alt="Espresso Emporium" />
            <h3 className="text-[#331A15] text-3xl text-shadow-md text-shadow-[#331A15]">
              Espressor Emporium
            </h3>
            <p className="text-stone-800 text-lg w-96">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <nav className="flex gap-2.5 my-4">
              <FaFacebook className="text-2xl text-[#331A15]" />
              <FaTwitter className="text-2xl text-[#331A15]" />
              <FaInstagram className="text-2xl text-[#331A15]" />
              <FaLinkedin className="text-2xl text-[#331A15]" />
            </nav>
            <div>
              <h3 className="text-[#331A15] text-3xl text-shadow-md text-shadow-[#331A15] mb-2">
                Get in Touch
              </h3>
              <p className="text-stone-800 text-lg flex gap-2.5">
                <IoMdCall className="mt-1" /> +88 01533 333 333
              </p>
              <p className="text-stone-800 text-lg flex gap-2.5">
                <IoIosMail className="mt-1" /> info@gmail.com
              </p>
              <p className="text-stone-800 text-lg flex gap-2.5">
                <CiLocationOn className="mt-1" /> 72, Wall street, King Road,
                Dhaka
              </p>
            </div>
          </aside>
          <aside className="mt-18">
            <h3 className="text-[#331A15] text-3xl text-shadow-md text-shadow-[#331A15]">
              Connect with Us
            </h3>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="w-96 input input-md placeholder-stone-600 text-black text-lg mt-6"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-96 input input-md placeholder-stone-600 text-black text-lg mt-6"
              />
              <textarea
                placeholder="Message"
                className="textarea resize-none h-36 w-96 input input-md placeholder-stone-600 text-black text-lg mt-6"
              />
              <button className="btn btn-outline w-40 mt-6 text-[#331A15]">
                Send Message
              </button>
            </form>
          </aside>
        </main>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4" style={{ backgroundImage: `url(${footerBg1})` }}>
        <aside>
          <p className="text-white text-md">
            Copyright © {new Date().getFullYear()} - All right reserved by Espresso Emporium
          </p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
