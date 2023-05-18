import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CriptoAppServiceService {
  REST_API:string="http://localhost:8000/api"
httpHeaders=new HttpHeaders().set('Content-Type','application/json');


  constructor(private Http_clint:HttpClient) { }

  createNewUser(data:any):Observable<any>{
    let API_URL=`${this.REST_API}/add-cryptoUsers`;
    return this.Http_clint.post(API_URL,data).pipe(catchError(this.handleError))
  }

  GetAllUers(){
    return this.Http_clint.get(`${this.REST_API}`);
  }

getUser(data:any):Observable<any>{
  let API_URL=`${this.REST_API}/get-cryptoUsers`;
  return this.Http_clint.post(API_URL,data).pipe(map((res:any)=>{
    return res || {}
  }),
  catchError(this.handleError))
}

UpdateUser(id:any,data: any):Observable<any>{
  let API_URL=`${this.REST_API}/update-cryptoUsers/${id}`;
  return this.Http_clint.put(API_URL,data,{headers:this.httpHeaders}).pipe(
  catchError(this.handleError)
  )
}

Deleteuser(id:any):Observable<any>{
  let API_URL=`${this.REST_API}/delete-cryptoUsers/${id}`;
  return this.Http_clint.delete(API_URL,{headers:this.httpHeaders}).pipe(
  catchError(this.handleError)
  )
}
handleError(error: HttpErrorResponse){
  let errormsg='';
  if(error.error instanceof ErrorEvent){
    errormsg=error.error.message;
  }else{
    errormsg=`Error code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errormsg);
  return throwError(errormsg);
}
}
