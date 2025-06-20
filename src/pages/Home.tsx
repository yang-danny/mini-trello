import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import { fetchTask } from '../redux/TaskSlice'
import type { AppDispatch, RootState } from '../redux/store';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const state = useSelector((state: RootState) => state.task);

    useEffect(() => {
        dispatch(fetchTask());
    }, [dispatch]);

  return (
    <div className="container w-[1280px] h-fit flex flex-col justify-center bg-gray-500 m-4 p-4">
    <Header />
  <div className="grid gap-4 grid-cols-3">
  <div className="flex flex-col gap-4 p-4">
    <Link to="/catalog" className="text-white text-xl font-bold">View all boards</Link>
    <Link to="/board/new" className="text-white text-xl font-bold">Create a new board</Link>
    <Link to="/login" className="text-white text-xl font-bold">Login</Link>
    <Link to="/signup" className="text-white text-xl font-bold">Sign up</Link>
    <a href="https://www.trello.com/help/getting-started" className="text-white text-xl font-bold">Help</a>
    <a href="https://www.trello.com/pricing" className="text-white text-xl font-bold">Pricing</a>
    <a href="https://www.trello.com/blog" className="text-white text-xl font-bold">Blog</a>
  </div>
  <div className="flex flex-col gap-4">
    <Link to="/catalog" className="text-white text-xl font-bold">View all boards</Link>
    <Link to="/board/new" className="text-white text-xl font-bold">Create a new board</Link>
    <Link to="/login" className="text-white text-xl font-bold">Login</Link>
    <Link to="/signup" className="text-white text-xl font-bold">Sign up</Link>
    <a href="https://www.trello.com/help/getting-started" className="text-white text-xl font-bold">Help</a>
    <a href="https://www.trello.com/pricing" className="text-white text-xl font-bold">Pricing</a>
    <a href="https://www.trello.com/blog" className="text-white text-xl font-bold">Blog</a>
  </div>
  <div className="flex flex-col gap-4">
    <Link to="/catalog" className="text-white text-xl font-bold">View all boards</Link>
    <Link to="/board/new" className="text-white text-xl font-bold">Create a new board</Link>
    <Link to="/login" className="text-white text-xl font-bold">Login</Link>
    <Link to="/signup" className="text-white text-xl font-bold">Sign up</Link>
    <a href="https://www.trello.com/help/getting-started" className="text-white text-xl font-bold">Help</a>
    <a href="https://www.trello.com/pricing" className="text-white text-xl font-bold">Pricing</a>
    <a href="https://www.trello.com/blog" className="text-white text-xl font-bold">Blog</a>
  </div>
  </div>
  </div>

  )
}

export default Home