import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private http: Http) {}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  title = 'AccountBook';
  name = '';
  price = 0;
  date = new Date();
  content = '';
  datas: Data[] = [];
  type: string[] = ['美食', '衣物', '住家', '交通', '其他'];
  option = '';
  accountObj: object = [];
  fetchData = function() {
    this.http
      .get('http://localhost:3000/accountBook')
      .subscribe((res: Response) => {
        this.datas = res.json();
      });
  };

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
    this.accountObj = {
      name: data.name,
      price: data.price,
      content: data.content,
      date: data.date,
      option: data.option,
    };
    this.http
    .post('http://localhost:3000/accountBook/', this.accountObj)
    .subscribe((res: Response) => {

    });

   }

  remove(index: number , id:number): void {
    this.datas.splice(index, 1);
    const url = `${'http://localhost:3000/accountBook'}/${id}`;
    this.http
    .delete(url, { headers: this.headers })
    .toPromise()
    .then(() => {
      this.fetchData();
    });
  }

  ngOnInit() {
    this.fetchData();
  }
}
