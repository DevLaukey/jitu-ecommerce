import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useSelector } from "react-redux";
import Slider from "../Slider";
import Pagination from "./Pagination";


const ProductGrid = () => {
	const [products, setProducts] = React.useState([]);

	const search = useSelector((state) => state.product.searchQuery);
	// search === false && search = "";
	const page = 1;
	const size = 3;
	const baseURL = "http://localhost:3005";

	useEffect(() => {
		setProducts([]);
		// let rows, total = 0;
		axios.get(`${baseURL}/products?page=${page}&size=${size}3&search=${search ? search : ""}`).then((response) => {
			setProducts(response.data.records);
			// total = response.data.filtered;
			// rows = response.data.records.length;
		});
	}, [search]);

	return (
		<>
			<Slider />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 p-2 bg-zinc-300">
				{products.length > 0 ? (
					<>
						{products ? (
							products.map((product, index) => <ProductCard product={product} key={index} />)
						) : (
							<div>Loading...</div>
						)}
					</>
				) : (
					<div className="text-center">
						<h1>No products found</h1>
					</div>
				)}
			</div>
		<Pagination />
		</>
	);
};

export default ProductGrid;
