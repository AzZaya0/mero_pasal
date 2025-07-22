"use client";
import { useState } from "react";
import KAddress from "./pages/kAddress";
import KPayout from "./pages/kPayout";
import KShipping from "./pages/kShipping";

export default function Checkout() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="w-[1200px]  rounded-lg  p-6">
        <div className="mb-40 flex justify-between text-sm font-semibold text-gray-500">
          <div className={step === 1 ? "text-black" : ""}>
            Step 1 <br />Address
          </div>
          <div className={step === 2 ? "text-black" : ""}>
            Step 2 <br />Shipping
          </div>
          <div className={step === 3 ? "text-black" : ""}>
            Step 3 <br />Payment
          </div>
        </div>

        {step === 1 && <KAddress nextStep={nextStep} />}
        {step === 2 && <KShipping nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <KPayout prevStep={prevStep} />}
      </div>
    </div>
  );
}
