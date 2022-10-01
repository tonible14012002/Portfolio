import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Button from "../../components/Button"
import Bio from "./components/Bio"
import Color from "../../components/Color"
import { useEffect, useState } from "react"

const Home = () => {
    const avatarSrc = ["/avatar.jpg", "/avatar1.jpg", "/avatar2.jpg"]
    const [avatar, setAvatar] = useState(0)

    useEffect(() => {
        const timerId = setInterval(() => {
            setAvatar(prev => {
                console.log("set")
                if (prev === avatarSrc.length-1) 
                    return 0
                else
                    return prev + 1
            })
        }, 5000)
        return () => clearInterval(timerId)
    }, [avatarSrc.length])

    return (
        <div className="Home pt-4">
            <div className="tablet:grid tablet:grid-cols-[1fr_150px]">
                <div data-aos="fade-right" className="">
                    <h3 className="tablet:text-3xl text-2xl tablet:mb-3 mb-2">Hello!  <Color primary>Im  Nam Anh</Color></h3>
                    <h3 className="tablet:text-xl text-lg">2nd year Computer Engineer student</h3>
                    <h3 className="tablet:text-xl text-lg tablet:mb-8 mb-4">of HCM University of Technology</h3>

                    <Button bg className="flex gap-1 hover:gap-2 transition-all w-[100px]">
                        <span>My CV</span>
                        <span> <FontAwesomeIcon icon={faChevronRight} /></span>
                    </Button>
                </div>
                <div data-aos="fade-left" className="rounded-full overflow-hidden outline outline-2
                        m-auto
                        mt-4
                        w-[150px] h-[150px]"
                >
                    <img
                        className="w-full h-full object-cover"
                        alt="avatar" src={avatarSrc[avatar]}
                    />
                </div>
            </div>
            <hr className="mt-6 ml-4 mr-4 border-zinc-700 dark:border-zinc-400 m-auto"/>
            {/* <div data-aos="fade-up" className="mt-0">
                <ul className="flex justify-center gap-6 m-auto w-fit">
                    <Button className="flex items-center justify-center text-lg hover:-translate-y-1 transition-all outline outline-2 tablet:outline-4  rounded-lg w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px]"
                        href="https://www.facebook.com/namanh.bui.549/"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Button>
                    <Button className="flex items-center justify-center text-lg hover:-translate-y-1 transition-all outline outline-2 tablet:outline-4  rounded-lg w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px]"
                        href="https://www.instagram.com/14maroon/"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Button>
                    <Button className="flex items-center justify-center text-lg hover:-translate-y-1 transition-all outline-2 tablet:outline-4   outline rounded-lg w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px]">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </Button>
                </ul>
            </div> */}

            <div className="w-full mt-2">
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