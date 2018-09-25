import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private _httpService: HttpService, private _route: ActivatedRoute) {}

  products = [];

  ngOnInit() {

    var tempObservalbe = this._httpService.allProducts();
    tempObservalbe.subscribe((data:any) => {
      console.log("got all of the products", data);
      this.products = data;
    })
    
  }
  
  onDelete(product){
    console.log('deleting', product);
    var tempObservable = this._httpService.deleteProduct(product);
    tempObservable.subscribe((data:any)=>{
      console.log("did i delte?", data);
    })
  }

}
