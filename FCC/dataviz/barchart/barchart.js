const w = 600;
const h = 400;

const fetchdata = () => {

    var dataset = fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
    .then(response => response.json())
    .then(d => d.data)
    .then(d => JSON.stringify(d));

    return dataset
}

const dataset = fetchdata();
console.log(dataset);

const svg = d3.select('#chart')
                .append('svg')
                .attr("width", w)
                .attr("height", h)

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => h - 3 * d)
    .attr("width", 25)
    .attr("height", (d, i) => d * 3)
    .attr("fill", "#f0f")