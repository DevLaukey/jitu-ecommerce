import React from "react";
import CurrencyFormat from "react-currency-format";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

function Cart() {
	const { cart } = useSelector((state) => state.cart);

	return (
		<div className="container mx-auto ">
			<div className="md:flex shadow-md my-2">
				<div className=" md:w-3/4 bg-white px-10 py-10">
					<div className="flex justify-between border-b pb-8">
						<h1 className="font-semibold text-2xl">Shopping Cart</h1>
						<h2 className="font-semibold text-2xl">
							{cart.map((item) => (item.quantity > 0 ? 1 : 0)).reduce((acc, item) => acc + item, 0)} Items
						</h2>
					</div>
					<div className="flex mt-10 mb-5 justify-between space-x-3 w-full">
						<h3 className="font-semibold text-gray-600 text-xs uppercase md:w-2/5">Product Details</h3>
						<h3 className="font-semibold  text-gray-600 text-xs uppercase md:w-1/5 text-center">Quantity</h3>
						<h3 className="font-semibold  text-gray-600 text-xs uppercase md:w-1/5 text-center">Price</h3>
						<h3 className="font-semibold  text-gray-600 text-xs uppercase md:w-1/5 text-center">Total</h3>
					</div>
					{cart.map((item) => (
						<CartProduct product={item} key={item.productID} />
					))}
					<Link to="/" className="flex w-60 gap-x-3 font-semibold items-center text-indigo-600 text mt-10">
						<BsArrowLeft />
						Continue Shopping
					</Link>
				</div>

				<div id="summary" className="md:w-1/4 px-8 py-10">
					<h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
					<div className="flex justify-between mt-10 mb-5">
						<span className="font-semibold text-sm uppercase">Total Number of Items</span>
						<span className="font-semibold text-sm">
							{cart.map((item) => item.quantity).reduce((acc, item) => acc + item, 0)}
						</span>
					</div>

					<div className="  mt-8">
						<div className="flex font-semibold justify-between py-6 text-sm uppercase">
							<span>Total cost</span>
							<span>
								<CurrencyFormat
									value={cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"Ksh"}
								/>
							</span>
						</div>
						<button className="bg-blue-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
							Checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
