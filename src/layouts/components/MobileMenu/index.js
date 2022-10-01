import Button from "../../../components/Button"

const MobileMenu = () => {

    return (
        <ul className="tablet:hidden bg-zinc-800 shadow-md dark:bg-white text-sm min-w-[150px] rounded-lg absolute right-0 top-full
                flex flex-col overflow-hidden"
        >
            <li>
                <Button
                    className="block p-2 pl-4 pr-4 dark:hover:bg-zinc-100 hover:bg-zinc-700 w-full text-start"
                    to="/"
                >
                    Home
                </Button>
            </li>
            <li>
                <Button
                    className="block p-2 pl-4 pr-4 dark:hover:bg-zinc-100 hover:bg-zinc-700 w-full text-start"
                    to="/projects"
                >
                    Projects
                </Button>
            </li>
            <li>
                <Button
                    className="block p-2 pl-4 pr-4 dark:hover:bg-zinc-100 hover:bg-zinc-700 w-full text-start"
                    href="https://github.com/tonible14012002/Portfolio"
                >
                    Source
                </Button>
            </li>
        </ul>
    )
}

export default MobileMenu