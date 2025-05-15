import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import notFoundImg from '../../assets/404/404.gif'

function NotFound() {
  return (
    <div className="w-11/12 mx-auto my-8">
        <Link to='/' className="flex gap-2 justify-center content-center text-xl text-shadow-md text-shadow-gray-800"><FaArrowLeft className="mt-1" /> Back to home</Link>
        <img className="mx-auto" src={notFoundImg} alt="404 Page Not Found" />
    </div>
  )
}

export default NotFound