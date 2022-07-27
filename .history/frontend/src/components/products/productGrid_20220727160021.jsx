import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../Slider";
import Pagination from "./Pagination";
import {
  nextPageNumber,
  previousPageNumber,
} from "../../redux/slices/productReducer";

const ProductGrid = () => {
  const [products, setProducts] = React.useState([]);
  const [maxPage, setMaxPage] = React.useState(0);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.product.searchQuery);
  const page = useSelector((state) => state.product.pageNumber);
  const size = 1;
  const baseURL = "http://localhost:3005";

  useEffect(() => {
    setProducts([]);
    // let rows, total = 0;
    axios
      .get(
        `${baseURL}/products?page=${page}&size=${size}&search=${
          search ? search : ""
        }`
      )
      .then((response) => {
        setProducts(response.data.records);
        setMaxPage(Math.ceil(
          response.data.filtered / response.data.size));
        // total = response.data.filtered;
        // rows = response.data.records.length;
      });
  }, [search, page]);

  console.log(Math.ceil(maxPage));
  return (
    <>
      <Slider />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 p-2 bg-zinc-300">
        {products.length > 0 ? (
          <>
            {products ? (
              products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h1>No products found</h1>
          </div>
        )}
      </div>
      <Pagination
        size={size}
        page={page}
        maxPage={023}
        previousPageNumber={() => dispatch(previousPageNumber())}
        nextPageNumber={() => dispatch(nextPageNumber())}
      />
    </>
  );
};

export default ProductGrid;
