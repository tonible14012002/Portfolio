
const Para = ({children, blur, className, ...props}) => {
    return (
    <p className={`font-light dark:text-zinc-900 ${blur? "text-zinc-300": ""} ${className}`}
        {...props}
    >
            {children}
        </p>
    )
}

export default Para