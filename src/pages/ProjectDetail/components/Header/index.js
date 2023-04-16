import Button from "../../../../components/Button"
import Color from "../../../../components/Color"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Header = ({pageName ,...props}) => {
    return (
        <div data-aos="fade-right" className="mb-4 flex gap-1 items-baseline justify-start">
            <Button
                to="/projects"    
            >  
                <Color primary className="dark:hover:text-teal-600 transition-all">
                    Projects
                </Color>
            </Button> 
            <span className="text-[10px] pl-2 pr-2 -translate-y-[2px]"><FontAwesomeIcon icon={faChevronRight} /></span>
            <span className="text-xl">{pageName}</span>
        </div>
    )
}

export default Header