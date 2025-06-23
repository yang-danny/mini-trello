
import logo from "../assets/Trello-logo.png"

export const Header:React.FC = () => {
  
  return (
    <div className="flex justify-between items-center gap-10 border-b-4 border-indigo-500 ">
    {/* Full header for md and up */}
      <div className="hidden sm:flex items-center justify-between gap-12">
        <h1 className="text-2xl text-blue-950 font-bold">Welcome to Mini Trello</h1>
        <p className="text-xl text-blue-700">Create, manage, and collaborate on your Trello boards</p>
      </div>
      {/* Logo always visible, centered on small screens */}
      <div className="flex flex-1 justify-center sm:justify-end">
        <img src={logo} alt="Trello Logo" className="w-32 sm:w-40 h-fit" />
      </div>
</div>
  )
}