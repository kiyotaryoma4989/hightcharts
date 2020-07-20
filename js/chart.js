$(function () {
    $('#container').highcharts({
      chart: {
        width:900,
        heigth:300
      },
      title: {
        text: '都道府県別の総人口推移',
        x: -20 //center
      },
      subtitle: {
        text: 'subtitle',
        x: -20
      },
      xAxis: {
        categories: ['1980', '1990', '2000', '2010', '2020']
      },
      yAxis: {
        title: {
          text: '総人口数'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: '人'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: '東京',//このあたりを変数にしてAPIのデータを表示すると思う
        data: [500000,600000,700000,600000]
      }, {
        name: '茨城',
        data: [700000,400000,900000,600000]
      }, {
        name: '岩手',
        data: [500000,300000,500000,900000]
      }, {
        name: '香川',
        data: [900000,500000,900000,1000000]
      }]
    });
  });