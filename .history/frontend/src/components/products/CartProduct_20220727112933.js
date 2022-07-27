import axios from "axios";
import React, { useEffect, useMemo } from "react";
import CurrencyFormat from "react-currency-format";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItemQuantity, clearCart, minusItemQuantity, removeFromCart } from "../../redux/slices/cartReducer";

function CartProduct({ product, send }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cart } = useSelector((state) => state.cart);
	const { categories } = useSelector((state) => state.product);

	const cartItem = cart?.find((item) => item.productID === product.productID);

	const OrderDetail = [
		{
			ProductID: cartItem.productID,
			Quantity: cartItem.quantity,
			UnitPrice: cartItem?.price * cartItem?.quantity,
		},
	];
	const userId = 7;
	console.log(OrderDetail);
	useEffect(() => {
		send &&
			axios
				.post(`http://localhost:5016/add-order?userId=${userId}`, { OrderDetail: OrderDetail })
				.then((response) => {
					toast.success(response.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
					navigate("/");
					dispatch(clearCart());
				})
				.catch((err, response) => {
					console.log(err);
				});
	}, [send, dispatch, useMemo(OrderDetail),navigate]);

	const removeItems = () => {
		if (cartItem?.quantity > 1) {
			dispatch(minusItemQuantity(product.productID));
		} else {
			dispatch(removeFromCart(product.productID));
		}
	};

	const removeItem = () => {
		dispatch(removeFromCart(product.productID));
	};

	const addItems = () => {
		dispatch(addItemQuantity(product.productID));
	};

	return (
		<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
			<div className="md:flex w-2/5">
				<div className="w-full flex gap-x-2">
					<img className="h-24" src={cartItem?.imageUrl} alt={cartItem?.productName} />

					<div className="flex flex-col gap-y-3 ml-4 flex-grow">
						<span className="text-sm md:text-lg">{cartItem?.productName}</span>
						<span className="text-red-500 text-sm -mt-2">
							{categories?.find((category) => category.categoryId === cartItem?.categoryId)?.categoryName}
						</span>
						<p
							onClick={removeItem}
							className="font-semibold hover:text-red-500 text-gray-500 text-xs md:text-sm cursor-pointer">
							Remove
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col -ml-10 md:ml-0 md:flex-row items-center -mt-10 text-xl md:space-x-4 justify-center  w-1/5">
				<AiOutlineMinus className="cursor-pointer font-bold" onClick={removeItems} />
				<p className="text-sm md:text-lg my-3">{cartItem?.quantity}</p>
				<AiOutlinePlus className="cursor-pointer font-bold" onClick={addItems} />
			</div>
			<span className="text-center text-sm w-1/5 -mt-10 ml-12 md:ml-0 md:text-lg">
				<CurrencyFormat value={cartItem?.price} displayType={"text"} thousandSeparator={true} prefix={"Ksh "} />
			</span>
			<span className=" text-sm w-1/5 -mt-10 text-right md:text-center md:text-lg">
				<CurrencyFormat
					value={cartItem?.price * cartItem?.quantity}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"Ksh "}
				/>
			</span>
		</div>
	);
}

export default CartProduct;
