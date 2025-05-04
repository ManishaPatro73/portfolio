import EducationImage from '../image/educationImage.jpg';

const Education = () => {
    return (
        <section id={'education'} className="w-full flex items-center justify-center">
            <div className="container w-full flex items-center justify-between px-[100px] py-[100px]">
                <div className="text-left w-[50%]">
                    <h2 className="text-2xl font-bold pb-10">Experience</h2>
                    <div>
                        <div className="pb-5 cursor-pointer">
                            <div className="text-xl font-semibold">Consumer Insights Analyst</div>
                            <div className="text-xl font-normal">Extern</div>
                            <div className="text-xl font-thin">New york</div>
                            <div className="text-xl font-thin">Jan 2025 to present</div>
                        </div>
                        <div className="pb-5 cursor-pointer">
                            <div className="text-xl font-semibold">Consumer Insights Analyst</div>
                            <div className="text-xl font-normal">Extern</div>
                            <div className="text-xl font-thin">New york</div>
                            <div className="text-xl font-thin">Jan 2025 to present</div>
                        </div>
                        <div className="pb-5 cursor-pointer">
                            <div className="text-xl font-semibold">Consumer Insights Analyst</div>
                            <div className="text-xl font-normal">Extern</div>
                            <div className="text-xl font-thin">New york</div>
                            <div className="text-xl font-thin">Jan 2025 to present</div>
                        </div>
                        <div className="pb-5 cursor-pointer">
                            <div className="text-xl font-semibold">Consumer Insights Analyst</div>
                            <div className="text-xl font-normal">Extern</div>
                            <div className="text-xl font-thin">New york</div>
                            <div className="text-xl font-thin">Jan 2025 to present</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[50%]">
                    <img src={EducationImage} width={650}></img>
                </div>
            </div>
        </section>
    )
}

export default Education;