import { useEffect } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Ensure the default theme is used for styling
import Splide from "@splidejs/splide";
import SidePanel from "../../../assets/images/side_panel.png";
import SliderImg from "../../../assets/images/transparent_layer.png";

const RightSidePanel = () => {
  const SliderPanelArray = [
    { id: 1, imageUrl: SidePanel },
    { id: 2, imageUrl: SidePanel },
    { id: 3, imageUrl: SidePanel },
    { id: 4, imageUrl: SidePanel },
  ];

  useEffect(() => {
    const splide2 = new Splide(".splide2", {
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
    splide2.mount();

    return () => {
      splide2.destroy();
    };
  }, []);

  return (
    <div className="relative w-1/2 h-full">
      <img src={SliderImg} alt="other" className="absolute inset-0 z-10 w-full h-full" />
      <section
        className="w-full h-screen overflow-auto splide splide2"
        aria-label="Full-Page Slider with Orange Progress Bar"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {SliderPanelArray.map((value, index) => (
              <li key={`slide_${index}`} className="splide__slide">
                <img
                  src={value.imageUrl}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RightSidePanel;
