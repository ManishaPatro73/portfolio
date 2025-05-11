const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id ${sectionId} not found`);
    }
  };
  return (
    <div className="sticky top-0 flex items-center justify-between px-10 py-5 shadow-md bg-colorOne z-20">
      <div className="text-lg text-colorThree font-bold cursor-pointer" onClick={() => scrollToSection("home")}>MANISHA PATRO</div>
      <div className="flex items-center gap-10">
        <div
          className="text-lg font-normal cursor-pointer hover:text-colorThree"
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </div>
        <div
          className="text-lg font-normal cursor-pointer hover:text-colorThree"
          onClick={() => scrollToSection("education")}
        >
          Education
        </div>
        <div
          className="text-lg font-normal cursor-pointer hover:text-colorThree"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </div>
        <div
          className="text-lg font-normal cursor-pointer hover:text-colorThree"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </div>
        <div
          className="text-lg font-normal cursor-pointer hover:text-colorThree"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Header;
