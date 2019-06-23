import { Component } from '@angular/core';
import { Data } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AccountBook';

  name = '';
  price = 0;
  date = new Date();
  content = '';

  datas: Data[] = [];

  addData() {

    if (this.name === '') {
      return null;
    }
     // 用名稱跟內容產生一個留言的資料物件
    const data = new Data(this.name, this.price , this.content, this.date);
     // 將留言的資料物件放進容器裡
    this.datas.push(data);
     // 清空內容
    this.name = '';
    this.price = 0;
    this.content = '';
    this.date = new Date();
   }

  remove(index: number): void {
    this.datas.splice(index, 1);
  }

}


