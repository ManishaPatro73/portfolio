"use client";

import { useState } from "react";

const SkillsOld = ({}) => {
  const [activeSkill, setActiveSkill] = useState(1);

  return (
    <section id={'skills'} className="w-full flex items-center justify-center">
      <div className="container w-full p-5 px-[100px] py-[100px]">
        <h2 className="text-2xl font-bold pb-10">Skills</h2>
        <div>
          <div className="flex items-center justify-left">
            <div
              className={`text-lg font-semibold px-[20px] py-[15px] border cursor-pointer border-colorTwo ${
                activeSkill === 1 && "border-colorFour"
              }`}
              onClick={() => setActiveSkill(1)}
            >
              Data Analytics & BI
            </div>
            <div
              className={`text-lg font-semibold px-[20px] py-[15px] border cursor-pointer border-colorTwo ${
                activeSkill === 2 && "border-colorFour"
              }`}
              onClick={() => setActiveSkill(2)}
            >
              CRM & Marketing Tech
            </div>
            <div
              className={`text-lg font-semibold px-[20px] py-[15px] border cursor-pointer border-colorTwo ${
                activeSkill === 3 && "border-colorFour"
              }`}
              onClick={() => setActiveSkill(3)}
            >
              Market Research
            </div>
          </div>
          <div className="text-left p-[20px] border border-colorTwo min-h-[200px]">
            {activeSkill === 1 && (
              <div className="text-lg">
                SQL, Python, R, Tableau, Looker, IBM SPSS, Adobe Analytics,
                Excel
              </div>
            )}
            {activeSkill === 2 && (
              <div className="text-lg">
                Salesforce, Google Analytics, Wunderkind, SEO, Adobe Suite,
                Canva
              </div>
            )}
            {activeSkill === 3 && (
              <div className="text-lg">
                Qualtrics, Survey Design, MRI Simmons, Nielsen
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOld;
