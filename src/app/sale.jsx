import React from "react";

function Sale() {
  return (
    <section className="bg-green-200 text-white font-thin">
      <div className="flex flex-col justify-center py-20  m-auto items-center">
        <p className="text-[72px]">
          Big Summer <strong>Sale</strong>
        </p>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>

        <button className="py-4 px-12 border rounded-lg mt-14 border-red-500">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Sale;
