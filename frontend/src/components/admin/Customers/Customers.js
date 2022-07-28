import React, { useEffect, useState } from "react";
import axios from "axios";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import Pagination from "../../Pagination/Pagination";
import Customer from "./Customer";
import EditCategory from "../Categories/EditCategory";

const baseURL = "http://localhost:3016";

const Customers = () => {
	const [customers, setCustomers] = useState(null);

	const [addModal, setAddModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [user, setUser] = useState("");

	const [searchInput, setSearchInput] = useState("");
	const [size, setSize] = useState(2);
	const handleSize = (e) => {
		setSize(e.target.value);
	};
	useEffect(() => {
		setCustomers(null);
		axios.get(`${baseURL}/users?search=${searchInput}`).then((response) => {
			setCustomers(response.data.records);
		});
	}, [searchInput, user, size, addModal, editModal]);
	return (
		<>
			<div className="m-4 relative  w-full">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg md:text-2xl font-semibold text-black">Customers</h2>
					<div className="flex space-x-2 justify-center ">
						<button
							type="button"
							onClick={() => setAddModal(true)}
							className="inline-flex items-center gap-x-2 px-6 py-1.5 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out">
							{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
							</svg>
							Add Customer
						</button>
					</div>
				</div>
				{addModal && <AddModal setAddModal={setAddModal} />}
				<EditModal visible={editModal} user={user} onClose={() => setEditModal(false)} />
				<div className="flex flex-col">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8 max-w-full">
						<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
							<div className="overflow-x-auto">
								<div className="flex items-center justify-between mb-4">
									<div className="flex items-center space-x-2">
										<label for="entries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
											Show
										</label>
										<select
											id="entries"
											onChange={handleSize}
											value={size}
											className="bg-zinc-50 w-16 text-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
											<option value={10}>10</option>
											<option value={15}>15</option>
											<option value={20}>20</option>
											<option value={20}>20</option>
										</select>
										<p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">entries</p>
									</div>
									<form className="w-1/3">
										<label
											for="default-search"
											className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
											Search
										</label>
										<div className="relative">
											<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
												<svg
													aria-hidden="true"
													className="w-5 h-5 text-gray-500 dark:text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
												</svg>
											</div>
											<input
												type="search"
												onChange={(e) => {
													e.preventDefault();
													setSearchInput(e.target.value);
												}}
												id="default-search"
												className="block py-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:outline-none  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
												placeholder="Search name, email..."
											/>
										</div>
									</form>
								</div>
								<div className="min-w-full border-b flex text-xs md:grid md:grid-cols-7 md:text-sm font-semibold text-gray-900">
									<h1 className="px-4 py-2">Id</h1>
									<h1 className="px-4 py-2">Name</h1>
									<h1 className="px-4 py-2 ">Telephone</h1>
									<h1 className="px-4 py-2">Email</h1>
									<h1 className="px-4 py-2">Orders</h1>
									<h1 className="px-4 py-2">Action</h1>
								</div>
								<div className="min-w-full">
									{customers?.length > 0 ? (
										<Pagination
											setEditModal={setEditModal}
											setUser={setUser}
											data={customers}
											RenderComponent={Customer}
											buttonConst={1}
											contentPerPage={size}
											siblingCount={2}
										/>
									) : (
										"Loading"
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Customers;
