import { useState } from "react";
import CloseIcon from "../image/icons/close-icon.png";

const PopUp = ({openPopUp, closePopUp, children }) =>{
const [showPopUp, setShowPopUp] = useState(false);
    
    return(
        <div className={`fixed top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center bg-colorFour/50 ${!openPopUp && 'hidden'}`}>
            <div className="bg-colorTwo h-[500px] w-[700px] relative z-100">
                <div className="absolute right-[10px] top-[10px] cursor-pointer" onClick={closePopUp}><img src={CloseIcon} alt="CloseIcon" height={10} width={10}/></div>
                {children}
            </div>
        </div>
    )
}

export default PopUp;