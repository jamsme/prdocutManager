import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router,private _httpService: HttpService) {}

  editProduct = {name: '', price: '', imageUrl: ''};
  errors = [];

  ngOnInit() {
     
    console.log("am i getting specific product?")
    this._route.params.subscribe((params)=>{
      console.log('the id is:', params.id);
      var id = params.id;
      var tempObservable = this._httpService.oneProduct(id);
      tempObservable.subscribe((data:any)=>{
        this.editProduct = data;
      })
    })

  }

  submitEditProduct(){
    this.errors = [];
    var tempObservable = this._httpService.editProduct(this.editProduct);
    tempObservable.subscribe((data:any) => {
      if (data.errors) {
        console.log('got f**ing errors', data.errors);
        for (var key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      } else {
        console.log("edited product success!!!")
        this.editProduct = data;
        this._router.navigate(['/list']);
      }
    })
  };

  onEditDelete(editProduct: any){
    console.log("got the id from edit page", editProduct._id)
    var tempObservable = this._httpService.deleteProduct(editProduct._id);
    tempObservable.subscribe((data:any)=>{
      console.log("did i delte?", data);
      this._router.navigate(['/list']);
    })
  }

}
