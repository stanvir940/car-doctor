import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Carosel = () => {
  return (
    <div className="carousel w-full md:h-[600px] md:my-6 rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />

        <div className="absolute flex h-full left-0 top-0 items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <div>
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <h4 className="text-xl font-thin">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </h4>
            </div>
            <div className="flex ">
              <button className="btn btn-warning w-36 rounded-sm">
                Warning
              </button>
              <button className="btn btn-outline btn-primary w-36 ml-3 rounded-sm">
                Primary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 space-x-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle bg-slate-100">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-slate-100">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />

        <div className="absolute flex h-full left-0 top-0 items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <div>
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <h4 className="text-xl font-thin">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </h4>
            </div>
            <div className="flex ">
              <button className="btn btn-warning w-36 rounded-sm">
                Warning
              </button>
              <button className="btn btn-outline btn-primary w-36 ml-3 rounded-sm">
                Primary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 space-x-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle bg-slate-100">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-slate-100">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />

        <div className="absolute flex h-full left-0 top-0 items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <div>
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <h4 className="text-xl font-thin">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </h4>
            </div>
            <div className="flex ">
              <button className="btn btn-warning w-36 rounded-sm">
                Warning
              </button>
              <button className="btn btn-outline btn-primary w-36 ml-3 rounded-sm">
                Primary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 space-x-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle bg-slate-100">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-slate-100">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />

        <div className="absolute flex h-full left-0 top-0 items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <div>
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <h4 className="text-xl font-thin">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </h4>
            </div>
            <div className="flex ">
              <button className="btn btn-warning w-36 rounded-sm">
                Warning
              </button>
              <button className="btn btn-outline btn-primary w-36 ml-3 rounded-sm">
                Primary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 space-x-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle bg-slate-100">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle bg-slate-100">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />

        <div className="absolute flex h-full left-0 top-0 items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <div>
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <h4 className="text-xl font-thin">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </h4>
            </div>
            <div className="flex ">
              <button className="btn btn-warning w-36 rounded-sm">
                Warning
              </button>
              <button className="btn btn-outline btn-primary w-36 ml-3 rounded-sm">
                Primary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 space-x-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle bg-slate-100">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle bg-slate-100">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />

        <div className="absolute flex h-full left-0 top-0 items-center bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <div>
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <h4 className="text-xl font-thin">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </h4>
            </div>
            <div className="flex ">
              <button className="btn btn-warning w-36 rounded-sm">
                Warning
              </button>
              <button className="btn btn-outline btn-primary w-36 ml-3 rounded-sm">
                Primary
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 space-x-2 flex -translate-y-1/2 transform justify-end">
          <a href="#slide5" className="btn btn-circle bg-slate-100">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle bg-slate-100">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
