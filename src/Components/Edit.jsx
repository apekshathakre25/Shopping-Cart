import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Helper";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    price: "",
  });

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setProduct(products.filter((product) => product.id == id)[0]);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !product.title ||
      !product.description ||
      !product.category ||
      !product.price ||
      !product.image
    ) {
      return alert("Please fill in all the fields");
    }

    const pi = products.findIndex((p) => p.id == id);

    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };
    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    console.log();
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="w-1/2 text-3xl mb-[2%]">Edit Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-1xl rounded p-3 w-1/2 border border-orange-300 mb-3"
        onChange={changeHandler}
        value={product.image}
        name="image"
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl rounded p-3 w-1/2 border border-orange-300 mb-3"
        onChange={changeHandler}
        value={product.title}
        name="title"
      />
      <div className="w-1/2 flex">
        <input
          type="text"
          placeholder="category"
          className="text-1xl rounded p-3 w-1/2 border border-orange-300 mb-3"
          onChange={changeHandler}
          value={product.category}
          name="category"
        />
        <input
          type="text"
          placeholder="price"
          className="text-1xl rounded p-3 w-1/2 ml-5 border border-orange-300 mb-3"
          onChange={changeHandler}
          value={product.price}
          name="price"
        />
      </div>
      <textarea
        placeholder="description"
        className="text-1xl rounded p-3 w-1/2 border border-orange-300 mb-3"
        onChange={changeHandler}
        value={product.description}
        name="description"
      />
      <div className="w-1/2">
        <button
          type="submit"
          className="py-2 px-5 rounded-md border border-red-900 text-blue-400"
        >
          Edit Product
        </button>
      </div>
    </form>
  );
}

export default Edit;
