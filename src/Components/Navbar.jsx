import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="flex justify-between py-3 px-3 bg-gradient-to-r from white-via-white to-indigo-100/70 z-0  ">
        <h1 className=" font-semibold">MVPIER</h1>
        <nav className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
        <button className="bg-blue-200 rounded-lg py-1 px-2 ">Contact Us</button>
        </div>
    )
}
export default Navbar;