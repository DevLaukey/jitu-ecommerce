import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
  const baseURL = "http://localhost:3016";
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `${baseURL}/users?page=1&size=3&orderBy=fullName&orderDir=ASC&search=''`
      )
      .then((response) => {
        dispatch(updateCount(response.data.records.length));
      });
  }, []);
  const customerCount = useSelector((state) => state.user.count);
  const productsCount = useSelector((state) => state.product.count);

  return (
    <div className="m-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-2xl font-semibold text-black">
          Dashboard
        </h2>
        <span className="flex space-x-2">
          <div className="flex space-x-2 justify-center ">
            <button
              type="button"
              className="inline-flex items-center gap-x-2 px-6 py-1.5 bg-blue-500 text-white font-medium text-xs leading-loose uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Email Report
            </button>
          </div>
        </span>
      </div>
      <div className="grid grid-cols-4 h-28 gap-x-5">
        <article className="flex flex-col rounded-lg p-3 shadow-sm shadow-blue-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 w-4 h-4 md:w-8 md:h-8  bg-indigo-100 rounded-full p-1 text-indigo-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="flex justify-between ">
            <span>
              <h2 className="text-base md:text-xl font-semibold text-zinc-800">
                $25,255.00
              </h2>
              <p className="text-xs md:text-sm text-zinc-400">Today sales</p>
            </span>
            <span className="self-end text-green-600 font-medium">
              <p>+35%</p>
            </span>
          </div>
        </article>
        <article className="flex flex-col rounded-lg p-3 shadow-sm shadow-blue-500 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="mb-2 w-4 h-4 md:w-8 md:h-8  bg-teal-100 rounded-full p-1 text-teal-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
            ></path>
          </svg>
          <div className="flex justify-between ">
            <span>
              <h2 className="text-base md:text-xl font-semibold text-zinc-800">
                13
              </h2>
              <p className="text-xs md:text-sm text-zinc-400">Today Orders</p>
            </span>
            <span className="self-end text-green-600 font-medium">
              <p>+35%</p>
            </span>
          </div>
        </article>
        <article className="flex flex-col rounded-lg p-3 shadow-sm shadow-blue-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 w-4 h-4 md:w-8 md:h-8  bg-purple-100 rounded-full p-1 text-purple-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>

          <div className="flex justify-between ">
            <span>
              <h2 className="text-base md:text-xl font-semibold text-zinc-800">
                {customerCount}
              </h2>
              <p className="text-xs md:text-sm text-zinc-400">
                Total Customers
              </p>
            </span>
            <span className="self-end text-green-600 font-medium">
              <p>+35%</p>
            </span>
          </div>
        </article>
        <article className="flex flex-col rounded-lg p-3 shadow-sm shadow-blue-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 w-4 h-4 md:w-8 md:h-8  bg-orange-100 rounded-full p-1 text-orange-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>
          <div className="flex justify-between ">
            <span>
              <h2 className="text-base md:text-xl font-semibold text-zinc-800">
                {productsCount}
              </h2>
              <p className="text-xs md:text-sm text-zinc-400">
                Number of products
              </p>
            </span>
            <span className="self-end text-green-600 font-medium">
              <p>+35%</p>
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DashBoard;
