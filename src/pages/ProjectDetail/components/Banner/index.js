


const Banner = ({src, ...props}) => {

    return (
        <div  data-aos="fade-up" className="w-full p-[25%] rounded-xl overflow-hidden mb-10 relative">
            <img className="object-cover w-full absolute top-0 left-0 h-full"
                alt="shoestore"
                src={src || "/shoestore/cover.png"}
                {...props}
            />
        </div>
    )
}

export default Banner