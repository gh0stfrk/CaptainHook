import {Link} from 'react-router-dom'
import Logout from './Logout';
import burgerNavIcon from '../assets/burger.svg'
function NavBar() {
    const loggedIn = localStorage.getItem('isLoggedIn')

    return (
        <nav className="flex justify-around p-3 items-center">
            <div className="text-2xl font-mono" >
                <h1><Link to='/'>Captain Hook 🏴‍☠️</Link></h1>
            </div>
            <button className="sm:hidden w-10"><img src={burgerNavIcon} alt=""/></button>

            <div className="hidden sm:block">
                <ul className="flex flex-col gap-5 sm:flex-row items-center font-mono">
                    <li>{loggedIn ?  <Logout/>: <Link to="login">Login</Link>}</li>
                    <li><Link to="task" className="bg-blue-900 px-4 py-2 rounded-xl text-white">CreateTask</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;