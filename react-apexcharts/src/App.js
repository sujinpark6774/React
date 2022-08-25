import React from 'react';
import ApexCharts from 'react-apexcharts';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 데이터
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
      {
        name: "Data2",
        data: [1, 4, 15, 41, 69, 32, 39, 31, 48]
      }],

      // ApexCharts 옵션
      options: {  
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <ApexCharts
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={500}
          height={300}
        ></ApexCharts>
      </div>
    );
  }
}

export default App;
