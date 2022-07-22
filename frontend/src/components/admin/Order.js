import React from "react";
import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <div className="m-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-2xl font-semibold text-black">Orders</h2>
        <div className="flex space-x-2 justify-center ">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 px-6 py-1.5 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Order
          </button>
          <button
            type="button"
            className="inline-block px-6 py-1.5 bg-zinc-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out"
          >
            Date Picker
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 max-w-full">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Last Order
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Order Num
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Amount $
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>

                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      Benson Kimathi
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      July 16, 2022
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      454647
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      676
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      <button className="inline-block px-4 py-0.5 rounded-full bg-green-50 text-green-600 font-medium text-sm leading-loose capitalize">
                        Complete
                      </button>
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      <Link
                        to="/view-order"
                        className="mr-3 inline-block px-4 py-1 bg-green-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        View
                      </Link>
                      <Link
                        to="/edit-order"
                        className="mr-3 inline-block px-4 py-1 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        Edit
                      </Link>
                      <Link
                        to="/delit-order"
                        className="inline-block px-4 py-1 bg-orange-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>

                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      Benson Kimathi
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      July 16, 2022
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      454647
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      676
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      <button className="inline-block px-4 py-0.5 rounded-full bg-orange-50 text-orange-600 font-medium text-sm leading-loose capitalize">
                        Pending
                      </button>
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      <Link
                        to="/view-order"
                        className="mr-3 inline-block px-4 py-1 bg-green-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        View
                      </Link>
                      <Link
                        to="/edit-order"
                        className="mr-3 inline-block px-4 py-1 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        Edit
                      </Link>
                      <Link
                        to="/delit-order"
                        className="inline-block px-4 py-1 bg-orange-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>

                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      Benson Kimathi
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      July 16, 2022
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      454647
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      676
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      <button className="inline-block px-4 py-0.5 rounded-full bg-rose-50 text-rose-600 font-medium text-sm leading-loose capitalize">
                        Cancelled
                      </button>
                    </td>
                    <td class="text-sm text-zinc-900 font-light px-6 whitespace-nowrap">
                      <Link
                        to="/view-order"
                        className="mr-3 inline-block px-4 py-1 bg-green-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        View
                      </Link>
                      <Link
                        to="/edit-order"
                        className="mr-3 inline-block px-4 py-1 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        Edit
                      </Link>
                      <Link
                        to="/delit-order"
                        className="inline-block px-4 py-1 bg-orange-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-md transition duration-150 ease-in-out"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm">
                  Showing <span className="font-semibold">1</span> to{" "}
                  <span className="font-semibold">10</span> of{" "}
                  <span className="font-semibold">100</span> entries
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
                    className="inline-block px-3 py-1.5 bg-zinc-50 text-zinc-900 font-medium text-xs uppercase rounded hover:bg-zinc-700 hover:text-zinc-50 focus:tetxt-zinc-50  focus:bg-zinc-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out"
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
  );
};

export default Orders;
