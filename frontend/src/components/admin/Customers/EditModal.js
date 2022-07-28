import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const baseURL = "http://localhost:3016";

const EditCategory = ({ visible, onClose, user }) => {
	const [userDetails, setUserDetails] = useState([]);
	const [fullName, setFullName] = useState();
	const email = user;
	const [telephone, setTelephone] = useState();

	useEffect(() => {
		axios.get(`${baseURL}/users?page=1&size=3&search=${user}`).then((response) => {
			setUserDetails(response.data.records[0]);
		});
	}, [user, fullName, telephone, visible, onClose]);

	const updateUser = () => {
		axios
			.post(`${baseURL}/update`, { fullName, email, telephone })
			.then((response) => {
				toast.success(response.data.message, {
					position: toast.POSITION.TOP_RIGHT,
				});
				onClose();
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	if (!visible) return null;
	const handleOnBackDropClick = (e) => {
		if (e.target.id === "backdrop") onClose && onClose();
	};

	return (
		<div
			id="backdrop"
			onClick={handleOnBackDropClick}
			className="bg-black bg-opacity-50 backdrop-blur-sm z-50 fixed inset-0 flex items-center justify-center">
			<div className="bg-white w-1/2 rounded-lg">
				<h1 className="font-semibold text-center text-xl bg-green-500 text-white py-2 rounded-t">
					Update User Details
				</h1>
				<div className="p-5 ">
					<span className="grid grid-cols-3">
						<label htmlFor="name" className="col-span-1 px-3 py-1.5">
							Email
						</label>
						<input
							type="email"
							disabled
							value={userDetails.email}
							className="col-span-2 px-3 py-1.5 mb-3 border rounded focus:outline-none bg-gray-50 "
						/>
					</span>

					<span className="grid grid-cols-3">
						<label htmlFor="name" className="col-span-1 px-3 py-1.5">
							Full Name
						</label>
						<input
							type="text"
							placeholder={userDetails.fullName}
							onChange={(e) => {
								e.preventDefault();
								e.target.value ? setFullName(e.target.value) : setFullName(userDetails.fullName);
							}}
							className="col-span-2 px-3 py-1.5 mb-3 border rounded focus:outline-none "
						/>
					</span>

					<span className="grid grid-cols-3">
						<label htmlFor="name" className="col-span-1 px-3 py-1.5">
							Telephone
						</label>
						<input
							type="tel"
							placeholder={userDetails.telephone}
							onChange={(e) => {
								e.preventDefault();
								e.target.value ? setTelephone(e.target.value) : setTelephone(userDetails.telephone);
							}}
							className="col-span-2 px-3 py-1.5 mb-3 border rounded focus:outline-none "
						/>
					</span>

					<div className="flex items-center justify-around my-3">
						<button
							className="bg-blue-500 text-white  hover:bg-blue-700 font-bold uppercase text-sm px-3 py-2 rounded hover:shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
							onClick={() => {
								updateUser();
							}}>
							Save Changes
						</button>
						<button
							className="bg-orange-500 text-white hover:bg-orange-700 font-bold uppercase text-sm px-3 py-2 rounded hover:shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
							onClick={() => {
								onClose();
							}}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditCategory;
