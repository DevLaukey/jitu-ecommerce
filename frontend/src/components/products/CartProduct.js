import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartProduct() {
	const [count, setCount] = useState(1);
	const singlePrice = 1990;
	return (
		count > 0 && (
			<div className="flex items-center  hover:bg-gray-100 -mx-8 px-6 py-5">
				<div className="md:flex w-2/5">
					<div className="w-full flex gap-x-2">
						<img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />

						<div className="flex flex-col justify-between ml-4 flex-grow">
							<span className="font-bold text">Iphone 6S</span>
							<span className="text-red-500 text-sm">Apple</span>
							<p
								onClick={() => {
									setCount(0);
								}}
								className="font-semibold hover:text-red-500 text-gray-500 text-xs">
								Remove
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col -ml-10 md:ml-0 md:flex-row items-center -mt-10 text-xl md:space-x-4 justify-center  w-1/5">
					<AiOutlineMinus
						className="cursor-pointer font-bold"
						onClick={() => {
							setCount(count - 1);
						}}
					/>
					<p className="text-lg my-3">{count}</p>
					<AiOutlinePlus
						className="cursor-pointer font-bold"
						onClick={() => {
							setCount(count + 1);
						}}
					/>
				</div>
				<span className="text-center text-xs w-1/5 -mt-10 ml-12 md:ml-0 font-semibold md:text-sm">
					<CurrencyFormat value={singlePrice} displayType={"text"} thousandSeparator={true} prefix={"Ksh"} />
				</span>
				<span className=" text-xs w-1/5 -mt-10 text-right md:text-center font-semibold md:text-sm">
					<CurrencyFormat value={singlePrice * count} displayType={"text"} thousandSeparator={true} prefix={"Ksh"} />
				</span>
			</div>
		)
	);
}

export default CartProduct;
