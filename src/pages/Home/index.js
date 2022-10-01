import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Button from "../../components/Button"
import Bio from "./components/Bio"
import { faFacebookF, faGithubAlt, faInstagram } from "@fortawesome/free-brands-svg-icons"


const Home = () => {

    return (
        <div className="Home pt-4">
            <div data-aos="fade-right" className="">
                <h3 className="text-3xl mb-3">Hello!  <span className="text-teal-300">Im  Nam Anh</span></h3>
                <h3 className="text-xl">2nd year Computer Engineer student</h3>
                <h3 className="text-xl mb-8">of HCM University of Technology</h3>

                <Button className="bg-amber-200 p-2 pl-4 pr-4 rounded-xl text-zinc-900 font-semibold flex gap-1 hover:gap-2 transition-all w-[100px]">
                    <span>My CV</span>
                    <span> <FontAwesomeIcon icon={faChevronRight} /></span>
                </Button>
            </div>
            <div data-aos="fade-left" className="w-full flex justify-end">
                <div className="w-[260px] h-[260px] rounded-full -translate-y-4 overflow-hidden mr-4 outline outline-2 ">
                    <img
                        className="w-full h-full object-cover"
                        alt="avatar" src="/avatar.jpg"
                    />
                </div>
            </div>
            <div data-aos="fade-up" className="mt-10">
                <ul className="flex justify-center gap-5 m-auto w-[400px]">
                    <Button className="flex items-center justify-center text-lg hover:-translate-y-1 transition-all rotate-3 outline outline-4 rounded-lg w-[40px] h-[40px]"
                        href="https://www.facebook.com/namanh.bui.549/"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Button>
                    <Button className="flex items-center justify-center text-[50px] hover:-translate-y-1 transition-all -rotate-3 rounded-lg w-[40px] h-[40px]"
                        href="https://www.instagram.com/14maroon/"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Button>
                    <Button className="flex items-center justify-center text-lg hover:-translate-y-1 transition-all rotate-3 outline-4  outline rounded-lg w-[40px] h-[40px]">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </Button>
                </ul>
            </div>
            <div className="w-full mt-10">
                <Bio />
            </div>
            <div data-aos="fade-up"  className="w-fit m-auto">
                <Button 
                    className="flex bg-amber-200 w-[138px] font-semibold text-zinc-900  gap-1 hover:gap-2 transition-all rounded-lg p-4 pt-2 pb-2"
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