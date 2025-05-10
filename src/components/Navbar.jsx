import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center p-5 text-2xl  ">
            <div className="font-bold  text-xl">Online <br /><span className="relative text-4xl text-blue-400">LibrarySystem</span> </div>
            <ul className="flex gap-7">
                <li className=" hover:border-b-2 p-1 cursor-pointer "><Link to="/">Home</Link></li>
                <li className=" hover:border-b-2 p-1 cursor-pointer "><Link to="/browse_book">Browse_Books</Link> </li>
                <li className=" hover:border-b-2 p-1 cursor-pointer ">Add Book</li>
            </ul>   
        </nav>
    )
}