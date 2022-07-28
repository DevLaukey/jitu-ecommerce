import React from "react";

const Customer = ({ data, setEditModal, setUser }) => {
	const { userId, fullName, telephone, email } = data;

	return (
		<div key={userId} className="min-w-full border-b flex text-xs md:grid md:grid-cols-7 md:text-sm text-gray-700">
			<p className="px-3 py-3">{userId}</p>
			<p className="px-3 py-3">{fullName}</p>
			<p className="px-3 py-3">{telephone}</p>
			<p className="px-3 py-3">{email}</p>
			<p className="px-3 py-3 text-center">2</p>

			<div className="text-sm text-zinc-900 font-light px-3 py-1 whitespace-nowrap">
				<p
					onClick={() => {
						setEditModal(true);
						setUser(email);
					}}
					className="hover:cursor-pointer mr-3 inline-block px-4 py-1 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out">
					Edit
				</p>
			</div>
		</div>
	);
};

export default Customer;
