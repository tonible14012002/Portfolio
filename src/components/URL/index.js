

const URL = ({children}) => {
    return (
        <a href={children} className="text-rose-400 dark:text-blue-500 tablet:text-sm text-xs"> 
            {children}
        </a>
    )
}

export default URL