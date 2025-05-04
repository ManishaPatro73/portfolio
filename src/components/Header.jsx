const Header = () =>{
    return(
        <div className="sticky top-0 flex items-center justify-between px-10 py-5 shadow-md bg-colorOne z-10">
            <div className="text-lg text-colorThree font-bold">MANISHA PATRO</div>
            <div className="flex items-center gap-10">
                <div className="text-lg font-normal cursor-pointer hover:text-colorThree">Experience</div>
                <div className="text-lg font-normal cursor-pointer hover:text-colorThree">Education</div>
                <div className="text-lg font-normal cursor-pointer hover:text-colorThree">Projects</div>
                <div className="text-lg font-normal cursor-pointer hover:text-colorThree">Skills</div>
                <div className="text-lg font-normal cursor-pointer hover:text-colorThree">Contact</div>
            </div>
        </div>
    )
}

export default Header;