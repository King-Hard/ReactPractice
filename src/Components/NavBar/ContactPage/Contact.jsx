import { useOutletContext } from "react-router-dom"

const Contact = () => {
    const {user} = useOutletContext()
    return(
        <>
        
            <div className="bg-green-300 p-5">
                Contact Page
            </div>

            <div>
                Hello {user}
            </div>
        
        </>
    )
}

export default Contact