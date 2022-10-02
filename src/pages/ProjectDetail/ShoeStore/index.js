import Button from "../../../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Color from "../../../components/Color"
import Para from "../../../components/Para"
import Board from "../../../components/Board"
import URL from "../../../components/URL"
import { useEffect } from "react"

const ShoeStore = () => {

    useEffect(() => {
        document.title = "shoestore - Nam Anh"
    }, [])
    return (
    <>
        <div data-aos="fade-right" className="mb-4 flex gap-1 items-baseline justify-start">
            <Button
                to="/projects"    
            >  
                <Color primary className="dark:hover:text-teal-600 transition-all">
                    Projects
                </Color>
            </Button> 
            <span className="text-[10px] pl-2 pr-2 -translate-y-[2px]"><FontAwesomeIcon icon={faChevronRight} /></span>
            <span className="text-xl">Shoe Store</span>
        </div>
        <div  data-aos="fade-up" className="w-full rounded-xl overflow-hidden mb-10">
            <img className="object-cover w-full"
                alt="shoestore"
                src="/shoestore/cover.png"
            />
        </div>

        <Para data-aos="fade-up" className="font-light text-zinc-100 mb-10 tablet:text-base text-sm">
            &emsp;&emsp;   
            A simple online shose store that i built based on Ananas - a famous Vietnamese shoes localband but in different UI.
            The website has basic <Color bg>features</Color> including <Color primary>search</Color> and <Color primary>filter</Color> product by categories, price range.
            A session cart that allow annonymous user to add, checkout.
        </Para>

        <div  data-aos="fade-up" className="m-auto pl-4 pr-4 mb-10">
            <div  data-aos="fade-up">
                <h3 className="tablet:text-lg text-base mb-4 font-semibold text-teal-400">Framework and Libraries used</h3>
                <Board className="p-4 m-auto rounded-lg tablet:text-base text-sm ">
                    <div className="m-auto flex gap-2 tablet:gap-4 items-baseline mb-2">
                        <Color bg className="p-0 pl-1 pr-1 tablet:pl-2 tablet:pr-2">Frontend</Color>
                        <Para className="tablet:text-base text-sm font-light">ReactJs, React Router, FontAwesomeIcon, Axios, Toastify, ...</Para>
                    </div>
                    <div className="m-auto flex gap-2 tablet:gap-4 items-baseline">
                        <Color primary bg className="p-0 pl-1 pr-1 tablet:pl-2 tablet:pr-2">Backend</Color>
                        <Para className="text-zinc-200 tablet:text-base text-sm font-light">Django, Django Rest Framework, corsheader.</Para>
                    </div>                    
                </Board>
            </div>
            <div  data-aos="fade-up">
                <h3  className="mt-4 tablet:text-lg text-base font-semibold text-teal-400">Source</h3>
                <div  className="p-4 m-auto tablet:text-base text-sm">
                    <div className="m-auto flex gap-4 items-baseline mb-2">
                        <Color bg className="p-0 pl-2 pr-2">Frontend</Color>
                        <Button className="text-rose-400 dark:text-pink-500 font-light break-all"
                            href="https://github.com/tonible14012002/shoestore-reactjs">
                            <URL>
                                https://github.com/tonible14012002/shoestore-reactjs
                            </URL>
                        </Button>
                    </div>
                    <div className="m-auto flex gap-4 items-baseline mb-1">
                        <Color primary bg className="p-0 pl-2 pr-2">Backend</Color>
                        <Button className="font-light break-all"
                            href="https://github.com/tonible14012002/django-restfull-shoes-store">
                            <URL>
                                https://github.com/tonible14012002 /django-restfull-shoes-store
                            </URL>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <div data-aos="fade-up" className="mt-4 mb-6 tablet:text-base text-sm">
            <div className="w-[85%] mb-2 m-auto rounded-xl overflow-hidden">
                <img className="object-cover w-full"
                    alt="filter"
                    src="/shoestore/shoestore-filter.png"
                />
            </div>
            <h3 className="text-center text-zinc-400 font-light dark:text-zinc-700">Laptop Filter UI</h3>
        </div>
        
        <div  data-aos="fade-up" className="mt-6 mb-6 w-[85%] m-auto grid grid-cols-2 gap-4  tablet:text-base text-sm">
            <div>
                <div className="mb-2 rounded-xl overflow-hidden">
                    <img 
                        src="/shoestore/mobile-cart.png"
                        alt="mobile"
                    />
                </div>
                <h3 className="text-center text-zinc-400 font-light dark:text-zinc-700">Checkout page mobile UI</h3>
            </div>
            <div >
                <div className="mb-2 rounded-xl overflow-hidden">
                    <img 
                        src="/shoestore/order.png"
                        alt="mobile"
                    />
                </div>
                <h3 className="text-center text-zinc-400 font-light dark:text-zinc-700">mobile order success UI.</h3>
            </div>
        </div> 
    </>
    )
}

export default ShoeStore