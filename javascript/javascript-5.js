const items = document.querySelectorAll('.pagesec')
const options = {
  threshold: 0.1
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options)
items.forEach(item => {
  observer.observe(item);
})
  function d3arry () {
  console.log("Learning D3 Section")
    let d3arrys = localStorage.getItem("storedarryz").split(',');
    var width = 600, height = 500;

    console.log(typeof d3arrys);
    console.log(d3arrys);

  //  d3.select(".d3_arry")
  //    .selectAll("p")
  //    .data(d3arrys)
  //    .join("p")
  //    .attr("class", "d3_arry")
  //    .text((d) => d)

   const barChartData = d3arrys
   
   var scale = d3.scaleLinear()
    .domain([d3.min(barChartData), d3.max(barChartData)])
    .range([height, 0]);

   const barChartSVG = d3
     .select("#bar-chart")
     .append("svg")
     .attr("width", width)
     .attr("height", height)

   barChartSVG.selectAll("rect")
     .data(barChartData)
     .enter()
     .append("rect")
     .attr("x", function(d, i) {
           return i * 45
     })
     .attr("y", function(d) {
           return 400 - d
     })
      .attr("width", 40)
      .attr("height", function(d) {
            return d
      })
     .attr("fill", "red")
     .attr("transform", "translate(50, 95)")

    var y_axis = d3.axisLeft()
      .scale(scale);

    barChartSVG.append("g")
      .attr("transform", "translate(50, 5)")
      .call(y_axis);
  };
function arryvalidation() {
    let x = document.getElementById("textarry").value;
    let text;
    let i;
    let arryz;
    
    arryz = x.split(',');
    arryz = arryz.sort(function(a, b) {
        return a - b;
      });
        if (arryz.length > 10) {
            alert("You've entered to many numbers. Please enter 10 random numbers separated by commas into the input field.");
            return;
        } else if (arryz.length <= 9) {
            alert("You haven't entered enough numbers. Please enter 10 random numbers separated by commas into the input field.");
            return;
        };
        for (i of arryz){
            i = Number(i);
              if (isNaN(i)){
                alert("One of your values is not a number. Enter 10 random numbers separated by commas into the input field.");
                return;
              } else {
                text += "\n" + i;
              };
        };
        localStorage.setItem("storedarryz", arryz);
        text = localStorage.getItem("storedarryz")
        document.getElementById("output-arry").innerHTML = text;
        d3arry();
    }