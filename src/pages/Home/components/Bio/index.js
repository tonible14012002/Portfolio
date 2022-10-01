import Board from "../../../../components/Board"
import Color from "../../../../components/Color"
import Para from "../../../../components/Para"

const Bio = () => {
    return (
        <div className=" rounded-lg p-2">
            <div data-aos="fade-up" className="mb-3">
                <h3 className="tablet:text-2xl text-lg">
                    <Color primary>1. </Color> 
                    <span>About me</span>
                </h3>
            </div>
            <Board data-aos="fade-up" >
                <h4 className="text-base">My name is <Color primary>Bui Ngoc Nam Anh. </Color></h4>
                <h4 className="text-xs text-zinc-400 dark:text-zinc-700">( Fresher Software Engineer )</h4>
                <Para blur className="mt-3 text-sm tablet:text-base">
                    I am currently studying Computer Engineering bachelor at Ho Chi Minh University of Technology - one of the top tier universities based in Ho Chi Minh city, Viet Nam.
                    I enjoy spending hours in cozy coffee shops for coding as well as studying new things. Especially, i have a strong passionate in algorithms and problem solving.
                </Para>
            </Board> 
            <div data-aos="fade-up" className="mb-1 mt-10">
                <h3 className="tablet:text-2xl text-lg">
                    <Color primary>2.</Color> <span>Course Works</span>
                </h3>
            </div>
            <div className="rounded-xl text-sm tablet:text-base text-zinc-200 pt-4 tablet:p-4 pb-4">
                <div data-aos="fade-up" className="grid tablet:grid-cols-[100px_1fr] grid-cols-[90px_1fr] tablet:gap-5 gap-2">
                    <span className="block font-semibold text-zinc-500">At University</span>
                    <Para className="font-light ">
                        <Color primary>Datastructure and Algorithms</Color>, Database System, 
                        <Color primary>Computer Networking</Color>,
                        <Color primary> Operating System</Color>.
                    </Para>
                </div>
                <div data-aos="fade-up" className="grid grid-cols-[100px_1fr] tablet:grid-cols-[110px_1fr] gap-2 tablet:gap-5 mt-3 ">
                    <span className="block font-semibold text-zinc-500">Online Courses</span>
                    <Para className="font-light ">
                        <Color primary>ReactJs fullcourse - Evondev</Color>, 
                        F8 - elearning platform, 
                        <Color primary>Mastering Datastructure and Algorithms - Abdul bari - Udemy</Color>,
                        python - Socratica (youtube),
                        Django - Traversy Media (youtube).
                    </Para>
                </div>
            </div> 
        </div>
    )
}

export default Bio