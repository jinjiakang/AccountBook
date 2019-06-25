import { Component, OnInit } from '@angular/core';
import * as jsondata from '../../../db.json';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
    data = jsondata.default.accountBook;
    size = this.data.length;
    eat = 0;
    cloth = 0;
    home = 0;
    traffic = 0;
    other = 0;
    range: string[] = ['本日', '七日內', '三十日內', 'All'];
    option = '';
    // Pie
    public pieChartLabels: string[] = ['美食', '衣物', '住家', '交通', '其他'];
    public pieChartData: number[] = [this.eat, this.cloth, this.home , this.traffic, this.other];
    public pieChartType = 'pie';

    // events
    public chartClicked(e: any): void {
    }

    public chartHovered(e: any): void {
    }
    counting() {
      for (let i = 0; i < this.size ; i++) {
        const option =  this.data[i].option;
        const plus = Number(this.data[i].price);
        if (option === '美食') {
          this.eat = this.eat + plus;
        } else if (option === '衣物') {
          this.cloth = this.cloth + plus;
        } else if (option === '住家') {
          this.home = this.home + plus;
        } else if (option === '交通') {
          this.traffic = this.traffic + plus;
        } else if (option === '其他') {
          this.other = this.other + plus;
        }
      }
      this.pieChartData = [this.eat, this.cloth, this.home , this.traffic, this.other];

    }
  constructor() { }

  ngOnInit() {
      this.counting();
  }

}
