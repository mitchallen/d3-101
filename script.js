const familyData = {
    name: "Grandparent",
    children: [
      {
        name: "Parent 1",
        children: [
          { name: "Child 1" },
          { name: "Child 2" }
        ]
      },
      {
        name: "Parent 2",
        children: [
          { name: "Child 3" },
          { name: "Child 4" }
        ]
      }
    ]
  };

  // Set the dimensions and margins of the diagram
const margin = { top: 20, right: 120, bottom: 20, left: 120 },
width = 960 - margin.right - margin.left,
height = 800 - margin.top - margin.bottom;

// Append the svg object to the body of the page
const svg = d3.select("#tree-container")
.append("svg")
.attr("width", width + margin.right + margin.left)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const root = d3.hierarchy(familyData);

// Tree layout
const treeLayout = d3.tree().size([height, width]);

treeLayout(root);

// Nodes
const nodes = svg.selectAll(".node")
.data(root.descendants())
.enter().append("g")
.attr("class", "node")
.attr("transform", d => "translate(" + d.y + "," + d.x + ")");

nodes.append("circle")
.attr("r", 10)
.style("fill", "#fff")
.style("stroke", "steelblue")
.style("stroke-width", "3px");

nodes.append("text")
.attr("dy", ".35em")
.attr("x", d => d.children ? -13 : 13)
.style("text-anchor", d => d.children ? "end" : "start")
.text(d => d.data.name);

// Links
svg.selectAll(".link")
.data(root.links())
.enter().append("path")
.attr("class", "link")
.attr("fill", "none")
.attr("stroke", "#ccc")
.attr("stroke-width", "2px")
.attr("d", d3.linkHorizontal()
  .x(d => d.y)
  .y(d => d.x));
