import React from "react";

const Product = ({ data, setEditModal, setProduct, setProductID }) => {
	const { productName, imageUrl, price, description, inStock, categoryId, productID } = data;

	return (
		<div
			key={productID}
			className="min-w-full border-b flex items-center text-xs pt-2 pb-2 md:grid md:grid-cols-8 md:text-sm text-gray-700">
			<p className="px-3 py-3">{productID}</p>
			<p className="px-3 py-3">{productName}</p>
			<img src={imageUrl} alt={productName} className="h-16" />
			<p className="px-3 py-3">{price}</p>
			<p className="px-3 py-3 truncate">{description}</p>
			{inStock ? (
				<div className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
					<button className="inline-block px-4 py-0.5 rounded-full bg-orange-50 text-green-600 font-medium text-sm leading-loose capitalize">
						In Stock
					</button>
				</div>
			) : (
				<div className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
					<button className="inline-block px-4 py-0.5 rounded-full bg-orange-50 text-red-600 font-medium text-sm leading-loose capitalize">
						Out of Stock
					</button>
				</div>
			)}
			<p className="px-3 py-3">{categoryId}</p>

			<div className="text-sm text-zinc-900 font-light px-3 py-1 whitespace-nowrap">
				<p
					onClick={() => {
						setEditModal(true);
						setProduct(productName);
						setProductID(productID);
					}}
					className="hover:cursor-pointer mr-3 inline-block px-4 py-1 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out">
					Edit
				</p>
			</div>
		</div>
	);
};

export default Product;
