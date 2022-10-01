import Color from "../../../../components/Color"

const Bio = () => {
    return (
        <div className=" rounded-lg p-2">
            <div data-aos="fade-up" className="mb-3">
                <h3 className="text-2xl">
                    <span className="text-teal-300">1.</span> <span>About me</span>
                </h3>
            </div>
            <div data-aos="fade-up" className="rounded-xl text-md text-zinc-200 bg-zinc-800 p-4">
                <h4 className="text-xl">My name is <span className="text-teal-400">Bui Ngoc Nam Anh. </span></h4>
                <h4 className="text-sm text-zinc-400">( Fresher Software Engineer )</h4>
                <p className="mt-3 font-light text-zinc-300">
                    I am currently studying Computer Engineering bachelor at Ho Chi Minh University of Technology - one of the top tier universities based in Ho Chi Minh city, Viet Nam.
                    I enjoy spending hours in cozy coffee shops for coding as well as studying new things. Especially, i have a strong passionate in algorithms and problem solving.
                </p>
            </div> 
            <div data-aos="fade-up" className="mb-1 mt-10">
                <h3 className="text-2xl">
                    <span className="text-teal-300">2.</span> <span>Course Works</span>
                </h3>
            </div>
            <div data-aos="fade-up" className="rounded-xl text-md text-zinc-200 p-4">
                <div className="grid grid-cols-[100px_1fr] gap-5">
                    <span className="block font-semibold text-zinc-400">At University</span>
                    <p className="font-light ">
                        <span className="text-teal-400">Datastructure and Algorithms</span>, Database System, 
                        <span className="text-teal-400">Computer Networking</span>,
                        <span className="text-teal-400"> Operating System</span>.
                    </p>
                </div>
                <div data-aos="fade-up" className="grid grid-cols-[110px_1fr] gap-5 mt-3">
                    <span className="block font-semibold text-zinc-400">Online Courses</span>
                    <p className="font-light ">
                        <span className="text-teal-400">ReactJs fullcourse - Evondev</span>, 
                        F8 - elearning platform, 
                        <Color primary>Mastering Datastructure and Algorithms - Abdul bari - Udemy</Color>,
                        python - Socratica (youtube),
                        Django - Traversy Media (youtube).
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default Bio