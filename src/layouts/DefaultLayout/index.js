import Footer from "../components/Footer"
import Header from "../components/Header"

const DefaultLayout = ({children, ...props}) => {
    return (
        <div className="w-full tablet:w-[600px] m-auto pl-4 pr-4 overflow-hidden">
            <div className="max-h-[80px]">
                <Header />
            </div>
            <div className="min-h-[calc(100vh-80px)]">
              {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default DefaultLayout