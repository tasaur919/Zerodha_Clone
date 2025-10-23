import React from "react";

function Summary() {
  return (
    <div className="containner mt-5 px-10">
      <div className="row ">
        <div className="">
          <h6 className="text-2xl font-semibold mb-4">Hi, User!</h6>
          <hr className="divider w-full text-zinc-300" />
        </div>

        <div className="section mt-14">
          <span>
            <p className="mb-14">Equity</p>
          </span>
          <div className="data flex flex-row gap-20 ">
            <div className="first">
              <h3 className="text-3xl mb-3">3.74k</h3>
              <p className="text-zinc-500">Margin available</p>
            </div>
            <div className="verticle_line w-[1px] h-20 bg-zinc-300 mb-8"> </div>
            <div className="second flex flex-col text-zinc-500 ">
              <p>
                Margins used <span>0</span>{" "}
              </p>
              <p>
                Opening balance <span>3.74k</span>{" "}
              </p>
            </div>
          </div>
          <hr  className="w-full text-zinc-300"/>
        </div>
        <div className="section">
        <span>
          <p className="my-10">Holdings (13)</p>
        </span>

        <div className="data flex flex-row gap-16">
          <div className="first  mb-8">
            <h3 className="profit text-3xl text-green-500">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p className=" text-zinc-500 mt-1">P&L</p>
          </div>
          <div className="verticle_line w-[2px] h-20 bg-zinc-300 mb-8"> </div>

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="w-full text-zinc-300" />
      </div>
      </div>
    </div>
  );
}

export default Summary;
