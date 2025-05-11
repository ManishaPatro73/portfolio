import { useState } from "react";
import EducationImage from "../image/education.jpg";
import ArrowRightIcon from "../image/icons/top-right.png";
import PopUp from "./PopUp";

const Education = () => {
  const [openEduPopUp, setOpenEduPopUp] = useState(false);
  // const [popUpContent, setPopUpContent] = useState('');
  const openPopUp = () => {
    setOpenEduPopUp(true);
  };
  const closePopUp = () => {
    setOpenEduPopUp(false);
  };
  return (
    <section
      id={"education"}
      className="w-full flex items-center justify-center"
    >
      <div className="container w-full flex items-center justify-between px-[100px] py-[100px]">
        <div className="text-left w-[50%]">
          <h2 className="text-2xl font-bold pb-10">Education</h2>
          <div>
            <div
              className="pb-5 flex items-start gap-[10px] cursor-pointer w-fit group"
              onClick={openPopUp}
            >
              <div>
                <div className="text-xl font-semibold">
                  Consumer Insights Analyst
                </div>
                <div className="text-xl font-normal">Extern</div>
                <div className="text-xl font-thin">New york</div>
                <div className="text-xl font-thin">Jan 2025 to present</div>
              </div>
              <div className="p-[10px] opacity-0 group-hover:opacity-100 ease-in duration-100">
                <img
                  src={ArrowRightIcon}
                  height={12}
                  width={12}
                  alt="ArrowRightIcon"
                />
              </div>
            </div>
            <div
              className="pb-5 flex items-start gap-[10px] cursor-pointer w-fit group"
              onClick={openPopUp}
            >
              <div>
                <div className="text-xl font-semibold">
                  Consumer Insights Analyst
                </div>
                <div className="text-xl font-normal">Extern</div>
                <div className="text-xl font-thin">New york</div>
                <div className="text-xl font-thin">Jan 2025 to present</div>
              </div>
              <div className="p-[10px] opacity-0 group-hover:opacity-100 ease-in duration-100">
                <img
                  src={ArrowRightIcon}
                  height={12}
                  width={12}
                  alt="ArrowRightIcon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[50%]">
          <img src={EducationImage} width={480} alt="EducationImage" className="grayscale border-4 border-colorThree rounded-lg"></img>
        </div>
      </div>
      <PopUp openPopUp={openEduPopUp} closePopUp={closePopUp}>
        <div>
          <div className="text-left px-[20px] py-[20px]">
            <div className="text-xl font-semibold pb-[5px]">
              Consumer Insights Analyst
            </div>
            <div className="text-xl font-normal pb-[5px]">Extern</div>
            <div className="text-xl font-thin pb-[5px]">New york</div>
            <div className="text-xl font-thin pb-[5px]">Jan 2025 to present</div>
            <div>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
            </div>
          </div>
        </div>
      </PopUp>
    </section>
  );
};

export default Education;
