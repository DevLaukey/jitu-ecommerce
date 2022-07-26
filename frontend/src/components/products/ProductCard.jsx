import React from "react";
import { FiEye, FiHeart } from "react-icons/fi";
import { BsCartPlus, BsFillFilePlusFill, BsFillFileMinusFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	addToFavorite,
	removeFromFavorite,
	addItemQuantity,
	minusItemQuantity,
	removeFromCart,
} from "../../redux/slices/cartReducer";

import CurrencyFormat from "react-currency-format";

const ProductCard = ({ product }) => {
	let discount = 25;
	const dispatch = useDispatch();
	const [showModal, setShowModal] = React.useState();

	const { cart, favorites } = useSelector((state) => state.cart);

	const cartItem = cart?.find((item) => item.productID === product.productID);

	const removeItems = () => {
		if (cartItem?.quantity > 1) {
			dispatch(minusItemQuantity(product.productID));
		} else {
			dispatch(removeFromCart(product.productID));
		}
	};

	const addItems = () => {
		if (cartItem) {
			dispatch(addItemQuantity(product.productID));
		} else {
			dispatch(addToCart(product));
		}
	};

	function Modal() {
		return (
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="p-4 w-3/5 h-3/5 text-center bg-gray-100 shadow-lg shadow-gray-600 rounded-lg border sm:p-8 dark:bg-gray-800 dark:border-gray-700">
					<button
						onClick={() => setShowModal(false)}
						className="mb-2 text-3xl font-bold text-gray-900 dark:text-white float-right -top-8 relative">
						<IoIosCloseCircle />
					</button>
					<div className="grid grid-cols-2 gap-3">
						<div className="hover:cursor-pointer col-span-1">
							<Link to={`/products/${product?.productName}`}>
								<img src={product?.imageUrl} alt={product?.productName} className="w-max h-3/4 rounded" />
							</Link>
						</div>
						<div className="col-span-1 space-y-4 md:flex-col md:gap-y-6 sm:flex sm:space-y-0 sm:space-x-4 relative">
							<p className="text-zinc-900 mt-2 font-semibold capitalize">{product?.productName}</p>
							<p className="text-zinc-500 text-sm my-0.5">{product?.description}</p>
							<div className="flex flex-col lg:flex-row justify-between lg:items-center w-full mt-3">
								<span className="flex items-center self-start gap-x-2">
									<p className="text-xl font-semibold">
										<CurrencyFormat
											value={product?.price}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Ksh "}
										/>
									</p>
									<p className="bg-zinc-200 px-1.5 rounded-sm  text-zinc-600">-25%</p>
								</span>
								<span>
									<p className="line-through text-zinc-400 p-1.5 self-start">
										<CurrencyFormat
											value={product?.price + Math.floor(product?.price * (discount / 100))}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Ksh"}
										/>
									</p>
								</span>
							</div>
							{cartItem?.productID ? (
								<div className="w-full mt-3 items-center flex justify-between bg-blue-600 text-white rounded-md font-light py-0.5 px-3 text-2xl">
									<BsFillFileMinusFill className="cursor-pointer hover:scale-x-150" onClick={removeItems} />
									{cartItem?.quantity}
									<BsFillFilePlusFill className="cursor-pointer hover:scale-x-150" onClick={addItems} />
								</div>
							) : (
								<button
									onClick={addItems}
									className="bg-blue-600 text-white capitalize w-full flex items-center justify-center gap-x-2 p-2 my-2 rounded-md hover:bg-blue-800 ">
									<span>
										<BsCartPlus />
									</span>
									<p>Add to Cart</p>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			{showModal ? <Modal showModal={showModal} setShowModal={setShowModal} /> : null}
			<div className="bg-white rounded-md px-4 py-2.5 my-2 mx-1 md:m-3 shadow-md shadow-zinc-400 flex flex-col justify-center items-center hover:shadow hover:shadow-blue-500">
				<div className="flex items-center self-end gap-x-3 z-40 mr-4">
					<span className="bg-blue-400 text-white p-1.5 rounded-md hover:bg-blue-600">
						<FiEye className="hover:cursor-pointer" onClick={() => setShowModal(true)} />
					</span>
					<span
						className={
							favorites?.find((item) => item.productID === product.productID)?.productID
								? `bg-indigo-900 text-white p-1.5 rounded-md hover:bg-blue-600`
								: `bg-blue-400 text-white p-1.5 rounded-md hover:bg-blue-600`
						}>
						<FiHeart
							className="hover:cursor-pointer"
							onClick={() => {
								if (favorites?.find((item) => item.productID === product.productID)?.productID) {
									dispatch(removeFromFavorite(product.productID));
								} else {
									dispatch(addToFavorite(product));
								}
							}}
						/>
					</span>
				</div>
				<div className="w-full mt-[-20px] z-30">
					<Link to={`/products/${product?.productName}`}>
						<img src={product?.imageUrl} alt={product?.productName} className="w-max h-full rounded" />
					</Link>
				</div>
				<div className="justify-between  flex-wrap">
					<p className="text-zinc-900 mt-1.5 font-semibold capitalize">{product?.productName}</p>
					{product?.inStock ? (
						<p className="text-sm text-green-600 mt-1">In Stock</p>
					) : (
						<p className="text-sm text-red-600 mt-1">Out of stock</p>
					)}
				</div>

				<div className="flex flex-col lg:flex-row justify-between lg:items-center w-full mt-3">
					<span className="flex items-center self-start gap-x-2">
						<p className="text-xl font-semibold">
							<CurrencyFormat value={product?.price} displayType={"text"} thousandSeparator={true} prefix={"Ksh"} />
						</p>
						<p className="bg-zinc-200 px-1.5 rounded-sm  text-zinc-600">-{discount}%</p>
					</span>
					<span>
						<p className="line-through text-zinc-400 p-1.5 self-start">
							<CurrencyFormat
								value={product?.price + Math.floor(product?.price * (discount / 100))}
								displayType={"text"}
								thousandSeparator={true}
								prefix={"Ksh"}
							/>
						</p>
					</span>
				</div>
				{cartItem?.productID ? (
					<div className="w-full mt-3 items-center flex justify-between bg-blue-600 text-white rounded-md font-light py-0.5 px-3 text-2xl">
						<BsFillFileMinusFill className="cursor-pointer hover:scale-x-150" onClick={removeItems} />
						{cartItem?.quantity}
						<BsFillFilePlusFill className="cursor-pointer hover:scale-x-150" onClick={addItems} />
					</div>
				) : (
					<button
						onClick={addItems}
						className="disabled:bg-blue-200 bg-blue-600 text-white capitalize w-full flex items-center justify-center gap-x-2 p-2 my-2 rounded-md hover:bg-blue-800 "
						disabled={!product?.inStock}>
						<span>
							<BsCartPlus />
						</span>
						<p>Add to Cart</p>
					</button>
				)}
			</div>
		</>
	);
};

export default ProductCard;
