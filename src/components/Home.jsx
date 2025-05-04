import ProfileImage from '../image/profile.jpg'

const Home = () => {
    return (
        <section className="w-full flex items-center justify-center h-lvh">
            <div className="container w-full flex items-center justify-between px-[100px] py-[100px]">
                <div className="text-left w-[60%]">
                    <h1 className="pb-10 text-3xl font-bold">Hi I'm Manisha</h1>
                    <div className="pb-5 text-lg">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                    <div className="pb-10 text-lg">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
                    <div>
                        <button className='border-2 border-colorThree flex items-center justify-center w-[100px] p-2 rounded-lg text-lg'>Resume</button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[40%]">
                    <div>
                        <img src={ProfileImage} alt="ProfileImage" width={400} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;