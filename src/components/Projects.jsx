const Projects = () =>{
    return(
        <section className="w-full flex items-center justify-center">
            <div className="container w-full p-5 px-[100px] py-[100px]">
                <h2 className="text-2xl font-bold pb-10">Projects</h2>
                <div className="flex items-start w-full h-[500px]">
                    <div className="w-[20%] h-full">
                        <div className="text-lg font-semibold px-[20px] py-[15px] border border-secondaryColor">Category</div>
                        <div className="text-lg font-semibold px-[20px] py-[15px] border border-secondaryColor">Category</div>
                        <div className="text-lg font-semibold px-[20px] py-[15px] border border-secondaryColor">Category</div>
                        <div className="text-lg font-semibold px-[20px] py-[15px] border border-secondaryColor">Category</div>
                        <div className="text-lg font-semibold px-[20px] py-[15px] border border-secondaryColor">Category</div>
                    </div>
                    <div className="text-left p-[20px] border border-secondaryColor w-[80%] h-[100%] overflow-auto">
                        <div className="text-lg">Messaging Frameworks, Go-to-Market, Personas, Campaigns, Feature Adoption, Copywriting, Canva, Adobe Creative Suite, Email, Video Storyboarding</div>
                        {/* <div className="text-lg">Messaging Frameworks, Go-to-Market, Personas, Campaigns, Feature Adoption, Copywriting, Canva, Adobe Creative Suite, Email, Video Storyboarding</div>
                    <div className="text-lg">Messaging Frameworks, Go-to-Market, Personas, Campaigns, Feature Adoption, Copywriting, Canva, Adobe Creative Suite, Email, Video Storyboarding</div>
                    <div className="text-lg">Messaging Frameworks, Go-to-Market, Personas, Campaigns, Feature Adoption, Copywriting, Canva, Adobe Creative Suite, Email, Video Storyboarding</div>
                    <div className="text-lg">Messaging Frameworks, Go-to-Market, Personas, Campaigns, Feature Adoption, Copywriting, Canva, Adobe Creative Suite, Email, Video Storyboarding</div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;