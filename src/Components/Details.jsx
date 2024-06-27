import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Helper";

const Details = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((product) => product.id == id)[0]);
    }
    // getSingleProduct();
  }, []);

  const ProductDelete = () => {
    const copyProduct = products.filter((product) => product.id !== id);
    setProducts(copyProduct);
    localStorage.setItem("products", JSON.stringify(copyProduct));
    navigate("/");
  };

  return product ? (
    <div className="w-[70%] flex h-full items-center justify-between m-auto p-[10%]">
      <img
        className="object-contain w-[50%] h-[80%]"
        src={`${product.image}`}
      />
      <div className="content w-[40%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="bg-red-100 mb-3">{product.price}</h2>
        <p className="mb-5">{product.description}</p>
        <Link
          to={`/edit/${id}`}
          className="py-2 px-5 mr-2 rounded-md border border-red-900 text-blue-400"
        >
          Edit
        </Link>
        <button
          onClick={() => ProductDelete(product.id)}
          className="py-2 px-5 rounded-md border border-red-900 text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
