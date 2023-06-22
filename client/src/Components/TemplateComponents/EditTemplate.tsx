import { useLocation } from "react-router-dom"

export default function EditTemplate() {

    const location = useLocation()
    const template = location.state
    return (
        <div>
            {template.name}
        </div>
    )
}
