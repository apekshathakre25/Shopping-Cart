import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Helper";
import Loading from "./Loading";


const Home = () => {
  const { products } = useContext(ProductContext);
  const [filterProduct, setFilterProduct] = useState(null);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = decodeURIComponent(params.get("category") || "").split(
    ","
  )[0];

 
  useEffect(() => {
    if (category) {
      // getProductsCategory();
      setFilterProduct(
        products.filter((product) => product.category == category)
      );
    } else {
      setFilterProduct(products);
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filterProduct &&
          filterProduct.map((item) => (
            <Link
              key={item.id}
              to={`/details/${item.id}`}
              className="mr-3 mb-3 card p-5 border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[90%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300">{item.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
