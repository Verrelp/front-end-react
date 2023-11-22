import React from 'react';

const Menu = ({ onAddToCart }) => {
  return (
    <div className="flex flex-wrap -m-4">
      <div className="m-4 p-6 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://th.bing.com/th/id/OIP.a2rdLF3EU5T9FnKf_UfrAQHaKT?pid=ImgDet&rs=1"
          alt="Mille Crepes with Strawberry flavour"
          className="w-full h-48 object-cover mb-4"
        />
        <div className="text-center">
          <h5 className="text-xl font-semibold mb-2">Strawberry Mille Crepes</h5>
          <p className="text-gray-700 mb-4">$90.00</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onAddToCart('Strawberry Mille Crepes', 90.00)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="m-4 p-6 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://i.pinimg.com/originals/6e/c2/75/6ec27532465fd1f5853b6b60384184c6.jpg"
          alt="Mille Crepes with Green Tea Flavour"
          className="w-full h-48 object-cover mb-4"
        />
        <div className="text-center">
          <h5 className="text-xl font-semibold mb-2">Green Tea Mille Crepes</h5>
          <p className="text-gray-700 mb-4">$32.00</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onAddToCart('Green Tea Mille Crepes', 32.00)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
