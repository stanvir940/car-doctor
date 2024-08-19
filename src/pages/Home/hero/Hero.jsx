import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const Hero = () => {
  return (
    <div className="hero bg-white text-black min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="max-w-[480px] max-h-[473px] min-w-0.5 rounded-lg shadow-2xl"
          />
          <div className="max-w-[327px] max-h-[332px] absolute right-0 top-1/2 p-4 border bg-white rounded-lg">
            <img src={parts} alt="" className="" />
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-xs text-orange-600 font-bold">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6 text-gray-600">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary rounded bg-[#FF3811] text-white">
            Get More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
