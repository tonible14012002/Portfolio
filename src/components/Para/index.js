
const Para = ({children, blur, className, ...props}) => {
    return (
    <p className={`text-zinc-100 tablet:text-base text-sm font-base dark:text-zinc-900 ${blur? "text-zinc-50": ""} ${className}`}
        {...props}
    >
            {children}
        </p>
    )
}

export default Para