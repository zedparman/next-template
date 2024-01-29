"use client";
import React, { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async () => {
    const productObj = {
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
    };
    await Axios.post(`/api/productRoute`, productObj).then(() => {
      alert("Posted");
    });
  };
  return (
    <main className="space-y-10">
      <form className="m-10">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="SmartPhone"
            className="shadow-xl shadow-slate-500 w-[75%] h-10 p-2 outline-none m-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="brand">
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="Brand"
            className="shadow-xl shadow-slate-500 w-[75%] h-10 p-2 outline-none m-5"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label htmlFor="price">
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            className="shadow-xl shadow-slate-500 w-[75%] h-10 p-2 outline-none m-5"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label htmlFor="quantity">
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            className="shadow-xl shadow-slate-500 w-[75%] h-10 p-2 outline-none m-5"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br />
        <button className="p-2 m-5 bg-orange-500 hover:cursor-pointer hover:bg-red-600 text-white" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </main>
  );
}
