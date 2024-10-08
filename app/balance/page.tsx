import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Balance = () => {
  return (
    <div className="py-3 px-7">
      <h1 className="font-medium text-2xl">Balance</h1>

      <div className="flex gap-5 mb-5">
        <div className="flex-[1] bg-white rounded-md p-5 relative">
          <BsThreeDots className="absolute top-5 right-5" />
          <h2 className="font-medium">Available Balance</h2>
          <div>CHART</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-block h-[10px] w-[10px] bg-green-500 rounded-full"></span>

              <span>Balance</span>
              <span>18%</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-block h-[10px] w-[10px] bg-red-500 rounded-full"></span>
              <span>Balance</span>
              <span>18%</span>
            </div>
          </div>
        </div>

        <div className="flex-[2] bg-white p-5 rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="font-medium ">Balance Activity</h1>
            <select value="Select Month">
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
            </select>
          </div>

          <div className="">CHART</div>
        </div>
      </div>

      <div className="flex gap-5 mb-5">
        <div className="flex-[2] relative bg-white p-5 rounded-md">
          <BsThreeDots className="absolute top-5 right-5" />
          <h1 className="font-medium ">Recent Transaction</h1>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div>ICON</div>
                <div>Load Balance</div>
              </div>

              <div>8 July, 2024</div>
              <button>Now</button>
              <div>$150.0</div>
            </div>
          </div>
        </div>

        <div className="flex-[1] relative bg-white p-5 rounded-md flex flex-col items-center text-center">
          <div>IMAGE</div>
          <h1 className="font-bold text-2xl">Need help?</h1>
          <div>Our customer support team is available 24/7.</div>
          <div>
            For any quaries, please visit our Support Portal or view our FAQ
          </div>
          <button className="p-3 bg-green-400 text-white rounded-md">
            View FAQ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5"></div>
    </div>
  );
};

export default Balance;
