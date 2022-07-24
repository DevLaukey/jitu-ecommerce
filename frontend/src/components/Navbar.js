import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsHeart, BsCart2, BsPersonCircle, BsSearch } from "react-icons/bs";
import { searchQuery } from "../redux/slices/productReducer";

function Navbar() {
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(false);
	const { categories } = useSelector((state) => state.product);
	const [searchInput, setSearchInput] = useState(false);

	const { cart, favorites } = useSelector((state) => state.cart);
	const search = () => {
		dispatch(searchQuery(searchInput));
	};

	useEffect(() => {
		search();
	}, [searchInput]);

	const isAdmin = false;

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
						<span className="font-semibold text-xl tracking-tight">Tangerine Furniture</span>
					</div>{" "}
				</Link>
			</div>
			{/* <div className="flex items-center justify-center"> */}
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
				{/* </div> */}
			</div>
			<div className="flex justify-center">
				<div className=" xl:w-96">
					{isAdmin ? (
						<ul className="hidden text-gray-200 py-1.5 md:flex space-x-3 text-center">
							<Link to="/add-product">Add Product</Link>
							<Link to="/add-category">Add Category</Link>
						</ul>
					) : (
						<select
							aria-label="select categories"
							className="form-select appearance-none block px-3 py-1.5 text-base font-light text-zinc-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-zinc-300 rounded transition ease-in-out m-0 focus:text-zinc-700 focus:bg-white focus:border-blue-600 focus:outline-none">
							<option selected>Categories</option>
							{categories
								? categories.map((cat, index) => (
										<option key={index} value={cat.categoryId}>
											{cat.categoryName}
										</option>
								  ))
								: ""}
						</select>
					)}
				</div>
			</div>

			<div className="flex items-center justify-between gap-x-4">
				<div className="text-gray-200 flex text-center whitespace-nowrap rounded">
					<Link to="/bookmark">
						<BsHeart className="text-xl" />
					</Link>
					<div className="text-white bg-zinc-800 w-5 h-5 p-1 flex items-center justify-center relative -left-0.5 -top-3 text-xs rounded-full">
						{favorites.reduce((acc, item) => acc + 1, 0)}
					</div>
				</div>

				<div className="text-gray-200 flex  text-center whitespace-nowrap rounded">
					<Link to="/cart">
						<BsCart2 className="text-2xl " />
					</Link>
					<div className="text-white bg-zinc-800 w-auto h-5 p-1 flex items-center justify-center relative -left-2 -top-3 text-xs rounded-full">
						{cart.map((item) => (item.quantity > 0 ? 1 : 0)).reduce((acc, item) => acc + item, 0)}
					</div>
				</div>

				<div onClick={() => setToggle(!toggle)} className="dropdown flex relative">
					<div className="dropdown flex relative">
						<BsPersonCircle className="text-xl" />
						<svg
							className="fill-current h-4 w-4 focus:block"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							onClick={() => setToggle(!toggle)}>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
						</svg>
					</div>
					<ul className={toggle ? "  text-gray-700 right-0 mr-3 mt-12 fixed " : "hidden"}>
						<li classNames="">
							<Link
								to="/Login"
								className="rounded-t  text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
								Log in
							</Link>
						</li>
						<li className="">
							<Link
								to="/signup"
								className=" text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
								Register
							</Link>
						</li>
						<li className="">
							<p className="rounded-b  text-white bg-blue-400 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
								Upload a profile Photo
							</p>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
