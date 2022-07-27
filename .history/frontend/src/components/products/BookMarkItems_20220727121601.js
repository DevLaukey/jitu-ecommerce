import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { addItemQuantity, addToCart, removeFromFavorite } from "../../redux/slices/cartReducer";

import { ImBin2 } from "react-icons/im";

function BookMarkItems({ product }) {
	const dispatch = useDispatch();

	const { favorites, cart } = useSelector((state) => state.cart);
	const favItem = favorites?.find((item) => item.productID === product.productID);
	const cartItem = cart?.find((item) => item.productID === product.productID);

	const removeBookmark = () => {
		dispatch(removeFromFavorite(product.productID));
	};

	const addItems = () => {
		if (cartItem) {
			dispatch(addItemQuantity(product.productID));
		} else {
			dispatch(addToCart(product));
		}
	};

	return (
    <div className="">
      <div className="m-5 p-5 border border-gray-100 hover:bg-gray-100 hover:border-blue-200 rounded  flex items-center justify-between">
        <div className="flex gap-x-5">
          <img
            className="h-24"
            src={favItem?.imageUrl}
            alt={favItem?.productName}
          />
          <span className="flex flex-col justify-between">
            <p className="">{favItem?.productName}</p>
            <CurrencyFormat
              value={favItem?.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Ksh "}
            />
          </span>
        </div>
        <span className="flex flex-col h-24 justify-between">
          {cartItem?.productID ? (
            <button
							onClick={addItems}
							disabled
              className="py-1 cursor-not-allowed px-2 bg-gray-600 text-white text-sm capitalize rounded-md  "
            >
              Buy now
            </button>
          ) : (
            <button
              onClick={addItems}
              className="py-1 px-2 bg-blue-600 text-white text-sm capitalize rounded-md hover:bg-blue-800 "
            >
              Buy now
            </button>
          )}

          <button
            onClick={removeBookmark}
            className="flex gap-x-1.5 py-1 px-2 rounded-md  text-sm justify-center items-center text-white bg-orange-600 hover:bg-red-500 "
          >
            <ImBin2 />
            <p>Remove</p>
          </button>
        </span>
      </div>
    </div>
  );
}

export default BookMarkItems;
