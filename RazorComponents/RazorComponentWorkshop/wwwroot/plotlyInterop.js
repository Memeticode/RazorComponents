function renderPlotlyChart(elementId, dataJson, layoutJson) {
    var data = JSON.parse(dataJson);
    var layout = JSON.parse(layoutJson);
    Plotly.newPlot(elementId, data, layout);
}