import Button from "../../../../components/Button"
import Color from "../../../../components/Color"
import  Para from "../../../../components/Para"

const Item = ({title, subTitle, inProgress , src, slug, ...props}) => {

    return (
        <Button data-aos="fade-up"
            className="pl-5 pr-5 relative"
            to={`/projects/${slug}`}
        >
            <div className={`overflow-hidden rounded-xl mb-2 min-w-full p-[25%] relative`}
            >
                <img className="absolute h-full w-full object-cover left-0 top-0" 
                    alt="shoestore" 
                    src={src}
                 />
            </div>
            <h3 className="text-center text-xl tablet:text-lg mb-1 mt-1">
                {title}
            </h3>
            <Para className="text-center text-zinc-300 text-base laptop:text-sm">
                { subTitle }
            </Para>
            {inProgress &&
            <Color bg className="text-sm absolute top-0 -translate-y-[140%] left-6 shadow-2xl">In progress</Color>}
        </Button>
    )
}

export default Item