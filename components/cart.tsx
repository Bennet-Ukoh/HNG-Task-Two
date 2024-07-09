import Image from "next/image";
import React from "react";

export default function Cart() {
  return (
    <section className="mx-4 my-8 sm:mx-10">
      <div className="text-sm text-gray-600">
        Home <span className="font-bold text-black">&gt;</span> Cart
      </div>
      <div className="mt-6 text-3xl font-bold text-gray-600">Your Cart</div>
      <div className="mt-6 flex flex-col space-y-6 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
        <div className="w-full space-y-6 border border-gray-300 p-4 sm:w-2/3">
          <div className="flex flex-col space-y-6 border-b border-gray-300 pb-6 sm:flex-row sm:justify-between sm:space-y-0">
            <div className="flex space-x-4">
              <Image
                src="/images/product1.png"
                alt="product1"
                width={127.49}
                height={134.7}
                className="rounded-[8px]"
              />
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-lg font-bold">Men Cartoon Face Print</p>
                  <p className="text-gray-500">Size: XXL</p>
                </div>
                <p className="text-xl font-bold">₦12,000</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between sm:space-y-10">
              <Image
                src="/images/delete.png"
                alt="delete icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <div className="flex items-center space-x-4 rounded-2xl bg-gray-200 px-6 py-2 text-2xl">
                <button className="">-</button>
                <span>1</span>
                <button className="">+</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
            <div className="flex space-x-4">
              <Image
                src="/images/product2.png"
                alt="product2"
                width={127.49}
                height={134.7}
                className="rounded-[8px]"
              />
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-lg font-bold">
                    Alberta Sunset Men&apos;s Shirt
                  </p>
                  <p className="text-gray-500">Size: XXL</p>
                </div>
                <p className="text-xl font-bold">₦12,000</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between sm:space-y-10">
              <Image
                src="/images/delete.png"
                alt="delete icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <div className="flex items-center space-x-4 rounded-2xl bg-gray-200 px-6 py-2 text-2xl">
                <button className="">-</button>
                <span>1</span>
                <button className="">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border border-gray-300 p-4 sm:ml-10 sm:w-1/3">
          <h3 className="mb-4 text-2xl font-bold">Order Summary</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between space-x-10">
              <p>Subtotal</p>
              <p className="font-bold">₦24,000</p>
            </div>
            <div className="flex justify-between space-x-10">
              <p>Delivery fee</p>
              <p className="font-bold">₦3,000</p>
            </div>
            <div className="flex justify-between space-x-10 border-t pt-4">
              <p>Total</p>
              <p className="font-bold">₦27,000</p>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <button className="flex items-center space-x-2 rounded-md bg-gray-200 px-8 py-4 text-black">
                <Image
                  src="/images/promocode.png"
                  alt="favorite icon"
                  width={20}
                  height={20}
                />
                <span>Add a promo code</span>
              </button>
              <button className="rounded-md bg-black px-8 py-4 text-white">
                Apply
              </button>
            </div>
            <button className="rounded-md bg-black px-8 py-4 text-white">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
