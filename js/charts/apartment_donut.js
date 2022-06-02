const chartArea_aptDonut = document.getElementById("aptDonut");
let chartLoaded_aptDonut = false;
let chartPosition_aptDonut = 0;

function loadChart_aptDonut() {
  const labelsDonut = ["2-bedrooms", "3-bedrooms", "4-bedrooms"];

  const dataDonut = {
    labels: labelsDonut,
    datasets: [
      {
        label: "apartment dataset",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        data: [3, 58, 7],
      },
    ],
  };

  const configDonut = {
    type: "doughnut",
    data: dataDonut,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "The Quantity of Each Room Type",
          font: {
            size: 22,
          },
          padding: 18,
          align: "center",
        },
        // legend: {
        //   display: false,
        // },
      },
    },
  };

  var myDoughnutChart = new Chart(
    document.getElementById("aptDonut"),
    configDonut
  );
}

window.addEventListener("scroll", function (e) {
  chartPosition_aptDonut = chartArea_aptDonut.getBoundingClientRect().y;
  if (
    !chartLoaded_aptDonut &&
    chartPosition_aptDonut < 500 &&
    chartPosition_aptDonut > 0
  ) {
    loadChart_aptDonut();
    chartLoaded_aptDonut = true;
    console.log("aptDonut created!");
  }
});
