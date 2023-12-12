import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom'
import ActionBtn from '../components/btn/ActionBtn'

const RouteError = () => {
    
    const navigate = useNavigate()

    const error = useRouteError()

    let res

    if (isRouteErrorResponse(error)) {

      if (error.status === 404) {
        res = ("Very sad, there is nothing here")
      }
  
      if (error.status === 401) {
        res = ("You aren't authorized to see this punk")
      }
  
      if (error.status === 503) {
        res = ("Looks like our API is down bruh")
      }
  
      if (error.status === 418) {
        res = ("The server refuses to brew coffee because it is, permanently, a teapot")
      }

      if (error.status === 500) {
        res = ("The server encountered an unexpected condition")
      }
    }
  
    res = ("Opps something went wrong and my maker did not handle this error code")



    return (
        <section className='text-slate-400 dark:text-neutral-50 uppercase w-full'>
            <span className='mb-20 text-xl'>{res}</span>
            <ActionBtn content="back" onClick={() => navigate("/")} />
        </section>
    )
}

export default RouteError