import React, { useContext } from "react";
import { ProductContext } from "../utils/Helper";
import { Link } from "react-router-dom";

const Nav = () => {
  const { products } = useContext(ProductContext);

  const distinct_category =
    products &&
    products.reduce((acc, currentVal) => [...acc, currentVal.category], []);
  const unique_category = [...new Set(distinct_category)];
  console.log(unique_category);

  const randomColor = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, ${Math.random().toFixed(
      2
    )})`;
  };

  return (
    <nav className="w-[15%] h-full  flex flex-col items-center pt-5">
      <a
        href=""
        className="py-2 px-5 rounded-md border border-red-900 text-blue-400"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%]" />

      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <div className="w-[80%]">
        {unique_category.map((item, index) => (
          <Link
            key={index}
            to={`/?category=${item}`}
            className="mb-3 ml-3 flex items-center"
          >
            <span
              style={{
                background: randomColor(),
              }}
              className="w-[15px] h-[15px] rounded-full "
            ></span>
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
