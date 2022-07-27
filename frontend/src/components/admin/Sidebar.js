import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsCashCoin, BsFillPersonFill } from "react-icons/bs";
import { BiChair } from "react-icons/bi";
import { useSelector } from "react-redux";
import axios from "axios";

const Sidebar = () => {
	const baseURL = "http://localhost:3016";

	const [name, setName] = useState();
	const { email } = useSelector((state) => state.user);
	useEffect(() => {
		setName(null);
		axios.get(`${baseURL}/users?page=1&size=3&orderBy=fullName&orderDir=ASC&search=${email}`).then((response) => {
			setName(response.data.records[0].fullName);
		});
	}, [email]);
	return (
		<>
			<div className="w-60 h-screen mr-5shadow-md bg-white" id="sidenavSecExample">
				<div className="pt-4 pb-2 px-6">
					<Link to="/">
						<div className="flex items-center">
							<div className="shrink-0">
								<BsFillPersonFill className="rounded-full w-15" />
							</div>
							<div className="grow ml-3">
								<h1 className="text-sm font-semibold text-blue-600">{name}</h1>
							</div>
						</div>
					</Link>
				</div>
				<ul className="relative px-1 ">
					<li className="relative ">
						<Link
							to=""
							className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 transition duration-300 ease-in-out"
							href="/"
							data-mdb-ripple="true"
							data-mdb-ripple-color="primary">
							<MdOutlineSpaceDashboard className="mr-3" />
							<span>Dashboard</span>
						</Link>
					</li>

					<hr className="my-2" />

					<li className="relative">
						<Link
							to="/admin/customers"
							className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 transition duration-300 ease-in-out"
							href="/"
							data-mdb-ripple="true"
							data-mdb-ripple-color="primary">
							<BsFillPersonFill className="mr-3" />
							<span>Customers</span>
						</Link>
					</li>
					<li className="relative">
						<Link
							to="/admin/products"
							className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 transition duration-300 ease-in-out"
							href="/"
							data-mdb-ripple="true"
							data-mdb-ripple-color="primary">
							<BiChair className="mr-3" />
							<span>Products</span>
						</Link>
					</li>
					<li className="relative">
						<Link
							to="/admin/categories"
							className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 transition duration-300 ease-in-out"
							href="/"
							data-mdb-ripple="true"
							data-mdb-ripple-color="primary">
							<BiChair className="mr-3" />
							<span>Categories</span>
						</Link>
					</li>
					<li className="relative">
						<Link
							to="/admin/orders"
							className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 transition duration-300 ease-in-out"
							href="/"
							data-mdb-ripple="true"
							data-mdb-ripple-color="primary">
							<BsCashCoin className="mr-3" />
							<span>Orders</span>
						</Link>
					</li>

					<hr className="my-2" />
					<li className="relative">
						<Link
							to="/admin/settings"
							className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 transition duration-300 ease-in-out"
							href="/"
							data-mdb-ripple="true"
							data-mdb-ripple-color="primary">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								className="w-3 h-3 mr-3"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 496 512">
								<path
									fill="currentColor"
									d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
							</svg>
							<span>Settings</span>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
