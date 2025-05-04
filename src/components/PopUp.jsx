import { useState } from "react";

const PopUp = () =>{
const [showPopUp, setShowPopUp] = useState(false);

    const handlePopUp = () =>{
        setShowPopUp(!showPopUp);
    }
    return(
        <div className={`fixed top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center bg-colorFour/50 ${!showPopUp && 'hidden'}`}>
            <div className="bg-colorTwo h-[500px] w-[700px] relative z-100">
                <div className="absolute right-[5px] top-[5px] cursor-pointer" onClick={handlePopUp}>Close</div>
            </div>
        </div>
    )
}

export default PopUp;