const chartArea_aptHBar = document.getElementById("aptHBar");
let loaded_aptHBar = false;
let position_aptHBar = 0;

function loadChart_aptHBar() {
  const labelsBar = ["2-bedrooms", "3-bedrooms", "3-bedrooms", "4-bedrooms"];

  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        label: "apartment floor area (m²)",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(0, 191, 255, 0.2)",
          "rgba(0, 80, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(0, 191, 255, 1)",
          "rgba(0, 80, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        data: [100, 135, 150, 170],
      },
    ],
  };

  const configBar = {
    type: "bar",
    data: dataBar,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y", //make the bar horizontal
      scales: {
        x: {
          title: {
            display: true,
            text: "gross floor area (m²)",
            font: {
              size: 15,
            },
            padding: 10,
          },
        },
      },

      plugins: {
        title: {
          display: true,
          text: "Room Types and Floor Area",
          font: {
            size: 22,
          },
          padding: 18,
          align: "center",
        },
        legend: {
          display: false,
        },
      },
    },
  };

  var myHorizontalBarChart = new Chart(
    document.getElementById("aptHBar"),
    configBar
  );
}

window.addEventListener("scroll", function (e) {
  position_aptHBar = chartArea_aptHBar.getBoundingClientRect().y;
  if (!loaded_aptHBar && position_aptHBar < 500 && position_aptHBar > 0) {
    loadChart_aptHBar();
    loaded_aptHBar = true;
    console.log("aptHBar created!");
  }
});
