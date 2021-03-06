import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 


am4core.useTheme(am4themes_animated);

function ForceDirectedTree (props) {
  // const chart = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create("forcechartdiv", am4plugins_forceDirected.ForceDirectedTree);

    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    // series.labels.template.fill = am4core.color("#9F6BA0");
    series.colors = new am4core.ColorSet();
    series.colors.passOptions = {};

    series.data = [{
      "name": "First",
      "children": [{
        "name": "A1", "value": 100
      }, {
        "name": "A2", "value": 60
      }, {
        "name": "A3", "value": 30
      }]
    }, {
      "name": "Second",
      "children": [{
        "name": "B1", "value": 135
      }, {
        "name": "B2", "value": 98
      }, {
        "name": "B3", "value": 56
      }]
    }, {
      "name": "Third",
      "children": [{
        "name": "C1", "value": 335
      }, {
        "name": "C2", "value": 148
      }, {
        "name": "C3", "value": 126
      }, {
        "name": "C4", "value": 26
      }]
    }, {
      "name": "Fourth",
      "children": [{
        "name": "D1", "value": 415
      }, {
        "name": "D2", "value": 148
      }, {
        "name": "D3", "value": 89
      }, {
        "name": "D4", "value": 64
      }, {
        "name": "D5", "value": 16
      }]
    }, {
      "name": "Fifth",
      "children": [{
        "name": "E1", "value": 687
      }, {
        "name": "E2", "value": 148
      }]
    }];

    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";

    // Add labels
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = 15;
    series.maxRadius = 40;

    series.centerStrength = 0.5;

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="forcechartdiv" style={{ width: "100%", height: "500px" }}></div>;
}

export default ForceDirectedTree;