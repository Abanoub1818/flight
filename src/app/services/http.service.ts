import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Flight } from '../model/data';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private content = new BehaviorSubject <Flight>({});
  public share: Set<Flight>=new Set();
  public countriesWeath:Array<any>=[]
  constructor(private http: HttpClient) {
    this.content.asObservable().subscribe(ele=>{
      this.share.add(ele);
    })
    this.share.delete({});
  }
  private jsonURL = '../../assets/data/flights.json';
  getFlights(param?:any): Observable<any> {
    // console.log('param :>> ', param);
    return this.http.get<any>(this.jsonURL,{params: param});
  }


  pushticket(coun:Flight){
    this.content.next(coun);
  }
  getReserved(){
    return this.share;
  }

}


