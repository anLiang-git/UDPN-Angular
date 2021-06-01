import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { nodeListApi } from './http-api';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NodeListService {

  constructor(private http: HttpClient) {}

  add(userRequest: any): Observable<any> {
    const data = {
      code: userRequest.codigo,
      email: userRequest.email,
      password: userRequest.password
    };

    return this.http.post(nodeListApi.add, data)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  list():Observable<any>{
    return this.http.post(nodeListApi.list,{})
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
