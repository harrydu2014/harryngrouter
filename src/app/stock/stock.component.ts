import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stock: Stock

  private isProd: boolean

  private focus: boolean = false

  constructor(private routeInfo: ActivatedRoute) { }

  isFocus() {
    return this.focus
  }

  ngOnInit() {
    // this.stockId = this.routeInfo.snapshot.queryParams["id"];
    // this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"])
    // this.stockId = this.routeInfo.snapshot.params["id"];
    this.routeInfo.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock;
    })
    this.isProd =  this.routeInfo.snapshot.data[0]["isProd"]
  }

}
 export class Stock {
   constructor(public id:number, public name:string) {

   }
 }