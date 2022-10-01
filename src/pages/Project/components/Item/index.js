import Button from "../../../../components/Button"
import Color from "../../../../components/Color"

const Item = ({title, subTitle, inProgress , src, ...props}) => {

    return (
        <Button data-aos="fade-up"
            className="pl-5 pr-5 relative"
            to="/projects/shoestore"
        >
            <div className={`overflow-hidden w-full rounded-xl mb-2 ${inProgress && "opacity-70"}`}
            >
                <img className="w-full object-cover" 
                    alt="shoestore" 
                    src={src}
                 />
            </div>
            <h3 className="text-center text-xl tablet:text-lg mb-1 mt-1">
                {title}
            </h3>
            <h4 className="text-center text-zinc-300 font-light text-base laptop:text-sm">
                { subTitle }
            </h4>
            {inProgress &&
            <Color bg className="text-sm absolute top-0 -translate-y-[140%] left-6 shadow-2xl">In progress</Color>}
        </Button>
    )
}

export default Item