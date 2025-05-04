import { useState } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(1);
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container w-full p-5 px-[100px] py-[100px]">
        <h2 className="text-2xl font-bold pb-10">Projects</h2>
        <div className="flex items-start w-full h-[500px]">
          <div className="w-[20%] h-full">
            <div
              className={`text-lg font-semibold px-[20px] py-[15px] border cursor-pointer border-colorTwo ${
                activeProject === 1 && "bg-colorThree text-colorOne"
              }`}
              onClick={() => setActiveProject(1)}
            >
              Category
            </div>
            <div
              className={`text-lg font-semibold px-[20px] py-[15px] border cursor-pointer border-colorTwo ${
                activeProject === 2 && "bg-colorThree text-colorOne"
              }`}
              onClick={() => setActiveProject(2)}
            >
              Category
            </div>
            <div
              className={`text-lg font-semibold px-[20px] py-[15px] border cursor-pointer border-colorTwo ${
                activeProject === 3 && "bg-colorThree text-colorOne"
              }`}
              onClick={() => setActiveProject(3)}
            >
              Category
            </div>
            <div
              className={`text-lg font-semibold px-[20px] py-[15px] border cursor-pointer border-colorTwo ${
                activeProject === 4 && "bg-colorThree text-colorOne"
              }`}
              onClick={() => setActiveProject(4)}
            >
              Category
            </div>
          </div>
          <div className="text-left p-[20px] border border-colorTwo w-[80%] h-[100%] overflow-auto">
            {activeProject === 1 && (
              <div className="">
                <div>Prooject Title</div>
                <div>Prooject Description</div>
                <div>SKills used</div>
                <div>Screenshots</div>
              </div>
            )}
            {activeProject === 2 && (
              <div className="">
                <div>Prooject Title</div>
                <div>Prooject Description</div>
                <div>SKills used</div>
                <div>Screenshots</div>
              </div>
            )}
            {activeProject === 3 && (
              <div className="">
                <div>Prooject Title</div>
                <div>Prooject Description</div>
                <div>SKills used</div>
                <div>Screenshots</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
