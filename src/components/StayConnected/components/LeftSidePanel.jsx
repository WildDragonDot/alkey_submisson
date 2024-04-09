import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import logo1 from "../../../assets/images/stay_1.png";
import logo2 from "../../../assets/images/stay_2.png";
import logo3 from "../../../assets/images/stay_3.png";

const LeftSidePanel = () => {
  return (
    <div className="w-1/2 p-16 border-0 stay_connected_left">
      <div className="heading_panel">
        <h1 className="font-extralight heading_font">
          We <span className="text-primary">stay connected</span>
        </h1>
      </div>
      <Accordion
        defaultExpanded
        className="bg-transparent border-0"
        style={{ boxShadow: "none" }}
      >
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography className="flex items-start justify-start w-full">
            <div className="flex items-center justify-center w-full gap-5">
              <img
                src={logo1}
                alt="image_layer"
                className="object-contain w-8 h-8"
              />
              <span className="w-full font-bold text-black">
                Quarterly Business Updates
              </span>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="flex justify-between pr-6 text-justify border-r-4 p_text_color border-primary">
            We strive to stay connected as a team through communication and
            collaboration. This materialises every quarter through our Quarterly
            Business Update events. These gatherings are immersive sessions
            where every team member, regardless of rank or tenure, comes
            together to contribute to our overarching business strategy, and
            stay connected. They are opportunities to learn from our seasoned
            leaders and to also share personal insights and achievements that
            can steer our collective future. In an ever-evolving engineering
            landscape, staying connected isn’t just a benefit—it’s essential.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="bg-transparent border-0"
        style={{ boxShadow: "none" }}
      >
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography>
            <div className="flex items-center justify-center w-full gap-5">
              <img
                src={logo2}
                alt="image_layer"
                className="object-contain w-8 h-8"
              />
              <span className="w-full font-bold text-black">
                Industry Events & Networking
              </span>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="flex justify-between pr-6 text-justify border-r-4 p_text_color border-primary">
            We strive to stay connected as a team through communication and
            collaboration. This materialises every quarter through our Quarterly
            Business Update events. These gatherings are immersive sessions
            where every team member, regardless of rank or tenure, comes
            together to contribute to our overarching business strategy, and
            stay connected. They are opportunities to learn from our seasoned
            leaders and to also share personal insights and achievements that
            can steer our collective future. In an ever-evolving engineering
            landscape, staying connected isn’t just a benefit—it’s essential.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="bg-transparent border-0"
        style={{ boxShadow: "none" }}
      >
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          <Typography>
            <div className="flex items-center justify-center w-full gap-5">
              <img
                src={logo3}
                alt="image_layer"
                className="object-contain w-8 h-8"
              />
              <span className="w-full font-bold text-black">
                Industry Events & Networking
              </span>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="flex justify-between pr-6 text-justify border-r-4 p_text_color border-primary">
            We strive to stay connected as a team through communication and
            collaboration. This materialises every quarter through our Quarterly
            Business Update events. These gatherings are immersive sessions
            where every team member, regardless of rank or tenure, comes
            together to contribute to our overarching business strategy, and
            stay connected. They are opportunities to learn from our seasoned
            leaders and to also share personal insights and achievements that
            can steer our collective future. In an ever-evolving engineering
            landscape, staying connected isn’t just a benefit—it’s essential.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LeftSidePanel;
