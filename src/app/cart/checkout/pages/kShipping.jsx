import React from "react";

export default function kShipping({ nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shipment Method</h2>

      <div className="space-y-4">
        {[
          {
            label: "Free Regular Shipping",
            date: "3-5 days",
          },
          {
            label: "Additional Charge Get your delivery as soon as possible",
            date: "1-2 days",
          },
          {
            label: "Schedule Pick a date when you want to receive your order",
            date: "Choose a date",
          },
        ].map((addr, i) => (
          <div key={i} className="flex items-start p-4 border rounded-lg">
            <input
              type="radio"
              name="address"
              className="mt-1 mr-3"
              defaultChecked={i === 0}
            />
            <div className="flex-1">
              <div className="flex items-center  justify-between">
                <span className="font-semibold">{addr.label}</span>
                <span className="text-sm  px-2 py-1 rounded">{addr.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-sm text-gray-700 hover:underline">
          + Add New Address
        </button>
      </div>

      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 border rounded" onClick={prevStep}>
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
