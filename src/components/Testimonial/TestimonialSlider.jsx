import { useEffect } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Ensure the default theme is used for styling
import Splide from "@splidejs/splide";
import SidePanel from "../../assets/images/t1.png";
import Comma from "../../assets/images/comma.png";
import arrow_side from "../../assets/images/arrow_side.png";

const TestimonialSlider = () => {
  const SliderPanelArray = [
    { id: 1, imageUrl: SidePanel },
    { id: 2, imageUrl: SidePanel },
    { id: 3, imageUrl: SidePanel },
    { id: 4, imageUrl: SidePanel },
  ];

  useEffect(() => {
    const splide3 = new Splide(".splide3", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      pauseOnHover: false,
      resetProgress: false,
      pagination: false,
      autoplayInterval: 5000,
    });
    splide3.mount();

    return () => {
      splide3.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-[50%] bg-secondary py-28 mt-28">
      <section
        className="w-full h-full overflow-auto splide splide3"
        aria-label="Full-Page Slider with Orange Progress Bar"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {SliderPanelArray.map((value, index) => (
              <li
                key={`slide_${index}`}
                className="w-full h-full px-12 splide__slide"
              >
                <div className="flex items-center justify-center w-full testimonial_panel">
                  <div className="flex items-center justify-center w-2/5 h-full">
                    <img
                      src={value.imageUrl}
                      alt={`Slide ${index}`}
                      className="flex items-center justify-center w-[90%] p-5 h-4/5"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-3/5 gap-2 text-white">
                    <div className="w-full">
                      <img src={Comma} alt="Side Panel" className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 mx-10">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut sodales turpis et lacinia fermentum.
                          Curabitur vestibulum at arcu sed blandit. In consequat
                          euismod purus nec imperdiet.
                        </p>
                      </div>
                      <div>
                        <div>
                          <p>Title</p>
                        </div>
                        <div>
                          <p>Name</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 my-4">
                      <div><img src={arrow_side} className="w-[80%]" /></div>
                      <div>
                        <p>Read my story</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
