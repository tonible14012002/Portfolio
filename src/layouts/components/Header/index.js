import Button from "../../../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-regular-svg-icons"
import { faLightbulb as faDarkbulb, faBars } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import MobileMenu from "../MobileMenu"
// import { useEffect, useLayoutEffect } from "react"

const Header = () => {
    const [lightmode, setLightmode] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        if (lightmode)
            document.documentElement.classList.remove("dark")
        else
            document.documentElement.classList.add("dark")
    }, [lightmode])

    useEffect(() => {
        const hideMenu = () => {
            setShowMenu(false)
        }
        window.addEventListener("scroll", hideMenu)
        return () => window.removeEventListener("scroll", hideMenu)
    }, [])

    const handleSwitchTheme = () => {
        setLightmode(!lightmode)
    }

    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className="relative w-full h-[80px] leading-[80px] z-50 ">
            <div className="inline-block">
                <Button className="flex items-center text-lg font-medium"
                o
                    to="/"
                >
                    <span className="block font-semibold bg-zinc-800 dark:bg-purple-500 dark:text-amber-50 text-xl w-[30px] h-[30px] text-center leading-[30px] rounded-full mr-2">
                        M
                    </span>
                    <span>Nam Anh</span>
                </Button>                
            </div>

            <ul className="hidden tablet:inline-block m-0 p-0 gap-3 leading-[80px] ml-8">
                <li className="inline-block mr-4 ">
                    <Button className=" hover:text-teal-200 dark:hover:text-teal-500"
                        to="/projects"    
                    >Projects</Button>
                </li>
                {/* <li className="inline-block mr-4 ">
                    <Button className=" hover:text-teal-200">Techs</Button>
                </li> */}
                <li className="inline-block mr-4 ">
                    <Button className=" hover:text-teal-200 dark:hover:text-teal-500"
                        href="https://github.com/tonible14012002/Portfolio"
                    >
                        Source
                    </Button>
                </li>
            </ul>
            <div className="tablet:hidden relative float-right leading-none h-full flex items-center ml-2 ">
                <Button className="transition-all bg-zinc-700 border-2 border-zinc-600 bg-transparent
                 text-amber-50 w-[35px] h-[35px] rounded-lg dark:text-zinc-900 text-sm "
                    onClick={handleToggleMenu}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                {showMenu && <MobileMenu />}
            </div>
            <div className=" float-right leading-none h-full flex items-center">
                <Button className="transition-all bg-amber-200 hover:bg-amber-300 dark:bg-purple-500 dark:hover:bg-purple-600 dark:text-white w-[35px] h-[35px] rounded-lg text-zinc-900 text-sm "
                    onClick={handleSwitchTheme}
                >
                    <FontAwesomeIcon icon={lightmode? faLightbulb : faDarkbulb } />
                </Button>
            </div>
        </header>
    )
}

export default Header