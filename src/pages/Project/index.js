import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../components/Button"
import Item from "./components/Item"
import Color from "../../components/Color"

const Project = () => {

    return (
        <div className="Project pt-4">
            <div data-aos="fade-up" className="">
                <h3 className="m-auto w-fit text-xl text-zinc-400 dark:text-zinc-600">Welcome to</h3>
                <h2 className="m-auto w-fit text-center text-3xl">
                    a list of self-study Projects i <Color primary>built.</Color>
                </h2>
            </div>
            <div data-aos="fade-up"  className="w-full mt-6 mb-16">
                <Button bg
                    className="w-[138px] transition-all flex justify-end gap-1 hover:gap-2 m-auto"
                    to="/"
                >
                    <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                    <span>Home Page</span>
                    
                </Button>
            </div>
            <div className="tablet:grid tablet:grid-cols-2 
                    flex flex-col gap-10 tablet:gap-y-10 tablet:gap-8">
                <Item 
                    title="Shoes store"
                    src= "/shoestore/cover.png"
                    subTitle="Based on Ananas - a Vietnamese localbrand using reactjs and django at the backend."
                    inProgress
                />
            </div>
        </div>
    )
}

export default Project