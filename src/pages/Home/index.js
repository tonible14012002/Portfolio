import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Button from "../../components/Button"
import Bio from "./components/Bio"
import { faFacebookF, faGithubAlt, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Color from "../../components/Color"

const Home = () => {

    return (
        <div className="Home pt-4">
            <div data-aos="fade-right" className="">
                <h3 className="tablet:text-3xl text-2xl tablet:mb-3 mb-2">Hello!  <Color primary>Im  Nam Anh</Color></h3>
                <h3 className="tablet:text-xl text-lg">2nd year Computer Engineer student</h3>
                <h3 className="tablet:text-xl text-lg tablet:mb-8 mb-4">of HCM University of Technology</h3>

                <Button bg className="flex gap-1 hover:gap-2 transition-all w-[100px]">
                    <span>My CV</span>
                    <span> <FontAwesomeIcon icon={faChevronRight} /></span>
                </Button>
            </div>
            <div data-aos="fade-left" className="w-full flex justify-end tablet:mt-4 mt-10">
                <div className="tablet:w-[260px] tablet:h-[260px] 
                        rounded-full -translate-y-4 overflow-hidden mr-4 outline outline-2 
                        w-[180px] h-[180px]
                        ">
                    <img
                        className="w-full h-full object-cover"
                        alt="avatar" src="/avatar.jpg"
                    />
                </div>
            </div>
            <div data-aos="fade-up" className="mt-10">
                <ul className="flex justify-center gap-6 m-auto w-fit">
                    <Button className="flex items-center justify-center text-lg hover:-translate-y-1 transition-all rotate-3 outline outline-2 tablet:outline-4  rounded-lg w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px]"
                        href="https://www.facebook.com/namanh.bui.549/"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Button>
                    <Button className="flex items-center justify-center text-lg hover:-translate-y-1 transition-all -rotate-3 outline outline-2 tablet:outline-4  rounded-lg w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px]"
                        href="https://www.instagram.com/14maroon/"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Button>
                    <Button className="flex items-center justify-center text-lg hover:-translate-y-1 transition-all rotate-3 outline-2 tablet:outline-4   outline rounded-lg w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px]">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </Button>
                </ul>
            </div>
            <div className="w-full mt-10">
                <Bio />
            </div>
            <div data-aos="fade-up"  className="w-fit m-auto">
                <Button bg
                    className="flex w-[138px] gap-1 hover:gap-2 transition-all rounded-lg p-4 pt-2 pb-2"
                    to="/projects"
                >
                    <span>My Projects</span>
                    <span> <FontAwesomeIcon icon={faChevronRight} /></span>
                </Button>
            </div>
        </div>
    )
}

export default Home