
const Color = ({primary, bg, children, className,...props}) => {
    return (
        <span
            {...props}
            className={`
                ${primary? bg ? "bg-teal-600 dark:bg-teal-500":"text-teal-400 dark:text-teal-500" : bg? "bg-pink-700 dark:bg-pink-500":"text-pink-500"}
                ${bg && "rounded-sm p-0.5 pl-1 pr-1 text-white h-fit w-fit"} 
                ${className}`}
        >{children}</span>
    )
}

export default Color