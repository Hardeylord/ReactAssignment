import { CheckCircle2, Plus, ShoppingBasket, Upload } from "lucide-react";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Store2() {
  const [productsInput, setproductsInput] = useState({
    name: "",
    desciption: "",
    price: "",
    image: null,
  });
  const [showForm, setShowForm] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [arrayProducts, setarrayProducts] = useState([]);
  const [storeErrors, setstoreErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproductsInput({ ...productsInput, [name]: value });
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    const [imagedata] = files;

    const url = URL.createObjectURL(imagedata);
    setImagePreviewUrl(url);
    setproductsInput({ ...productsInput, image: url });
  };

  //   function validateInput() {
  //     const errors = {};
  //     if (!productsInput.pName) {
  //       errors.name = "please add a product name";
  //       return;
  //     }
  //     setstoreErrors(errors);
  //   }

  function addProduct() {
    //     validateInput();
    setarrayProducts([...arrayProducts, productsInput]);
    setproductsInput({
      name: "",
      desciption: "",
      price: "",
      image: null,
    });
    setImagePreviewUrl(null);
    setShowForm(false);
  }

  return (
    <>
      <div className="flex justify-end items-center">
      <Button onClick={()=> setShowForm(true)} variant="gradient">
        Open Modal
      </Button>
      </div>
      <div className="grid mt-6 p-3 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {arrayProducts.length ? (
          arrayProducts.map((prod, index) => (
            <div
              key={index}
              className="max-w-sm  w-full shadow border border-gray-200 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={prod.image}
                alt="Product"
                className="w-full h-48 object-cover object-center"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-1">
                  {prod.name}
                </h3>

                <p className="text-sm text-black mb-4">
                  {prod.desciption.substring(0, 70)}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-black font-bold text-lg">
                    ${prod.price}
                  </span>
                  <button className="px-4 space-x-3 flex items-center py-2 bg-[#0081A3] text-black text-sm rounded hover:bg-indigo-700 transition">
                    <p className="text-xs">Add To Cart</p> <ShoppingBasket />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <CheckCircle2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Products yet
            </h3>
            <p className="text-gray-500">Add your first Products</p>
          </div>
        )}
      </div>
      <Dialog open={showForm} handler={() => setShowForm(false)}>
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody className="h-[30rem] overflow-scroll">
          <div className="w-full flex justify-center items-center text-black">
            <div className="flex shadow rounded-xl mt-4 w-full max-w-lg p-10 space-y-2 flex-col mb-5">
              <h1 className="text-4xl text-black text-center">
                Add New Product
              </h1>
              <div className="grid gap-2">
                <label htmlFor="" className="text-black">
                  Product Name
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  value={productsInput.name}
                  type="text"
                  placeholder="products name"
                  className="bg-white border border-cyan-600 rounded-lg w-full px-4 py-3"
                />
                <p>
                  {storeErrors.name && (
                    <p className="text-red-600">{storeErrors.name}</p>
                  )}
                </p>
              </div>
              {/* <p>{storeErrors.pName}</p> */}
              <div className="grid gap-2">
                <label className="text-black" htmlFor="">
                  Product Description
                </label>
                <textarea
                  name="desciption"
                  onChange={handleChange}
                  type="text-area"
                  value={productsInput.desciption}
                  placeholder="products description"
                  className="bg-white border border-cyan-600 rounded-lg w-full px-4 py-3"
                ></textarea>
              </div>
              <div className="grid gap-2">
                <label className="text-black" htmlFor="">
                  Product Price
                </label>
                <input
                  name="price"
                  onChange={handleChange}
                  type="text"
                  value={productsInput.price}
                  placeholder="price"
                  className="bg-white border border-cyan-600 rounded-lg w-full px-4 py-3"
                />
              </div>
              <div className="grid gap-2 mb-3">
                <img
                  src={imagePreviewUrl || "/avatar_placeholder.png"}
                  alt=""
                  className="w-6/12"
                />
                <label
                  htmlFor="product-image"
                  className="flex justify-center items-center gap-5 text-xs cursor-pointer border text-cyan-600 py-3 border-cyan-600 rounded-lg"
                >
                  <Upload size={15} /> Upload product image
                  <input
                    type="file"
                    onChange={handleImageChange}
                    id="product-image"
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
              
              <button
                onClick={addProduct}
                className="bg-cyan-600 flex justify-center items-center gap-4 py-3 rounded cursor-pointer text-black text-xl"
              >
                <Plus />
                Add Product
              </button>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setShowForm(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => setShowForm(false)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
