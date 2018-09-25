import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}

  createProduct(prod) {
    return this._http.post('/products', prod);
  }

  allProducts(){
    return this._http.get('/products');
  }

  oneProduct(id) {
    return this._http.get(`/products/${id}`)
  }

  editProduct(product){
    return this._http.put(`edit/${product._id}`, product)
  }

  deleteProduct(product){
    return this._http.delete(`/delete/${product}`, product)
  }

}



