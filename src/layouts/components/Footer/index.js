import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"


const Footer = () => {
    return (
        <div className="mt-8 w-full">
            <div className="w-fit pt-4 pb-8 m-auto text-sm text-zinc-600 font-semibold">
                <span className="pr-1"><FontAwesomeIcon icon={faCopyright} /></span>
                <span>Bui Ngoc Nam Anh. All right reserved</span>
            </div>
        </div>
    )
}

export default Footer