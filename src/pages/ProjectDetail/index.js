import { useParams } from "react-router-dom" 
import ShoeStore from "./ShoeStore"
import { useRef } from "react"

const ProjectDetail = () => {
    const {slug} = useParams()
    const slugMap = useRef({
        "shoestore": ShoeStore
    })
    
    const ProjectPage = slugMap.current[slug]
    return (
        <div className="mt-4">
            <ProjectPage />
        </div>
    )   
}

export default ProjectDetail