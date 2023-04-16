import Home from "./pages/Home"
import Project from "./pages/Project"
import ProjectDetail from "./pages/ProjectDetail"
import ShoeStore from "./pages/ProjectDetail/ShoeStore"
import HomeSecurity from "./pages/ProjectDetail/HomeSecurity"

const routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "/projects",
        component: Project
    },
    {
        path: "/projects/:slug",
        component: ProjectDetail
    }
]

const projectRoutes = [
    {
        slug: "shoestore",
        component: ShoeStore
    },
    {
        slug: "home-security",
        component: HomeSecurity
    }
]

export {routes, projectRoutes}