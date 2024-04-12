import React from "react";

export default function ChooseUs() {
  return (
    <div>
      <div className="bg-[#38B6FF]/10 py-[50px]">
        <div className="container max-w-[1140px] mx-auto px-4">
          <div className="text-center">
            <span className="text-xs text-primary-color uppercase tracking-[6px]">
              WHY CHOOSE US
            </span>
            <h2 className="font-Anton mt-4 mb-5 font-medium text-2xl uppercase md:text-[26px] lg:text-[38px] xl:text-[40px] text-[#232425]">
              WHY CHOOSE <span className="text-[#38B6FF]">QUADRABYTES? </span>
            </h2>
          </div>
          <div className="px-0 md:px-9 lg:px-16 xl:px-20 mt-10">
            <div className="border-b border-primary-color flex flex-col sm:flex-row">
              <div className="sm:border-r border-b sm:border-b-0 border-primary-color w-full sm:w-1/2 py-6 px-6">
                <h4 className="font-Anton mb-4">24/7Priority Support</h4>
                <p className="text-sm">
                  Your success is our priority. Enjoy around-the- clock priority
                  support and maintenance services, guaranteeing the smooth
                  operation of your software. Our dedicated team is always ready
                  to address your queries and ensure optimal performance.
                </p>
              </div>
              <div className="w-full sm:w-1/2 py-6 px-6">
                <h4 className="font-Anton mb-4">Flexible Payment Plans</h4>
                <p className="text-sm">
                  We understand the importance of flexibility. Our flexible
                  payment plans make it easier for you to invest in the software
                  solutions you need without compromising your budget. Choose a
                  plan that aligns with your financial goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="sm:border-r border-primary-color border-b sm:border-b-0 w-full sm:w-1/2 py-6 px-6">
                <h4 className="font-Anton mb-4">Transparent Communication</h4>
                <p className="text-sm">
                  Communication is key to success. We maintain transparent and
                  open communication throughout the development process, keeping
                  you informed at every step. This ensures a shared
                  understanding of goals, progress, and expectations.
                </p>
              </div>
              <div className="w-full sm:w-1/2 py-6 px-6">
                <h4 className="font-Anton mb-4">Exclusive Bundle Deals</h4>
                <p className="text-sm">
                  Maximize your savings with our exclusive bundle offers.
                  Combine multiple services or software solutions and enjoy
                  special discounts, creating a comprehensive solution tailored
                  to your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
