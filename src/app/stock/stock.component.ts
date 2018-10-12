import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stockId: number

  private isProd: boolean

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.stockId = this.routeInfo.snapshot.queryParams["id"];
    this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"])
    // this.stockId = this.routeInfo.snapshot.params["id"];
    this.isProd =  this.routeInfo.snapshot.data[0]["isProd"]
  }

}
