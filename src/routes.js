import Home from "./pages/Home"
import Project from "./pages/Project"
import ProjectDetail from "./pages/ProjectDetail"

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

export {routes}