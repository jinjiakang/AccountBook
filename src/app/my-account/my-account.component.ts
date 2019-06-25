import { Component, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  title = 'AccountBook';
  name = '';
  price = 0;
  date = new Date();
  content = '';
  datas: Data[] = [];
  type: string[] = ['美食', '衣物', '住家', '交通', '其他'];
  option = '';

  addData() {
    if (this.name === '' || this.option === '') {
      return null;
    }
    console.log(this.option);
     // 用名稱跟內容產生一個留言的資料物件
    const data = new Data(this.name, this.price , this.content, this.date , this.option);
     // 將留言的資料物件放進容器裡
    this.datas.push(data);
     // 清空內容
    this.name = '';
    this.price = 0;
    this.content = '';
    this.date = new Date();
    this.option = '';
   }

  remove(index: number): void {
    this.datas.splice(index, 1);
  }

}
