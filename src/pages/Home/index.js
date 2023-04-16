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
        document.title = "Nam Anh"
    }, [])

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
        <div className="Home tablet:pt-4">
            <div className="tablet:grid tablet:grid-cols-[1fr_150px] flex flex-col-reverse gap-6 tablet:gap-0">
                <div data-aos="fade-right" className="font-">
                    <h3 className="tablet:text-3xl text-2xl tablet:mb-3 mb-2 font-medium ">Hello!  <Color primary>Im  Nam Anh</Color></h3>
                    <h3 className="tablet:text-xl text-lg">3rd year Computer Engineer student</h3>
                    <h3 className="tablet:text-xl text-lg tablet:mb-8 mb-4">of HCM University of Technology</h3>

                    <Button bg className="flex gap-1 hover:gap-2 transition-all w-[100px] outline outline-1 outline-zinc-900"
                        href="https://drive.google.com/file/d/1Hi51gwONUe1pxMB8p3cO2nrfp2NuJ1-K/view?usp=share_link"
                    >
                        <span>My CV</span>
                        <span> <FontAwesomeIcon icon={faChevronRight} /></span>
                    </Button>
                </div>
                <div className="rounded-xl overflow-hidden outline outline-2 relative
                        mt-4
                        p-[50%]
                        "
                    data-aos="fade-left"
                >
                    <img
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover"
                        alt="avatar" src={avatarSrc[avatar]}
                    />
                </div>
            </div>
            <hr className="mt-8 ml-4 mr-4 border-zinc-700 dark:border-zinc-400 m-auto"/>
            <div className="w-full mt-4">
                <Bio />
            </div>
            <div data-aos="fade-up"  className="w-fit m-auto">
                <Button bg
                    className="flex w-[140px] gap-1 hover:gap-2 transition-all rounded-lg p-4 pt-2 pb-2"
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