import cup1 from '../../assets/cups/Rectangle 9.png'
import cup2 from '../../assets/cups/Rectangle 10.png'
import cup3 from '../../assets/cups/Rectangle 11.png'
import cup4 from '../../assets/cups/Rectangle 12.png'
import cup5 from '../../assets/cups/Rectangle 13.png'
import cup6 from '../../assets/cups/Rectangle 14.png'
import cup7 from '../../assets/cups/Rectangle 15.png'
import cup8 from '../../assets/cups/Rectangle 16.png' 
function Gallery() {
  return (
    <div className="w-9/12 mx-auto p-10 my-10">
      <p className="text-center text-xl">Follow Us Now</p>
      <h3 className="text-[#331A15] text-4xl text-center text-shadow-lg text-shadow-[#331A15] my-4">
        Follow on Instagram
      </h3>
      <div className="grid grid-cols-4 gap-2.5 mt-10">
        <img src={cup1} alt="Cup-1" />
        <img src={cup2} alt="Cup-2" />
        <img src={cup3} alt="Cup-3" />
        <img src={cup4} alt="Cup-4" />
        <img src={cup5} alt="Cup-5" />
        <img src={cup6} alt="Cup-6" />
        <img src={cup7} alt="Cup-7" />
        <img src={cup8} alt="Cup-8" />
      </div>
    </div>
  );
}

export default Gallery;
