import { Link } from "react-router-dom"
import logo from "../assets/Trello-logo.png"

export const Header:React.FC = () => {
  
  return (
    <div className="flex justify-between items-center gap-10">
    <h1 className="text-2xl text-white font-bold">Welcome to Mini Trello</h1>
    <p className="text-xl text-white">Create, manage, and collaborate on your Trello boards</p>
   <img src={logo} alt="Trello Logo" className="w-40 h-fit" />
</div>
  )
}