import React, { useEffect, useState } from "react";
import axios from "axios";
import { HorizontalBar } from "@reactchartjs/react-chart.js";

const Result = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://6291542a27f4ba1c65caeb73.mockapi.io/vote").then(
      (response) => {
        console.log(response.data);

        setResults(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const totalVotesA = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesB = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

    const totalVotesC = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesD = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

    const totalVotesE = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesF = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

    const totalVotesG = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesH = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

    const totalVotesI = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesJ = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

    const totalVotesK = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesL = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

    const totalVotesM = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesN = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

    const totalVotesO = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesP = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

    const totalVotesQ = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);


  

  const data = {
    labels: ["Jessa Mae", "Andres Edman","Harlie Quin Marc","Lord Emmanuel","Edyr Ryle","Kissy Cyrine",
    "Cathylyn Shaine", "Lucy Mae Tan","Chris Heart","Wena Mae","Ruel Dean","Abby Kate",
    "Ruffa Mae", "John Piolo","Keith","Mark Chezter","Aliza Nicole",],
    datasets: [
      {
        label: "Number of Votes",
        data: [totalVotesA, totalVotesB, totalVotesC, totalVotesD, totalVotesE, totalVotesF, totalVotesG, totalVotesH,
          totalVotesI, totalVotesJ, totalVotesK, totalVotesL, totalVotesM, totalVotesN, totalVotesO, totalVotesP, totalVotesQ, 100],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", 
                         "rgba(255, 99, 132, 0.2)",
                         ],
        borderColor: ["rgba(54, 162, 235, 1)", 
                         "rgba(255, 99, 132, 1)",],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
     <h2> SOURCE ELECTION 2022</h2>
      <HorizontalBar data={data} options={options} />
    </>
  );
};

export default Result;
