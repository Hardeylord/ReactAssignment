import { ImagePlus, Plus, ShoppingCart, Upload, X } from "lucide-react";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
  Drawer,
} from "@material-tailwind/react";

export default function Store() {
  const [inputValue, setinputValue] = useState({
    pName: "",
    pDesciption: "",
    pPrice: "",
    pImage: null,
    pId:"",
  });
  const [dopen, setdOpen] = React.useState(false);

  const openDrawer = () => setdOpen(true);
  const closeDrawer = () => setdOpen(false);
  const [products, setproducts] = useState([]);
  const [productimagePreview, setproductimagePreview] = useState(null);
  const [showForm, setshowForm] = useState(false);
  const [cart, setCart] = useState([]);

  function addToCart(productCart) {
    setCart([...cart, productCart]);
  }

  function getValue(e) {
    const { name, value } = e.target;
    setinputValue({ ...inputValue, [name]: value, pId: Date.now()});
  }
  function getImage(e) {
    const { files } = e.target;
    const [imageData] = files;
    const url = URL.createObjectURL(imageData);
    setinputValue({ ...inputValue, pImage: url });
    setproductimagePreview(url);
  }
  function storeProduct() {
    setproducts([...products, inputValue]);
    setOpen((prev) => !prev);
    console.log(products);
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <React.Fragment>
        <div className=" mt-20"></div>
        <button onClick={openDrawer} className="p-2 bg-[#1F1F1F] rounded">
          <ShoppingCart color="#fff" />
        </button>
        <Drawer open={dopen} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Cart
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="space-y-4">
            {cart.map((cardPrdt, index) => (
              <div className="flex relative items-center gap-3 shadow-lg p-2 rounded" key={index}>
                <div>
                  <img className="size-28" src={cardPrdt.pImage} />
                </div>
                <div className="flex h-[112px] justify-between flex-col">
                  <X className="cursor-pointer absolute right-4" />
                <p>{cardPrdt.pName}</p>
                  <p>${cardPrdt.pPrice}</p>
                </div>
              </div>
            ))}
            <div>
            <div className="flex">Subtotal:{cart.length == 1 ? (<p>1 item</p>) :(<p>{cart.length} items</p>)}</div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm" variant="outlined">
              Clear Cart
            </Button>
            <Button size="sm">Checkout</Button>
          </div>
        </Drawer>
      </React.Fragment>
      {products.length === 0 ? (
        <div className="flex mt-20 flex-col space-y-3 justify-center m-8 items-center">
          <p className="text-5xl text-center font-bold">
            Product Catalog is empty
          </p>
          {/* <button
            className="bg-cyan-600 flex justify-center space-x-3 p-2 rounded-full cursor-pointer text-white text-xl"
            onClick={()=>setshowForm(true)}
          >
            <p>Add Product</p> <Plus className="mt-1" />
          </button> */}
          <Button onClick={handleOpen}>Add Product</Button>
        </div>
      ) : (
        <div className="grid mt-20 p-3 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="max-w-sm w-full bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <img
                src={product.pImage}
                alt="Product Name"
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-5 space-y-2">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.pName}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.pDesciption}
                </p>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-lg font-bold text-blue-600">
                    {product.pPrice}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {open && (
        <>
          <div className="w-full flex justify-center items-center">
            {/* <Button onClick={handleOpen}>Connect Wallet</Button> */}
            <Dialog size="xs" open={open} handler={handleOpen}>
              <DialogHeader className="justify-between">
                <div></div>
                <h1 className="text-4xl text-black text-center">
                  Add New Product
                </h1>
                <IconButton
                  color="blue-gray"
                  size="sm"
                  variant="text"
                  onClick={handleOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </DialogHeader>
              <DialogBody className="max-h-[80dvh] overflow-y-auto !px-5">
                <div className="flex bg-black rounded-xl mt-4 p-10 space-y-2 flex-col mb-5">
                  <label htmlFor="" className="text-white">
                    Product Name
                  </label>
                  <input
                    name="pName"
                    onChange={getValue}
                    type="text"
                    placeholder="products name"
                    className="bg-white outline-cyan-600 rounded-3xl w-[350px] px-4 py-3"
                  />
                  <label className="text-white" htmlFor="">
                    Product Description
                  </label>
                  <textarea
                    name="pDesciption"
                    onChange={getValue}
                    placeholder="products description"
                    className="bg-white outline-cyan-600 rounded-xs w-[350px] px-4 py-3"
                  ></textarea>

                  {/* product image */}
                  {productimagePreview ? (
                    <img src={productimagePreview} className="size-29" />
                  ) : (
                    <ImagePlus size={40} color="#fffafa" strokeWidth={0.75} />
                  )}

                  <label
                    className="text-white bg-[#6E9A7F] p-2 justify-center rounded-xl flex space-x-2"
                    htmlFor="image"
                  >
                    <p>Upload Product Image</p> <Upload />
                    <input
                      id="image"
                      accept="png, jpeg, jpg"
                      onChange={getImage}
                      className="text-white"
                      type="file"
                      hidden
                    />
                  </label>

                  <label className="text-white mt-7" htmlFor="">
                    Product Price
                  </label>
                  <input
                    name="pPrice"
                    onChange={getValue}
                    type="text"
                    placeholder="price"
                    className="bg-white rounded-xl w-[150px] px-4 py-3"
                  />
                  <button
                    className="bg-[#6E9A7F] flex justify-center space-x-3 py-5 rounded cursor-pointer text-white text-xl"
                    onClick={storeProduct}
                  >
                    <p>Add Product</p> <Plus className="mt-1" />
                  </button>
                </div>
              </DialogBody>
            </Dialog>
          </div>
        </>
      )}{" "}
      {products.length > 0 && (
        <div className="flex flex-col space-y-3 justify-center m-8 items-center">
          <p className="text-5xl font-bold text-center">Add more Product</p>
          {/* <button
            className="bg-cyan-600 flex justify-center space-x-3 p-2 rounded-full cursor-pointer text-white text-xl"
            onClick={() => setshowForm(true)}
          >
            <p>Add Product</p> <Plus className="mt-1" />
          </button> */}
          <Button onClick={handleOpen}>Add Product</Button>
        </div>
      )}
    </>
  );
}
