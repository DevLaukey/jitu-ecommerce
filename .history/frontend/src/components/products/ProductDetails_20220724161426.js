import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { BsCartPlus, BsFillFileMinusFill, BsFillFilePlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addBookmark, decrement, increment, removeBookmark } from "../../redux/slices/cartReducer";

const ProductDetails = () => {
  const { productName } = useParams();
  const dispatch = useDispatch();
  const [bookmark, setBookmark] = React.useState(false);
  const [cartAdded, setCartAdded] = React.useState(false);

  const baseURL = "http://localhost:3005";
    const [count, setCount] = React.useState(0);

  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    // setProductDetails([]);
    // let rows, total = 0;
    axios
      .get(`${baseURL}/products?page=1&size=1&search=${productName}`)
      .then((response) => {
        setProductDetails(response.data.records[0]);
        // total = response.data.filtered;
        // rows = response.data.records.length;
      });
  }, [productName]);
    const removeItems = () => {
      if (count > 1) {
        setCount(count - 1);
      } else {
        setCartAdded(false);
      }
    };
    const addItems = () => {
      setCartAdded(true);

      setCount(count + 1);
      dispatch(increment());
    };
  console.log(productName);
  console.log(productDetails);
  return (
    <section class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {productDetails.productName}
          </h1>
          <p class="mb-8 leading-relaxed">{productDetails.description}</p>
          {productDetails.inStock ? (
            <p className="text-sm text-green-600 mt-1">In Stock</p>
          ) : (
            <p className="text-sm text-red-600 mt-1">Out of stock</p>
          )}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full mt-3">
            <div className="flex items-center self-start gap-x-2">
              <p className="text-xl font-semibold">
                <CurrencyFormat
                  value={productDetails.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Ksh"}
                />
              </p>
              <p className="bg-zinc-200 px-1.5 rounded-sm  text-zinc-600">
                -25%
              </p>
            </div>
          </div>
          <div class="flex justify-center mt-4">
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => {
                setBookmark(!bookmark);
                if (bookmark === true) {
                  dispatch(removeBookmark());
                } else {
                  dispatch(addBookmark());
                }
              }}
            >
              Add to Bookmarks
            </button>
            {cartAdded ? (
              <div className="w-full mt-3 items-center flex justify-between bg-blue-600 text-white rounded-md font-light py-0.5 px-3 text-2xl">
                <BsFillFileMinusFill
                  className="cursor-pointer hover:scale-x-150"
                  onClick={removeItems}
                />
                {count}
                <BsFillFilePlusFill
                  className="cursor-pointer hover:scale-x-150"
                  onClick={addItems}
                />
              </div>
            ) : (
              <button
                onClick={addItems}
             class="ml-4 inline-flex items-center text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
              >
                <span>
                  <BsCartPlus />
                </span>
                <p>Add to Cart</p>
              </button>
            )}
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={productDetails.imageUrl}
          />
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
