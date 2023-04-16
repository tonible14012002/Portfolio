

const Image = ({title, src, className, ...props}) => {
    return (
        <div className="w-full my-4">
            <div className={`mx-auto relative rounded-xl overflow-hidden ${className}`} {...props}>
                <img alt={title} src={src} 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                />
            </div>
            <span className="block mt-2 w-full font-normal text-center text-sm text-zinc-500">{title}</span>
        </div>
    )
}

export default Image