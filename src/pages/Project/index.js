import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../components/Button"
import Item from "./components/Item"

const Project = () => {

    return (
        <div className="Project pt-4">
            <div data-aos="fade-up" className="">
                <h3 className="m-auto w-fit text-xl text-zinc-400">Welcome to</h3>
                <h2 className="m-auto w-fit text-center text-3xl">
                    a list of self-study Projects i <span className="text-teal-400">built.</span>
                </h2>
            </div>
            <div data-aos="fade-up"  className="w-full mt-6 mb-16">
                <Button
                    className="w-[152px] transition-all flex gap-1 hover:gap-2 m-auto bg-amber-200 font-semibold rounded-lg p-4 pt-2 pb-2 text-zinc-900"
                    onClick={()=> {}}
                >
                    <span>My TechStack</span>
                    <span><FontAwesomeIcon icon={faChevronRight} /></span>
                </Button>
            </div>
            <div className="tablet:grid tablet:grid-cols-2 
                    flex flex-col gap-10 tablet:gap-y-10 tablet:gap-8">
                <Item 
                    title="Shoes store"
                    src= "/shoestore.png"
                    subTitle="Based on Ananas - a Vietnamese localbrand using reactjs and django at the backend."
                    inProgress
                />
            </div>
        </div>
    )
}

export default Project