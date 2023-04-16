import { useParams } from "react-router-dom" 
import { projectRoutes } from "../../routes"

const ProjectDetail = () => {
    const {slug} = useParams()
    const { component: DetailPage } = projectRoutes.find(
        route => route.slug === slug
    )

    return (
        <div className="mt-4">
            <DetailPage />
        </div>
    )   
}

export default ProjectDetail