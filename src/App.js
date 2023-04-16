import {BrowserRouter, Routes, Route} from "react-router-dom"
import {routes} from "./routes"
import DefaultLayout from "./layouts/DefaultLayout";
import Aos from "aos";
import "aos/dist/aos.css"
import ScrollToTop from "./layouts/components/ScrollToTop";

Aos.init()

function App() {
  return (
    <BrowserRouter>
        <DefaultLayout>
          <ScrollToTop>
            <Routes>
                {routes.map((route, index) => {
                  const Page = route.component
                    return (
                      <Route 
                        key={index} path={route.path} 
                        element={<Page />} 
                      />
                    )
                })}
            </Routes>
          </ScrollToTop>
        </DefaultLayout>
    </BrowserRouter>
  );
}
export default App;
