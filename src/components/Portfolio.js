import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "black",
          pointStyleWidth: 15,
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
  };

const Portfolio = () => {
    const [totalVolume, setTotalVolume] = useState("");
    const [data, setData] = useState({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  
    useEffect(() => {
      const fetchData = async () => {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether%2Cethereum%2Cbitcoin&order=market_cap_desc`;
        const labelSet = [];
        const dataSet1 = [];
        await fetch(url)
          .then((data) => {
            // console.log("Api data", data)
            const res = data.json();
            return res;
          })
          .then((res) => {
            // console.log("ressss", res)
            for (const val of res) {
              dataSet1.push(val.market_cap);
              labelSet.push(val.name);
            }
            // console.log("dataset1" ,dataSet1)
            setData({
              labels: labelSet,
              datasets: [
                {
                  label: dataSet1,
                  data: dataSet1,
                  backgroundColor: ["#0077b6", "#ef476f", "#00afb9"],
                  borderColor: ["black"],
                  borderWidth: 0,
                  hoverOffset: 5,
                  hoverBorderWidth: 2,
                },
              ],
            });
            // console.log("arrData", dataSet1)
            setTotalVolume(
              dataSet1.reduce((partialSum, a) => partialSum + a, 0).toFixed(0)
            );
          })
          .catch((e) => {
            // console.log("error", e)
          });
      };
      fetchData();
    }, []);
  
    return (
      <>
        <div className="bg-white  backdrop-blur-md border border-gray-100 rounded-lg shadow-lg">
          <div className="mt-3">
            
            <span className="text-lg text-black font-semibold pt-6 ml-8 text-center sm:text-left">
              Portfolio
            </span>
            <span className="text-black lg:ml-[80px] xl:ml-[120px] text-sm md:ml-[70px] sm:ml-[10px] ml-[50px]">
              Total Value
            </span>
            <span className="text-xs font-semibold text-black">
              
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "usd",
              }).format(totalVolume)}
            </span>
          </div>
  
          <div className="xl:w-[240px] xl:h-[240px] md:w-[240px] md:h-[240px] xl:ml-[100px] md:ml-[100px] w-[250px] h-[150px] ml-[60px] -mt-[15px]">
            <Pie data={data} options={options} />
          </div>
          <div className="mt-7"> </div>
        </div>
      </>
    );
}

export default Portfolio