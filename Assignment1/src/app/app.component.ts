import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data : any;
  mainData : any;
  arr : any;
  constructor(private http:HttpClient){
    this.data = [];
    this.mainData = [];
    this.arr = [];
  }

  ngOnInit():void{
    debugger;
    this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo").subscribe((response:any)=>{
    debugger;
    this.mainData = response['Time Series (5min)'];
    console.log(this.mainData);
    this.data =Object.keys(response['Time Series (5min)'] as {}).map(o => response['Time Series (5min)'][o]).map(e => { return {open:e['1. open'],high:e['2. high'],low:e['3. low'],close:e['4. close'],volume:e['5. volume']}; })
    })
    //this.arr.push(this.mainData, this.data);
  }
}
