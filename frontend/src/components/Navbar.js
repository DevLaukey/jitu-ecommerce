import React, { useEffect, useState } from "react";
import { BsHeart, BsCart2, BsPersonCircle, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../redux/slices/productReducer";
import ImageModal from "./user/ImageModal";
import { logoutUser } from "../redux/slices/userReducer";
import axios from "axios";

function Navbar() {
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [searchInput, setSearchInput] = useState(false);
	const [userName, setUserName] = useState("");
	const { cart, favorites } = useSelector((state) => state.cart);
	const { profileUpdated, email } = useSelector((state) => state.user);
	const { loggedIn } = useSelector((state) => state.user);
	const search = () => {
		dispatch(searchQuery(searchInput));
	};
	useEffect(() => {
		axios
			.post(" http://localhost:3016/admin", { email })
			.then((response) => setUserName(response.data.data[0].fullName));
	});
	useEffect(() => {
		search();
	}, [searchInput]);

	let { isAdmin } = useSelector((state) => state.user);
	return (
		<header className="text-white flex sticky z-50 top-0 left-0 right-0 space-x-4 items-center justify-between align-middle w-full  p-4 bg-blue-400">
			<div className="text-center ">
				<Link to="/">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<svg
							className="fill-current h-8 w-8 mr-2"
							width="54"
							height="54"
							viewBox="0 0 54 54"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
						</svg>
						<span className="font-semibold text-xs tracking-tight md:text-xl">Tangerine Furniture</span>
					</div>{" "}
				</Link>
			</div>
			{!isAdmin && (
				<div className="input-group flex items-items justify-center">
					<input
						type="search"
						className="form-control  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal rounded-lg transition ease-in-out m-0 bg-zinc-100 text-zinc-600 focus:outline-none"
						placeholder="Search"
						aria-label="Search"
						onChange={(e) => setSearchInput(e.target.value)}
						aria-describedby="button-addon2"
					/>
					<span
						className="input-group-text flex items-center px-2 py-1.5 text-base font-normal text-gray-200 text-center whitespace-nowrap rounded"
						id="basic-addon2">
						<BsSearch onClick={search} />
					</span>
				</div>
			)}

			<p className="hidden md:flex">{userName}</p>

			<div className="flex items-center justify-between gap-x-4">
				{!isAdmin && (
					<div className="text-gray-200 flex text-center whitespace-nowrap rounded">
						<Link to="/bookmark">
							<BsHeart className="text-2xl" />
						</Link>
						{favorites.length > 0 && (
							<div className="text-white bg-zinc-800 w-5 h-5 p-1 flex items-center justify-center relative -left-0.5 -top-3 text-xs rounded-full">
								{favorites.reduce((acc, item) => acc + 1, 0)}
							</div>
						)}
					</div>
				)}
				{!isAdmin && (
					<div className="text-gray-200 flex  text-center whitespace-nowrap rounded">
						<Link to="/cart">
							<BsCart2 className="text-2xl " />
						</Link>
						{cart.length > 0 && (
							<div className="text-white bg-zinc-800 w-auto h-5 p-1 flex items-center justify-center relative -left-2 -top-3 text-xs rounded-full">
								{cart.map((item) => (item.quantity > 0 ? 1 : 0)).reduce((acc, item) => acc + item, 0)}
							</div>
						)}
					</div>
				)}

				<div onClick={() => setToggle(!toggle)} className="dropdown flex relative">
					<div className="dropdown flex relative">
						{profileUpdated ? <img src={profileUpdated} alt="profile" /> : <BsPersonCircle className="text-xl" />}
						<svg
							className="fill-current h-4 w-4 focus:block"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							onClick={() => setToggle(!toggle)}>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
						</svg>
					</div>
					<ul className={toggle ? "  text-gray-700 right-0 mr-3 mt-12 fixed " : "hidden"}>
						{loggedIn ? (
							<Link
								to="/"
								onClick={() => {
									dispatch(logoutUser());
								}}
								className="rounded-t  text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
								Log out
							</Link>
						) : (
							<li className="">
								<Link
									to="/Login"
									className="rounded-t  text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
									Log in
								</Link>
							</li>
						)}

						{!loggedIn && (
							<li className="">
								<Link
									to="/signup"
									className=" text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
									Register
								</Link>
							</li>
						)}
						{loggedIn && (
							<li className="">
								<p
									className="rounded-b  text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
									onClick={() => {
										setShowModal(!showModal);
									}}>
									Update Profile
								</p>
							</li>
						)}
					</ul>
				</div>
			</div>
			{showModal && <ImageModal showModal={showModal} setShowModal={setShowModal} />}
		</header>
	);
}

export default Navbar;
