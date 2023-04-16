
const Section = ({children, className, ...props}) => {
    return (
        <h3 className={`text-teal-500 text-lg tablet:text-xl font-medium ${className}`} {...props}>
            {children}
        </h3>
    )
}

export default Section