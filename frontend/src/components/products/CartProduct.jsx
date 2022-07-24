import React from "react";
import CurrencyFormat from "react-currency-format";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import {
	addItemQuantity,
	minusItemQuantity,
	removeFromCart,
} from "../../redux/slices/cartReducer";

function CartProduct({ product }) {
	const { cart } = useSelector(state => state.cart)
	const { categories } = useSelector((state) => state.product);
	const dispatch = useDispatch()

	const cartItem = cart?.find(item => item.productID === product.productID)


	const removeItems = () => {
		if (cartItem?.quantity > 1) {
			dispatch(minusItemQuantity(product.productID));
		} else {
			dispatch(removeFromCart(product.productID));
		}
	};

	const addItems = () => {
		dispatch(addItemQuantity(product.productID));
	};


	return (
		<div className="flex items-center  hover:bg-gray-100 -mx-8 px-6 py-5">
			<div className="md:flex w-2/5">
				<div className="w-full flex gap-x-2">
					<img className="h-24" src={cartItem?.imageUrl} alt="" />

					<div className="flex flex-col justify-between ml-4 flex-grow">
						<span className="font-bold text">{cartItem?.productName}</span>
						<span className="text-red-500 text-sm">{categories?.find(category => category.categoryId === cartItem?.categoryId)?.categoryName}</span>
						<p
							onClick={removeItems}
							className="font-semibold hover:text-red-500 text-gray-500 text-xs">
							Remove
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col -ml-10 md:ml-0 md:flex-row items-center -mt-10 text-xl md:space-x-4 justify-center  w-1/5">
				<AiOutlineMinus
					className="cursor-pointer font-bold"
					onClick={removeItems}
				/>
				<p className="text-lg my-3">{cartItem?.quantity}</p>
				<AiOutlinePlus
					className="cursor-pointer font-bold"
					onClick={addItems}
				/>
			</div>
			<span className="text-center text-xs w-1/5 -mt-10 ml-12 md:ml-0 font-semibold md:text-sm">
				<CurrencyFormat value={cartItem?.price} displayType={"text"} thousandSeparator={true} prefix={"Ksh"} />
			</span>
			<span className=" text-xs w-1/5 -mt-10 text-right md:text-center font-semibold md:text-sm">
				<CurrencyFormat value={cartItem?.price * cartItem?.quantity} displayType={"text"} thousandSeparator={true} prefix={"Ksh"} />
			</span>
		</div>
	)
}

export default CartProduct;
