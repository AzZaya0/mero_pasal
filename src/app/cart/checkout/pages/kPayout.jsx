import React from "react";

export default function payout({ prevStep }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Address</h2>

      <div className="space-y-4">
        {[
          {
            label: "2118 Thornridge",
            tag: "HOME",
            address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
            phone: "(209) 555-0104",
          },
          {
            label: "Headoffice",
            tag: "OFFICE",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            phone: "(704) 555-0127",
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
              <div className="flex items-center gap-4">
                <span className="font-semibold">{addr.label}</span>
                <span className="text-xs bg-black text-white px-2 py-1 rounded">
                  {addr.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600">{addr.address}</p>
              <p className="text-sm text-gray-600">{addr.phone}</p>
            </div>
            <button className="ml-2 text-gray-400 hover:text-black">H</button>
            <button className="ml-2 text-gray-400 hover:text-red-600">
              ✖️
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-sm text-gray-700 hover:underline">
          + Add New Address
        </button>
      </div>

      <div className="flex justify-end gap-10 mt-6">
        <button className="px-4 py-2 border rounded" onClick={prevStep}>
          Back
        </button>
      </div>
    </div>
  );
}
