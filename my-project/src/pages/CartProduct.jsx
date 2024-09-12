import { useEffect, useState } from "react";

export default function CartProduct({
  productCartList,
  setProductCartList,
  setCount,
}) {
  const [totallPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotalPrice = productCartList.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [productCartList]);

  const handleIncreaseQuantity = (productId) => {
    setProductCartList((prevCartList) =>
      prevCartList.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setProductCartList((prevCartList) =>
      prevCartList
        .map((product) =>
          product.id === productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );

    setCount((prevCount) => prevCount - 1);
  };

  const handleRemoveProduct = (productId) => {
    setProductCartList((prevCartList) =>
      prevCartList.filter((product) => product.id !== productId)
    );
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="my-16 py-10 px-10">
      <h2 className="text-2xl font-bold mb-6">Products in Cart</h2>
      {productCartList.length === 0 ? (
        <p>No products in the cart.</p>
      ) : (
        productCartList.map((product, index) => (
          <div key={index} className="border py-4 px-4 mb-4 rounded-md">
            <div className="flex">
              <div className="w-[100px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-lg font-semibold">{product.title}</p>
                <p className="text-gray-500">{product.price} $</p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecreaseQuantity(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span className="mx-3">{product.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(product.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemoveProduct(product.id)}
                className=""
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <p> totalPrice :{totallPrice.toFixed(3)}$</p>
    </div>
  );
}
