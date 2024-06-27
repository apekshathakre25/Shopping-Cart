import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Helper";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !category || !price || !image) {
      return alert("Please Fill in the all fields");
    }
    const newProduct = {
      id: nanoid(),
      title,
      image,
      description,
      category,
      price,
    };
    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    navigate("/");
    // toast.success("New Product Added!");
    console.log(products);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="w-1/2 text-3xl mb-[2%]">Add New Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-1xl rounded p-3 w-1/2 border border-orange-300 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl rounded p-3 w-1/2 border border-orange-300 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2">
        <input
          type="text"
          placeholder="category"
          className="text-1xl rounded p-3 w-[49%] border border-orange-300 mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="text"
          placeholder="price"
          className="text-1xl rounded p-3 w-[48%] ml-5 border border-orange-300 mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="description"
        className="text-1xl rounded p-3 w-1/2 border border-orange-300 mb-3"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <div className="w-1/2">
        <button className="py-2 px-5 rounded-md border border-red-900 text-blue-400">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
