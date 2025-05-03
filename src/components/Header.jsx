const Header = () =>{
    return(
        <div className="sticky top-0 flex items-center justify-between px-10 py-5 shadow-md">
            <div className="text-lg text-tertiaryColor font-bold">MANISHA PATRO</div>
            <div className="flex items-center gap-10">
                <div className="text-lg font-normal cursor-pointer hover:text-tertiaryColor">Experience</div>
                <div className="text-lg font-normal cursor-pointer hover:text-tertiaryColor">Education</div>
                <div className="text-lg font-normal cursor-pointer hover:text-tertiaryColor">Projects</div>
                <div className="text-lg font-normal cursor-pointer hover:text-tertiaryColor">Skills</div>
                <div className="text-lg font-normal cursor-pointer hover:text-tertiaryColor">Contact</div>
            </div>
        </div>
    )
}

export default Header;