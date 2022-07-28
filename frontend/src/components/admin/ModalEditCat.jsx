import React, { useState } from "react";
import EditCategory from "./Categories/EditCategory";

const ModalEditCat = () => {
	const [editModal, setEditModal] = useState(false);
	return (
		<>
			<div className="w-screen h-screen flex items-center justify-center">
				<button className="py-2 px-5 bg-blue-500 text-white" onClick={() => setEditModal(true)}>
					Open Modal
				</button>
			</div>
			<EditCategory visible={editModal} onClose={() => setEditModal(false)} />
		</>
	);
};

export default ModalEditCat;
