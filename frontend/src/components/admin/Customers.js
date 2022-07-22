/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const baseURL = "http://localhost:3016";
let rows,
	total = 0;
const Customers = () => {
	const [customers, setCustomers] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [viewModal, setViewModal] = useState(false);
	const [inputs, setInputs] = useState({});

	useEffect(() => {
		setCustomers(null);
		axios.get(`${baseURL}/users?page=1&size=3&orderBy=fullName&orderDir=ASC`).then((response) => {
			console.log(response.data);
			total = response.data.filtered;
			rows = response.data.records.length;
			setCustomers(response.data.records);
		});
	}, []);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		let datainputs = JSON.stringify({
			fullName: inputs.fullname,
			email: inputs.email,
			telephone: inputs.telephone,
			password: inputs.password,
		});

		try {
			await axios.post(`${baseURL}/signup`, datainputs, {
				headers: { "Content-Type": "application/json" },
			});
			toast.success("Customer added successfully !", {
				position: toast.POSITION.TOP_RIGHT,
			});
			setShowModal(false);
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message, {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	};

	function ViewCustomer() {
		return (
			<>
				{/*footer*/}
				<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
					<button
						className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button"
						onClick={() => setViewModal(false)}>
						Close
					</button>
					<button
						className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button"
						onClick={() => setViewModal(false)}>
						Save Changes
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="m-4 relative  w-full">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg md:text-2xl font-semibold text-black">Customers</h2>
					<div className="flex space-x-2 justify-center ">
						<button
							type="button"
							onClick={() => setShowModal(true)}
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

						<button
							type="button"
							className="inline-block px-6 py-1.5 bg-zinc-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out">
							Date Picker
						</button>
					</div>
				</div>
				{showModal ? (
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<form
									action="/customers"
									onSubmit={handleSubmit}
									className="px-10 pt-3 pb-8 bg-zinc-50 rounded-lg drop-shadow-lg w-[500px] h-max">
									<h1 className="text-xl text-zinc-800 py-1 mb-8 rounded font-light text-center  border-b">
										Add Customer
									</h1>

									<div className="flex flex-col mb-3">
										<label htmlFor="name">Name</label>
										<input
											type="text"
											name="fullname"
											id="fullname"
											required
											value={inputs.fullname || ""}
											onChange={handleChange}
											className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
										/>
										<p className="-mt-6 ml-20 invisible peer-invalid:visible text-red-700 font-light">
											Please enter customer name
										</p>
									</div>
									<div className="flex flex-col mb-3">
										<label htmlFor="email">Email</label>
										<input
											type="email"
											name="email"
											id="email"
											required
											value={inputs.email || ""}
											onChange={handleChange}
											className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
										/>
										<p className="-mt-6 ml-20 invisible peer-invalid:visible text-red-700 font-light">
											Please enter a valid email address
										</p>
									</div>
									<div className="flex flex-col mb-3 ">
										<label htmlFor="telephone">Telephone</label>
										<input
											type="tel"
											name="telephone"
											id="telephone"
											required
											value={inputs.telephone || ""}
											onChange={handleChange}
											className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
										/>
										<p className="-mt-6 ml-20 invisible peer-invalid:visible text-red-700 font-light">
											Please enter a valid telephone number
										</p>
									</div>
									<div className="flex flex-col mb-3 ">
										<label htmlFor="telephone">Password</label>
										<input
											type="text"
											name="password"
											id="password"
											required
											value={inputs.password || ""}
											onChange={handleChange}
											className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
										/>
										<p className="-mt-6 ml-20 invisible peer-invalid:visible text-red-700 font-light">
											Please enter a valid password
										</p>
									</div>
									<div className="flex justify-between w-full">
										<button
											onClick={() => setShowModal(false)}
											className="flex justify-center gap-x-1.5 items-center px-6 py-2 my-3 text-center text-white rounded bg-blue-600 hover:bg-rose-600 focus:bg-rose-600 font-light">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor">
												<path
													fillRule="evenodd"
													d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
													clipRule="evenodd"
												/>
											</svg>
											Close
										</button>
										<button
											type="submit"
											className="px-6 py-2 my-3 text-center text-white rounded bg-blue-600 hover:bg-green-600 focus:bg-green-600 font-light">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				) : null}
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
												Name
											</th>
											<th scope="col" className="text-sm font-medium text-gray-900 px-3 py-2 text-left ">
												Telephone
											</th>
											<th scope="col" className="text-sm font-medium text-gray-900 px-3 py-2 text-left">
												Email
											</th>
											<th
												scope="col"
												className="text-sm font-medium text-gray-900 px-3 py-2 text-left flex items-center">
												# Orders
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="ml-1 w-3 h-3"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 320 512">
													<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
												</svg>
											</th>

											<th scope="col" className="text-sm font-medium text-gray-900 px-3 py-2 text-left">
												Status
											</th>
											<th scope="col" className="text-sm font-medium text-gray-900 px-3 py-2 text-center">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{customers
											? customers.map((customer, index) => (
													<tr key={customer.userId} className="border-b">
														<td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
															{index + 1}
														</td>

														<td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
															{customer.fullName}
														</td>
														<td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
															{customer.telephone}
														</td>
														<td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
															{customer.email}
														</td>
														<td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap text-center">2</td>

														<td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
															<button className="inline-block px-4 py-0.5 rounded-full bg-orange-50 text-orange-600 font-medium text-sm leading-loose capitalize">
																Active
															</button>
														</td>
														<td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
															<button onClick={() => setViewModal(true)}>View</button>
															{viewModal ? ViewCustomer() : null}
															<Link
																to="/edit-order"
																className="mr-3 inline-block px-4 py-1 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out">
																Edit
															</Link>
															<Link
																to="/delit-order"
																className="inline-block px-4 py-1 bg-orange-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-md transition duration-150 ease-in-out">
																Delete
															</Link>
														</td>
													</tr>
											  ))
											: "Loading"}
									</tbody>
								</table>
								<div className="flex items-center justify-between mt-4">
									<p className="text-sm">
										Showing <span className="font-semibold">1</span> to <span className="font-semibold">{rows}</span> of{" "}
										<span className="font-semibold">{total}</span> entries
									</p>
									<div className="flex space-x-1 justify-center ">
										<button
											type="button"
											className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs uppercase rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out">
											Previous
										</button>
										<button
											type="button"
											className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out">
											1
										</button>
										<button
											type="button"
											className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs uppercase rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out">
											Next
										</button>
									</div>
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
