import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

//Coins component has CoinName, market cap and prices changes

const Coins = () => {
  const { cryptoData, currency } = useContext(CryptoContext);

  return (
    <div className="bg-white backdrop-blur-md border border-gray-100 rounded-lg shadow-lg ">
      <div data-testid="Sidebar-1 ">
        <h3 className="text-black  text-center  mt-5 pb-10 font-semibold">
          Cryptocurrency By Market Cap
        </h3>
      </div>

      {/* Coin list */}

      <div className="overflow-x-auto max-h-screen no-scrollbar ">
        {cryptoData ? (
          <table className="w-full  table-auto  ">
            <tbody>
              {cryptoData.map((cryptoData) => {
                return (
                  <div
                    key={cryptoData.id}
                    className="text-center text-lg border-b border-gray-100 hover:bg-gray-200 last:border-b-0"
                  >
                    <div className="flex flex-row pl-4 mt-2 text-[13px] font-semibold text-black">
                      <img
                        src={cryptoData.image}
                        alt="crypto pic"
                        className="h-5 w-5 rounded-full mx-2"
                      />
                      <h6 className="text-lg pb-2 font-medium">
                        {cryptoData.name}
                      </h6>
                    </div>

                    <div className="flex flex-row justify-end mr-2">
                      <div
                        className={`text-[12px] font-semibold ${
                          cryptoData.market_cap_change_percentage_24h > 0
                            ? "text-green-500 "
                            : "text-orange-400 "
                        }`}
                      >
                        <i
                          className={`mr-1 text-xs ${
                            cryptoData.market_cap_change_percentage_24h > 0
                              ? "fa-solid fa-caret-up"
                              : "fa-solid fa-caret-down"
                          }`}
                        ></i>
                        <span>
                          {parseFloat(
                            cryptoData.market_cap_change_percentage_24h
                          ).toFixed(2)}{" "}
                          %
                        </span>
                      </div>
                    </div>

                    <div className="-ml-9">
                      <span className="text-[11px] -mt-8 ml-3  text-gray-400 font-semibold flex pl-8 mx-4 mb-4 truncate">
                        Mkt.Cap{"  "}
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: currency,
                        }).format(cryptoData.market_cap)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default Coins;