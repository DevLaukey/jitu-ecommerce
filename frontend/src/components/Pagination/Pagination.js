import React, { useState } from "react";
import { DOTS, usePaginationRange } from "./usePaginationRange";

const Pagination = ({ data, setEditModal, setUser, RenderComponent, buttonConst, contentPerPage, siblingCount }) => {
	const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
	const [currentPage, setCurrentPage] = useState(1);
	const paginationRange = usePaginationRange({
		totalPageCount,
		contentPerPage,
		buttonConst,
		siblingCount,
		currentPage,
	});
	function goToNextPage() {
		setCurrentPage((page) => page + 1);
	}
	function goToPreviousPage() {
		setCurrentPage((page) => page - 1);
	}
	function changePage(e) {
		const pageNumber = Number(e.target.textContent);
		setCurrentPage(pageNumber);
	}

	const getPaginatedData = () => {
		const startIndex = currentPage * contentPerPage - contentPerPage;
		const endIndex = startIndex + contentPerPage;
		return data.slice(startIndex, endIndex);
	};
	return (
		<div>
			<>
				{getPaginatedData().map((dataItem, index) => (
					<RenderComponent key={index} setEditModal={setEditModal} setUser={setUser} data={dataItem} />
				))}
			</>

			<div className="flex items-center justify-center gap-x-3 mt-4">
				{/* previous button */}
				<button
					onClick={goToPreviousPage}
					className={` bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 capitalize border rounded shadow ${
						currentPage === 1 ? "pointer-events-none bg-gray-100 hover:bg-white " : null
					}`}>
					previous
				</button>
				{/* show paginated button group */}
				{paginationRange.map((item, index) => {
					if (item === DOTS) {
						return (
							<button key={index} className={``}>
								&#8230;
							</button>
						);
					}
					return (
						<button
							key={index}
							onClick={changePage}
							className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border capitalize rounded shadow ${
								currentPage === item ? "pointer-events-none bg-gray-100 hover:bg-white" : null
							}`}>
							<span className="flex items-center justify-center">{item}</span>
						</button>
					);
				})}
				{/* next button */}
				<button
					onClick={goToNextPage}
					className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border capitalize rounded shadow ${
						currentPage === totalPageCount ? "pointer-events-none bg-gray-100 hover:bg-white" : null
					}`}>
					next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
