const Board = ({children, className, ...props}) => {
    return (
        <div {...props}
            className={`rounded-xl text-md bg-zinc-800 dark:bg-amber-100 dark:bg-opacity-[0.35] p-4  ${className}`}
        >
            {children}
        </div>
    )
}

export default Board