import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductEdit = ({ setViewModal, user, proddId }) => {
	const [productDetails, setproductDetails] = useState([]);
	const [name, setName] = useState();
	const [imageUrl, setImageUrl] = useState();
	const [price, setPrice] = useState();
	const [category, setCategory] = useState();
	const [description, setDescription] = useState();
	const baseURL = "http://localhost:3005";

	useEffect(() => {
		axios.get(`${baseURL}/products?page=1&size=3&search=${user}`).then((response) => {
			setproductDetails(response.data.records[0]);
		});
		axios.get(`${baseURL}/categories`).then((response) => setCategory(response.data.categories));
	}, [user]);

	const updateProduct = () => {
		let productName = name,
			categoryId = category;

		axios
			.post(`${baseURL}/edit-product`, { proddId, productName, imageUrl, price, description, categoryId })
			.then((response) => {
				toast.success(response.data.message, {
					position: toast.POSITION.TOP_RIGHT,
				});
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	return (
		<div>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-3 pt-2">
				<div className="relative w-auto my-6 mx-auto  max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none p-4">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t mb-2">
							<h3 className="text-3xl text-black font-semibold">Update Products</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setViewModal(false)}>
								<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						{/*body*/}
						<form class="w-full max-w-lg">
							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fullname">
										Product Name
									</label>
									<input
										class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										type="text"
										id="grid-fullname"
										placeholder={productDetails.productName}
										onChange={(e) => {
											e.preventDefault();
											setName(e.target.value);
										}}
										required
									/>
								</div>
								<div class="w-full md:w-1/2 px-3">
									<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
										Image Url
									</label>
									<input
										class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-email"
										type="text"
										onChange={(e) => {
											e.preventDefault();
											setImageUrl(e.target.value);
										}}
										placeholder={productDetails.imageUrl}
									/>
								</div>
							</div>

							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-full px-3">
									<label
										class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
										for="grid-telephone">
										Description
									</label>
									<input
										class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-telephone"
										type="text"
										onChange={(e) => {
											e.preventDefault();
											setDescription(e.target.value);
										}}
										placeholder={productDetails.description}
									/>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-1/2 px-3">
									<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-category">
										Category
									</label>
									<input
										class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-category"
										type="number"
										onChange={(e) => {
											e.preventDefault();
											setCategory(e.target.value);
										}}
										placeholder={productDetails.categoryId}
									/>
								</div>
								<div class="w-1/2 px-3">
									<label
										class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
										for="grid-telephone">
										Price
									</label>
									<input
										class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-telephone"
										type="number"
										onChange={(e) => {
											e.preventDefault();
											setPrice(e.target.value);
										}}
										placeholder={productDetails.price}
									/>
								</div>
							</div>
						</form>
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
								onClick={() => {
									setViewModal(false);
									updateProduct();
								}}>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</div>
	);
};

export default ProductEdit;
