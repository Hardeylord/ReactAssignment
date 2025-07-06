import { ShoppingBasket } from "lucide-react";

function Productcard(props) {
  return (
    <>
      <div className="max-w-sm  w-full bg-gray-900 border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        <img
          src={props.image}
          alt="Product"
          className="w-full h-48 object-cover object-center"
        />

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-1">
            {props.name}
          </h3>

          <p className="text-sm text-white mb-4">{props.description.substring(0, 70)}</p>

          <div className="flex justify-between items-center">
            <span className="text-white font-bold text-lg">
              ${props.price}
            </span>
            <button className="px-4 space-x-3 flex items-center py-2 bg-[#0081A3] text-white text-sm rounded hover:bg-indigo-700 transition">
              <p className="text-xs">Add To Cart</p> <ShoppingBasket/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productcard;
