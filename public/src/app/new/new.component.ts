import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  constructor(private _httpService: HttpService, private _router: Router) {}

  newProduct = {name : '', price: '', imageUrl: ''};
  errors = [];

  ngOnInit() {

  }

  submitProduct() {
    this.errors = [];
    var tempObservable = this._httpService.createProduct(this.newProduct);
    tempObservable.subscribe((data:any) => {
      console.log(data);
      if (data.errors) {
        console.log('got f**ing errors', data.errors);
        for (var key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      } else {
        this.newProduct = data;
        this._router.navigate(['/list']);
      }
    })
  }

}
