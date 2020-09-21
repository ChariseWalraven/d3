d3.select("#new-note").on("submit", () => {
  // access the event object
  d3.event.preventDefault();

  const input = d3.select("input");
  d3.select("#notes")
    .append("p")
      .classed("note", true)
      .text(input.property('value'))
      input.property("value", "")
})