import Button from "../../../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-regular-svg-icons"

const Header = () => {

    const handleSwitchTheme = () => {

    }
    return (
        <header className="w-full h-[80px] leading-[80px]">
            <div className="inline-block">
                <Button className="flex items-center text-lg"
                    to="/"
                >
                    <span className="block font-semibold bg-zinc-800 text-xl w-[30px] h-[30px] text-center leading-[30px] rounded-full mr-2">
                        T
                    </span>
                    <span>Nam Anh</span>
                </Button>                
            </div>

            <ul className=" inline-block m-0 p-0 gap-3 leading-[80px] ml-8">
                <li className="inline-block mr-4 ">
                    <Button className=" hover:text-teal-200"
                        to="/projects"    
                    >Projects</Button>
                </li>
                {/* <li className="inline-block mr-4 ">
                    <Button className=" hover:text-teal-200">Techs</Button>
                </li> */}
                <li className="inline-block mr-4 ">
                    <Button className=" hover:text-teal-200">Contact</Button>
                </li>
            </ul>
            <div className=" float-right leading-none h-full flex items-center">
                <Button className="bg-amber-200 w-[35px] h-[35px] rounded-lg text-zinc-900 text-sm"
                    onClick={handleSwitchTheme}
                >
                    <FontAwesomeIcon icon={faSun} />
                </Button>
            </div>
        </header>
    )
}

export default Header