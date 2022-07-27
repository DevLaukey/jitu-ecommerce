import React from "react";
import BookMarkItems from "./BookMarkItems";

import { useSelector } from "react-redux";

function Bookmark() {
  const { favorites } = useSelector((state) => state.cart);
console.log(favorites.length);
  return (
    <div class="shadow-md max-w-3xl m-auto w-full">
      <div class="bg-white px-10 py-10 items-center">
        <div class="flex w-full justify-between border-b pb-8">
          <h1 class="font-semibold text-xl">
          
           { favorites.length == 0 && 'No'}Things to buy
          </h1>
          <h2 class="font-semibold text-xl">
            {favorites.reduce((acc, item) => acc + 1, 0)} Items
          </h2>
        </div>
        {favorites.map((item) => (
          <BookMarkItems product={item} key={item.productID} />
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
