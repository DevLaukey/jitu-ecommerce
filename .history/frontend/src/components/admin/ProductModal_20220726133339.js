import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductModal = ({ setShowModal }) => {
  const [inputs, setInputs] = useState({});
  const baseURL = "http://localhost:3016";

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let datainputs = JSON.stringify({
      name: inputs.name,
      imageUrl: inputs.imageUrl,
      price: inputs.price,
      description: inputs.description,
      categoryId: inputs.category,
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

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <form
            // action="/customers"
            onSubmit={handleSubmit}
            className="px-10 pt-3 pb-8 bg-zinc-50 rounded-lg drop-shadow-lg w-[500px] h-max"
          >
            <h1 className="text-xl text-zinc-800 py-1 mb-8 rounded font-light text-center  border-b">
              Add Product
            </h1>

            <div className="flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={inputs.name || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="imageUrl"> Product Image URL</label>
              <input
                type="imageUrl"
                name="imageUrl"
                id="imageUrl"
                required
                value={inputs.imageUrl || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-3 ">
              <label htmlFor="price">Product Price</label>
              <input
                type="number"
                name="price"
                id="price"
                required
                value={inputs.price || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-3 ">
              <label htmlFor="price">Product Description</label>
              <input
                type="text"
                name="description"
                id="description"
                required
                value={inputs.description || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-3 ">
              <label htmlFor="price">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                required
                value={inputs.category || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
            </div>
            <div className="flex justify-between w-full">
              <button
                onClick={() => setShowModal(false)}
                className="flex justify-center gap-x-1.5 items-center px-6 py-2 my-3 text-center text-white rounded bg-blue-600 hover:bg-rose-600 focus:bg-rose-600 font-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
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
                className="px-6 py-2 my-3 text-center text-white rounded bg-blue-600 hover:bg-green-600 focus:bg-green-600 font-light"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
