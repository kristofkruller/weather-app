import { useNavigate } from "react-router-dom"
import ActionBtn from "../components/btn/ActionBtn"
import { RouteErrorProps } from "../../app"

const Error = ({ message }: RouteErrorProps) => {

    const navigate = useNavigate()
    let res: string = message || "This url slug is invalid"

    return (
        <section className='wrapper text-slate-400 dark:text-neutral-50 uppercase w-full'>
            <span className="mb-20 text-xl">{res}</span>
            <ActionBtn content="back" onClick={() => navigate("/")} />
        </section>
    )
}

export default Error