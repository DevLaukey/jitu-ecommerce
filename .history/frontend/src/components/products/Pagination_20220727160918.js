import React from "react";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../../redux/slices/productReducer";

const Pagination = ({
  size,
  maxPage,
  page,
  previousPageNumber,
  nextPageNumber,
}) => {
    const dispatch = useDispatch();
  const loop = [];

  for (let i = 1; i <= maxPage; i++) {
    loop.push(i);
  }

  return (
    <div className="flex p-5 space-x-1 justify-center ">
      <button
        type="button"
        onClick={previousPageNumber}
        className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs uppercase rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
      >
        Previous
      </button>
      <div className="flex flex-wrap gap-2">
        {loop.map((number) => (
          <button
            type="button"
            onClick={() => dispatch(setPageNumber(number))}
            className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
          >
            {number}
          </button>
        ))}
      </div>
      {maxPage === page ? (
        <button
          type="button"
          disabled
          className="cursor-not-allowed inline-block px-3 py-1.5 bg-zinc-100 text-white font-medium text-xs uppercase rounded hover:bg-zinc-100 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-600 active:shadow-md transition duration-150 ease-in-out"
        >
          Next
        </button>
      ) : (
        <button
          type="button"
          onClick={nextPageNumber}
          className="inline-block px-3 py-1.5 bg-zinc-500 text-white font-medium text-xs uppercase rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-md transition duration-150 ease-in-out"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
