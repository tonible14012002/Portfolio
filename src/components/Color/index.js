
const Color = ({primary, bg, children, className,...props}) => {
    return (
        <span
            {...props}
            className={` ${primary? bg ? "bg-teal-600":"text-teal-400" : bg? "bg-pink-700":"text-pink-500"} ${bg && "rounded-sm p-0.5 pl-1 pr-1 text-white"} ${className}`}
        >{children}</span>
    )
}

export default Color