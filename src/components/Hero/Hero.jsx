import { useEffect } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Ensure the default theme is used for styling
import Splide from "@splidejs/splide";
import SilderImg from "../../assets/images/hero_bg.png";

const Hero = () => {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      pauseOnHover: false,
      resetProgress: false,
      height: "100vh",
      pagination: false,
      width: "100vw",
      autoplayInterval: 5000,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div>
      <section
        className="w-full h-screen overflow-auto splide"
        aria-label="Full-Page Slider with Orange Progress Bar"
      >
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <img
                src={SilderImg}
                alt="Placeholder Slide 01"
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 z-10 flex flex-col items-start justify-start w-full p-0 text-white text_slider_panel m-28">
                <div className="p-0 m-0">
                  <h1>Home / Why work with us</h1>
                </div>
                <div className="p-0 m-0">
                  <h1 className="text-white font-extralight heading_font" style={{lineHeight:"4rem"}}>
                    Headline #1
                  </h1>
                </div>
                <div className="pt-6">
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                </div>
              </div>
            </li>
            <li className="splide__slide">
              <img
                src={SilderImg}
                alt="Placeholder Slide 02"
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 z-10 flex flex-col items-start justify-start w-full p-0 text-white text_slider_panel m-28">
                <div className="p-0 m-0">
                  <h1>Home / Why work with us</h1>
                </div>
                <div className="p-0 m-0">
                  <h1 className="text-white font-extralight heading_font" style={{lineHeight:"4rem"}}>
                    Headline #2
                  </h1>
                </div>
                <div className="pt-6">
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                </div>
              </div>
            </li>
            <li className="splide__slide">
              <img
                src={SilderImg}
                alt="Placeholder Slide 03"
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 z-10 flex flex-col items-start justify-start w-full p-0 text-white text_slider_panel m-28">
                <div className="p-0 m-0">
                  <h1>Home / Why work with us</h1>
                </div>
                <div className="p-0 m-0">
                  <h1 className="text-white font-extralight heading_font" style={{lineHeight:"4rem"}}>
                    Headline #3
                  </h1>
                </div>
                <div className="pt-6">
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-0 m-0 splide__progress bg-trasparent z-1">
          <div className="p-0 m-0 bg-primary splide__progress__bar"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
