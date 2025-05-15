import { Link } from 'react-router';
import bannerImg from '../../assets/more/3.png'
function Banner() {
  return (
    <div
      className="hero h-9/10"
      style={{
        backgroundImage:
          `url(${bannerImg})`,
      }}
    >
      <div className='grid grid-cols-2 gap-6'>
        <div></div>
        <div className="max-w-2xl my-74">
          <h1 className="mb-5 text-5xl text-white">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5 text-neutral-300 text-xl">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <Link className="btn bg-[#E3B577] text-[#242222] border-none text-lg">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
