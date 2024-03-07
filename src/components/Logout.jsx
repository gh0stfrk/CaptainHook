import { useNavigate } from "react-router-dom"


function Logout (){
    
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('email')
        localStorage.removeItem('Jwt-Token')

        navigate('/login')
    }

    return(
        <button
        className="bg-red-800 text-white px-4 py-2 rounded-xl"
        onClick={handleLogout}
        >Logout</button>
    )
}

export default Logout;