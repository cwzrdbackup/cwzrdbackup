import { Component, OnInit } from '@angular/core';
import { EChartOption, graphic } from 'echarts';

@Component({
  selector: 'app-ochart6',
  templateUrl: './ochart6.component.html',
  styleUrls: ['./ochart6.component.scss']
})
export class ochart6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chartOption: EChartOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        axis: "x",
        type: "line",
      },
      padding: 16,
      formatter: (p: any) => {
        return p[0].name + " : " + "$" + p[0].value;
      }
    },
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisPointer: {
        show: true,
        lineStyle: {
          color: "#007bff",
          type: "dashed"
        },
        label: {
          show: false
        }
      },
      data: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8'],
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      data: [70, 85, 68, 86, 75, 44, 36, 60],
      type: 'line',
      symbolSize: 9,
      itemStyle: {
        shadowColor: "transparent",
        shadowBlur: 0
      },
      emphasis: {
        itemStyle: {
          color: '#20c997',
          borderColor: "#007bff",
          borderWidth: 3,
          opacity: 0.6,
        }
      },
      lineStyle: {
        shadowColor: "#00fb5d",
        shadowBlur: 0
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0.5,
            color: 'transparent'
          }, {
            offset: 1,
            color: 'transparent'
          }
        ])
      }
    }],
    color: ["#007bff"]
  };
}