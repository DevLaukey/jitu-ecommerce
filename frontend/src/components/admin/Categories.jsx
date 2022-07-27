/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductEdit from "./ProductEdit";
import AddCategory from "./AddCategory";

const baseURL = "http://localhost:3005";

const Categories = () => {
	const [categories, setCategories] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [viewModal, setViewModal] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [productID, setProductID] = useState();
	const [user, setUser] = useState("");
	useEffect(() => {
		setCategories(null);
		axios.get(`${baseURL}/categories`).then((response) => {
			setCategories(response.data.categories);
		});
	}, [searchInput, user, productID, viewModal, showModal]);
	return (
		<>
			<div className="m-4 relative  w-full">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg md:text-2xl font-semibold text-black">Categories</h2>
					<div className="flex space-x-2 justify-center ">
						<button
							type="button"
							onClick={() => setShowModal(true)}
							className="inline-flex items-center gap-x-2 px-6 py-1.5 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
							</svg>
							Add Categories
						</button>
					</div>
				</div>
				{showModal && <AddCategory setShowModal={setShowModal} />}
				{viewModal && <ProductEdit setViewModal={setViewModal} user={user} proddId={productID} />}
				<div className="flex flex-col">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8 max-w-full">
						<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
							<div className="overflow-x-auto">
								<div className="flex items-center justify-between mb-4">
									<div className="flex items-center space-x-2">
										<label for="entries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
											Show
										</label>
										<select
											id="entries"
											class="bg-zinc-50 w-16 text-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
											<option selected="" value="ten">
												10
											</option>
											<option value="fifteen">15</option>
											<option value="twenty">20</option>
											<option value="twent-five">25</option>
										</select>
										<p class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">entries</p>
									</div>
									<form className="w-1/3">
										<label
											for="default-search"
											class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
											Search
										</label>
										<div class="relative">
											<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
												<svg
													aria-hidden="true"
													class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
												class="block py-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:outline-none  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
												placeholder="Search name, email..."
											/>
										</div>
									</form>
								</div>
								<table className="min-w-full">
									<thead className="border-b">
										<tr>
											<th scope="col" className="text-sm font-medium  text-gray-900 px-3 py-2 text-left">
												#
											</th>
											<th
												scope="col"
												className="text-sm font-medium text-gray-900 px-3 py-2 text-left flex items-center">
												Category
											</th>

											<th scope="col" className="text-sm font-medium text-gray-900 px-3 py-2 text-center">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{categories
											? categories.map((category, index) => (
													<tr key={category.productId} className="border-b">
														<td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
															{index + 1}
														</td>

														<td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
															{category.categoryName}
														</td>

														<td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
															<p
																onClick={() => {
																	setViewModal(true);
																	setUser(category.categoryName);
																	setProductID(category.productID);
																}}
																className="hover:cursor-pointer mr-3 inline-block px-4 py-1 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out">
																Edit
															</p>
														</td>
													</tr>
											  ))
											: "Loading"}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Categories;
