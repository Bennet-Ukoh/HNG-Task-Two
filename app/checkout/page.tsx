import Image from "next/image";
import React from "react";

export default function Checkout() {
  return (
    <section className="mx-4 my-8">
      <div className="text-sm text-gray-600">
        Home <span className="font-bold text-black">&gt;</span> Checkout
      </div>
      <div className="mt-6 text-3xl font-bold text-gray-600">Checkout</div>
      <div className="mt-6 flex flex-col space-y-6 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
        <div className="w-full space-y-6 lg:w-2/3">
          {/* Contact Info */}
          <div className="w-full space-y-6 border border-gray-300 p-4">
            <h3 className="mb-4 text-2xl font-bold">Contact Info</h3>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-bold">Email</label>
                <input
                  type="email"
                  className="rounded-md border border-gray-300 p-2"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-bold">Phone Number</label>
                <input
                  type="tel"
                  className="rounded-md border border-gray-300 p-2"
                  required
                />
              </div>
            </form>
          </div>

          {/* Shipping Address */}
          <div className="w-full space-y-6 border border-gray-300 p-4">
            <h3 className="mb-4 text-2xl font-bold">Shipping Address</h3>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-bold">Full Name</label>
                <input
                  type="text"
                  className="rounded-md border border-gray-300 p-2"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-bold">Address</label>
                <input
                  type="text"
                  className="rounded-md border border-gray-300 p-2"
                  required
                />
              </div>
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="flex flex-col lg:w-1/2">
                  <label className="mb-2 text-sm font-bold">City</label>
                  <input
                    type="text"
                    className="rounded-md border border-gray-300 p-2"
                    required
                  />
                </div>
                <div className="flex flex-col lg:w-1/2">
                  <label className="mb-2 text-sm font-bold">Postal Code</label>
                  <input
                    type="text"
                    className="rounded-md border border-gray-300 p-2"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-bold">Country</label>
                <input
                  type="text"
                  className="rounded-md border border-gray-300 p-2"
                  required
                />
              </div>
            </form>
          </div>

          {/* Payment Form */}
          <div className="w-full space-y-6 border border-gray-300 p-4">
            <h3 className="mb-4 text-2xl font-bold">Payment Details</h3>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-bold">Card Number</label>
                <input
                  type="text"
                  className="rounded-md border border-gray-300 p-2"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-bold">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="rounded-md border border-gray-300 p-2"
                  required
                />
              </div>
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="flex flex-col lg:w-1/2">
                  <label className="mb-2 text-sm font-bold">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="rounded-md border border-gray-300 p-2"
                    required
                  />
                </div>
                <div className="flex flex-col lg:w-1/2">
                  <label className="mb-2 text-sm font-bold">CVV</label>
                  <input
                    type="text"
                    className="rounded-md border border-gray-300 p-2"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full border border-gray-300 p-4 lg:ml-10 lg:w-1/3">
          <h3 className="mb-4 text-2xl font-bold">Order Summary</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <Image
                src="/images/product1.png"
                alt="product1"
                width={80}
                height={84}
                className="rounded-[8px]"
              />
              <div className="flex flex-col justify-between space-y-2">
                <div>
                  <p className="text-sm font-bold lg:text-lg">
                    Men Cartoon Face Print
                  </p>
                  <p className="text-xs text-gray-500 lg:text-sm">Size: XXL</p>
                </div>
                <p className="text-base font-bold lg:text-xl">₦12,000</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Image
                src="/images/product2.png"
                alt="product2"
                width={80}
                height={84}
                className="rounded-[8px]"
              />
              <div className="flex flex-col justify-between space-y-2">
                <div>
                  <p className="text-sm font-bold lg:text-lg">
                    Alberta Sunset Men&apos;s Shirt
                  </p>
                  <p className="text-xs text-gray-500 lg:text-sm">Size: XXL</p>
                </div>
                <p className="text-base font-bold lg:text-xl">₦12,000</p>
              </div>
            </div>
            <div className="flex justify-between space-x-10 border-t pt-4">
              <p className="text-base lg:text-lg">Total</p>
              <p className="text-base font-bold lg:text-lg">₦27,000</p>
            </div>

            <button className="mt-4 w-full rounded-md bg-black px-4 py-2 text-sm text-white lg:px-8 lg:py-4 lg:text-base">
              Complete Payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
