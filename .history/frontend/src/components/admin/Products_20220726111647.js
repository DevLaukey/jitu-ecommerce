/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import AdminModal from "./AdminModal";
import EditModal from "./EditModal";
import { updateCount } from "../../redux/slices/productReducer";

const baseURL = "http://localhost:3005";
let rows,
  total = 0;
const Products = () => {

  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    setProducts(null);
    axios
      .get(`${baseURL}/products?page=1&size=3&search=${searchInput}`)
      .then((response) => {
        dispatch(updateCount(response.data.filtered));
        total = response.data.filtered;
        rows = response.data.records.length;
        setProducts(response.data.records);
      });
  }, [searchInput, user]);

  return (
    <>
      <div className="m-4 relative  w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-2xl font-semibold text-black">
            Products
          </h2>
          <div className="flex space-x-2 justify-center ">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-x-2 px-6 py-1.5 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Products
            </button>
          </div>
        </div>
        {showModal && <AdminModal setShowModal={setShowModal} />}
        {viewModal && <EditModal setViewModal={setViewModal} user={user} />}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 max-w-full">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <label
                      for="entries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Show
                    </label>
                    <select
                      id="entries"
                      class="bg-zinc-50 w-16 text-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="" value="ten">
                        10
                      </option>
                      <option value="fifteen">15</option>
                      <option value="twenty">20</option>
                      <option value="twent-five">25</option>
                    </select>
                    <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      entries
                    </p>
                  </div>
                  <form className="w-1/3">
                    <label
                      for="default-search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                    >
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
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
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
                      <th
                        scope="col"
                        className="text-sm font-medium  text-gray-900 px-3 py-2 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-2 text-left flex items-center"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-2 text-left "
                      >
                        Telephone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-2 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-2 text-left flex items-center"
                      >
                        # Orders
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 w-3 h-3"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 320 512"
                        >
                          <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                        </svg>
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-2 text-left"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-2 text-center"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products
                      ? products.map((product, index) => (
                          <tr key={product.productId} className="border-b">
                            <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>

                            <td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
                              {product.productName}
                            </td>
                            <td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
                              <img
                                className=" h-24"
                                src={product.imageUrl}
                                alt={product.productName}
                              />
                            </td>
                            <td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
                              <CurrencyFormat
                                value={
                                  product.price
                                }
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"Ksh"}
                              />
                            </td>
                            <td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap text-center">
                              2
                            </td>

                            <td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
                              <button className="inline-block px-4 py-0.5 rounded-full bg-orange-50 text-orange-600 font-medium text-sm leading-loose capitalize">
                                Active
                              </button>
                            </td>
                            <td className="text-sm text-zinc-900 font-light px-3 whitespace-nowrap">
                              {/* <button onClick={() => setViewModal(true)}>View</button> */}
                              {/* {viewModal ? ViewCustomer() : null} */}
                              <p
                                onClick={() => {
                                  setViewModal(true);
                                  // setUser(customer.email);
                                }}
                                className="hover:cursor-pointer mr-3 inline-block px-4 py-1 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
                              >
                                Edit
                              </p>
                            </td>
                          </tr>
                        ))
                      : "Loading"}
                  </tbody>
                </table>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm">
                    Showing <span className="font-semibold">1</span> to{" "}
                    <span className="font-semibold">{rows}</span> of{" "}
                    <span className="font-semibold">{total}</span> entries
                  </p>
                  <div className="flex space-x-1 justify-center ">
                    <button
                      type="button"
                      className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs uppercase rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs uppercase rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out"
                    >
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

export default Products;
