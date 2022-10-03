import Board from "../../../../components/Board"
import Color from "../../../../components/Color"
import Para from "../../../../components/Para"
import Button from "../../../../components/Button"
import URL from "../../../../components/URL"

const Bio = () => {
    return (
        <div className=" rounded-lg p-2">
            <div data-aos="fade-up">
                <div className="mb-3">
                    <h3 className="tablet:text-2xl text-lg">
                        <Color primary>1. </Color> 
                        <span>About me</span>
                    </h3>
                </div>
                <Board >
                    <h4 className="text-base">My name is <Color primary>Bui Ngoc Nam Anh. </Color></h4>
                    <h4 className="text-xs text-zinc-400 dark:text-zinc-700">( Fresher Software Engineer )</h4>
                    <Para blur className="mt-3 text-sm tablet:text-base">
                        I am currently studying Computer Engineering bachelor at Ho Chi Minh University of Technology - one of the top tier universities based in Ho Chi Minh city, Viet Nam.
                        I enjoy spending hours in cozy coffee shops for coding as well as studying new things. Especially, i have a strong passionate in algorithms and problem solving.
                    </Para>
                </Board>           
            </div>
            <div data-aos="fade-up" className=" mt-6">
                <div className="mb-1">
                    <h3 className="tablet:text-2xl text-lg">
                        <Color primary>2.</Color> <span>Coursework</span>
                    </h3>
                </div>
                <div className="rounded-xl text-sm tablet:text-base text-zinc-200 pt-4 tablet:p-4">
                    <div className="grid tablet:grid-cols-[110px_1fr] grid-cols-[100px_1fr] tablet:gap-5 gap-2">
                        <span className="block font-semibold text-zinc-500">Fomal Courses</span>
                        <Para className="font-light ">
                            <Color primary>Datastructure and Algorithms</Color>, Database System, 
                            <Color primary>Computer Networking</Color>,
                            <Color primary> Operating System</Color>.
                        </Para>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] tablet:grid-cols-[110px_1fr] gap-2 tablet:gap-5 mt-3 ">
                        <span className="block font-semibold text-zinc-500">Online Courses</span>
                        <Para className="font-light ">
                            <Color primary>ReactJs fullcourse - Evondev</Color>, 
                            F8 - elearning platform, 
                            <Color primary>Mastering Datastructure and Algorithms - Abdul bari - Udemy</Color>,
                            Django - Traversy Media.
                        </Para>
                    </div>
                </div> 
            </div>
            <div data-aos="fade-up">
                <div className="mb-1">
                    <h3 className="tablet:text-2xl text-lg">
                        <Color primary>3.</Color> <span>Contact</span>
                    </h3>
                </div>
                <div  className="p-4 m-auto tablet:text-base text-sm">
                    <div className="m-auto flex gap-4 items-baseline mb-2">
                        <Color bg className="p-0 pl-2 pr-2">Gmail</Color>
                        <span className="font-light break-all"
                            href="https://www.instagram.com/14maroon/">
                            <URL>
                                namanhble14012002@gmail.com
                            </URL>
                        </span>
                    </div>
                    <div className="m-auto flex gap-4 items-baseline mb-2">
                        <Color primary bg className="p-0 pl-2 pr-2">Facebook</Color>
                        <Button className="text-rose-400 dark:text-pink-500 font-light break-all"
                            href="https://www.facebook.com/namanh.bui.549/">
                            <URL>
                                https://www.facebook.com/namanh.bui.549/
                            </URL>
                        </Button>
                    </div>
                    <div className="m-auto flex gap-4 items-baseline mb-2">
                        <Color primary bg className="p-0 pl-2 pr-2">Instagram</Color>
                        <Button className="font-light break-all"
                            href="https://www.instagram.com/14maroon/">
                            <URL>
                            https://www.instagram.com/14maroon/
                            </URL>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bio