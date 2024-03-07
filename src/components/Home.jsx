import { Link } from "react-router-dom";
import Explore from "./Explore";

function Home(){
    const loggedIn = localStorage.getItem("isLoggedIn")
    return (
        <div className="flex justify-center flex-col items-center mt-4">
            <marquee className="text-2xl bg-black text-white p-1 font-mono" direction="right">🏴‍☠️ 🏴‍☠️ Ahoy! Captian Hook is here 🏴‍☠️ 🏴‍☠️ </marquee>
            <div className="flex gap-3 flex-row items-center p-4 flex-wrap font-mono mt-4">
                <div className="flex gap-4 flex-col">
                    <h1 className="text-3xl font-bold">New around here ?</h1>
                    <p className="text-xl">Sign up and start exploring</p>
                    <p className="block max-w-80">Ahoy there, matey! Tired of wrestling with complex bots and commands just to send a message to your Discord server? Captain Hook throws you a lifeline!  <br/>This user-friendly web app lets you conquer your server communication with just a webhook link.  Set sail for smooth sailing - sign up today and start sending messages with ease!  Arrr, what are you waiting for?</p>
                    {loggedIn ? <Explore/>:<Link to="signup" className="bg-black text-white p-3 rounded-xl w-fit">Sign Up</Link>}
                </div>
                <img
                className="max-w-72"
                 src="https://i.pinimg.com/originals/b1/52/bb/b152bb0433d5f73af1cb4c8e99ae77a5.jpg" alt="captain_hook" />
            </div>

        </div>
    )
}

export default Home;