import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
// import { useParams } from "react-router-dom" 
import Button from "../../components/Button"
import Color from "../../components/Color"

const ProjectDetail = ({name, ...props}) => {
    // const {slug} = useParams()

    return (
        <div className="mt-4">
            <div data-aos="fade-right" className="mb-4 flex gap-1 items-baseline justify-start">
                <Button className="text-teal-400 hover:text-teal-500 transition-all"
                    to="/projects"    
                >
                    Projects
                </Button> 
                <span className="text-[10px] pl-2 pr-2 -translate-y-[2px]"><FontAwesomeIcon icon={faChevronRight} /></span>
                <span className="text-xl font-semibold">{name || "Shoe Store"}</span>
            </div>
            <div  data-aos="fade-up" className="w-full rounded-xl overflow-hidden mb-10">
                <img className="object-cover w-full"
                    alt="shoestore"
                    src="/shoestore.png"
                />
            </div>

            <p  data-aos="fade-up" className="font-light text-zinc-100 mb-10">
                &emsp;&emsp;   
                A simple online shose store that i built based on Ananas - a famous Vietnamese shoes localband but in different UI.
                The website has basic <Color bg>features</Color> including <Color primary>search</Color> and <Color primary>filter</Color> product by categories, price range.
                A session cart that allow annonymous user to add, checkout.
            </p>

            <div  data-aos="fade-up" className="m-auto pl-4 pr-4 mb-10">
                <div  data-aos="fade-up">
                    <h3 className="text-lg mb-4 font-semibold text-teal-400">Framework and Libraries used</h3>
                    <div className="p-4 m-auto  bg-zinc-800 rounded-lg">
                        <div className="m-auto flex gap-4 items-baseline mb-2">
                            <Color bg className="p-0 pl-2 pr-2">Frontend</Color>
                            <p className="text-zinc-200 text-md font-light">ReactJs, React Router, FontAwesomeIcon, Axios, Toastify, ...</p>
                        </div>
                        <div className="m-auto flex gap-4 items-baseline">
                            <Color primary bg className="p-0 pl-2 pr-2">Backend</Color>
                            <p className="text-zinc-200 text-md font-light">Django, Django Rest Framework, corsheader.</p>
                        </div>                    
                    </div>
                </div>
                <div  data-aos="fade-up">
                    <h3  className="mt-4 text-lg font-semibold text-teal-400">Source</h3>
                    <div  className="p-4 m-auto">
                        <div className="m-auto flex gap-4 items-baseline mb-2">
                            <Color bg className="p-0 pl-2 pr-2">Frontend</Color>
                            <Button className="text-rose-400 text-md font-light break-all"
                                href="https://github.com/tonible14012002/shoestore-reactjs">
                                https://github.com/tonible14012002/shoestore-reactjs
                            </Button>
                        </div>
                        <div className="m-auto flex gap-4 items-baseline mb-1">
                            <Color primary bg className="p-0 pl-2 pr-2">Backend</Color>
                            <Button className="text-rose-400 text-md font-light break-all"
                                href="https://github.com/tonible14012002/django-restfull-shoes-store">
                                https://github.com/tonible14012002 /django-restfull-shoes-store
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="mt-4 mb-6">
                <div className="w-[85%] mb-2 m-auto rounded-xl overflow-hidden">
                    <img className="object-cover w-full"
                        alt="filter"
                        src="/filter.png"
                    />
                </div>
                <h3 className="text-center text-zinc-400 font-light">Laptop Filter UI</h3>
            </div>
            
            <div  data-aos="fade-up"  className="mt-6 mb-6 w-[85%] m-auto grid grid-cols-2 gap-4">
                <div>
                    <div className="mb-2 rounded-xl overflow-hidden">
                        <img 
                            src="/mobile-cart.png"
                            alt="mobile"
                        />
                    </div>
                    <h3 className="text-center text-zinc-400 font-light">Checkout page mobile UI</h3>
                </div>
                <div >
                    <div className="mb-2 rounded-xl overflow-hidden">
                        <img 
                            src="/order.png"
                            alt="mobile"
                        />
                    </div>
                    <h3 className="text-center text-zinc-400 font-light">mobile order success UI.</h3>
                </div>
            </div>
        </div>
    )   
}

export default ProjectDetail