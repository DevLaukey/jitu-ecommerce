import React from "react";
import { useSelector } from "react-redux";
import BookMarkItems from "./BookMarkItems";

function Bookmark() {
  const bookmarkcount = useSelector((state) => state.cart.bookmarkCount);

  return (
    <div class="container shadow-md max-w-xl mx-auto w-full mb-60">
      <div class="bg-white px-10 py-10 items-center">
        <div class="flex w-full justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Things to buy</h1>
          <h2 class="font-semibold text-2xl">{bookmarkcount} Items</h2>
        </div>
        <BookMarkItems />
        <BookMarkItems />
        <BookMarkItems />
      </div>
    </div>
  );
}

export default Bookmark;
