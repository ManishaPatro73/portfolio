import ProfileImage from '../image/profile.jpg';
import HeroBackground from '../image/background.jpg';
import resumePdf from '../docs/Manisha_Patro_Resume.pdf';

const Home = () => {
    const homeContent = {
        heading: "Hi I'm Manisha",
        description1: "I’m a Data & Marketing Analyst with 6 years of experience spanning data analytics, market research, product marketing, and customer insights. I’d love to connect and explore if there are any opportunities where my skills in product marketing, customer segmentation, and data-driven strategy could contribute to your team’s goals.",
        description2: "I have worked on several projects that involved building customer lifetime value (CLV) dashboards, conducting sentiment analysis, and optimizing marketing campaigns. I am skilled in tools like R, Tableau, SQL, and Excel, and I’m passionate about using data to inform decisions that drive growth. I also bring a strong research foundation—leading studies on behavioral trends and applying those insights to market positioning and lifecycle strategy.",
    }
    return (
        <section id={'home'} className="w-full flex items-center justify-center h-[calc(100vh-64px)] relative">
            <div className='absolute top-0 left-0 h-full w-full opacity-50 z-0 overflow-hidden'>
                <img src={HeroBackground} alt='HeroBackground' width={'100%'} className='grayscale'/>
            </div>
            <div className="container w-full flex items-center justify-between px-[100px] py-[100px] z-10">
                <div className="text-left w-[60%]">
                    <h1 className="pb-10 text-3xl font-bold">{homeContent.heading}</h1>
                    <div className="pb-5 text-lg">{homeContent.description1}</div>
                    <div className="pb-5 text-lg">{homeContent.description2}</div>
                    <div className='pt-5'>
                        <a href={resumePdf} target="_blank" rel="noreferrer" className='border-2 border-colorThree flex items-center justify-center max-w-fit px-7 py-2 rounded-lg text-lg' download='Manisha_Patro_Resume'>Download Resume</a>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[40%]">
                    <div>
                        <img src={ProfileImage} alt="ProfileImage" width={310} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;