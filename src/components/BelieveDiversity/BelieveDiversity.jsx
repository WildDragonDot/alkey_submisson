import LadderPanel from "../../assets/images/ladder_panel.png";

const BelieveDiversity = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full h-full bg-secondary">
        <div className="flex items-start justify-center p-24 pb-1 believeDelivery">
          <div className="w-1/2 h-full">
            <h1 className="text-white font-extralight heading_font">
              We believe in{" "}
              <span className="text-primary">diversity & inclusion</span>
            </h1>
          </div>
          <div className="flex flex-col w-1/2 h-full gap-3">
            <p className="text-justify text-white">
              At CaSE we do not just accept difference — we celebrate it, we
              support it, and we thrive on it for the benefit of our employees,
              our services, our industry and our community. We are proud to be
              an equal opportunity employer. Guided by our values and beliefs,
              we foster an inclusive workplace culture where employees thrive
              because of their differences, not in spite of them.
            </p>
            <p className="text-justify text-white">
              {" "}
              Our values and beliefs, we foster an inclusive workplace culture
              where employees thrive because of their differences, not in spite
              of them Our Commitment to reinventing the standard. With more than
              20 nationalities represented in our global workforce, we firmly
              believe that our ability to deliver high-quality results is fueled
              by our active efforts to embed diversity and inclusion. We
              recognise, respect, and strive to create an environment where
              employees can excel and feel a true sense of belonging.
            </p>
            <div className="py-5 text-xl font-semibold text-white">
              Some of our strategic initiatives include:
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={LadderPanel}
            alt="ladder panel"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BelieveDiversity;
