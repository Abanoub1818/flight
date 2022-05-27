import { Flight } from './../../model/data';
import { HttpService } from './../../services/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  loading: boolean=true;
  displayDial:boolean=false;
  formFilter: FormGroup = new FormGroup({

  });
  constructor(private route: ActivatedRoute,private http:HttpService,public router: Router,
    private confirmationService: ConfirmationService,  private fb: FormBuilder,

    private messageService: MessageService,) { }
  sub :Subscription=new Subscription();
  filterFlights: Array<Flight> = [];
  ngOnInit(): void {
    this.formFilter = this.fb.group({
      name:[null,[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      phone:[null,[Validators.required,Validators.pattern("[0-9 ]{12}")]],
      email: ['',[Validators.required,Validators.email]],
      credit: ['',[Validators.required,Validators.pattern("[0-9 ]{16}")]],
  });
    this.http.getFlights().subscribe(
      (flights=>{

        console.log('flights :>> ', flights.length);
        this.loading=false
        flights.map((item: any)=>{
          this.filterFlights.push({
            countryFrom:item.departure.country,
            countryTo:item.arrival.country,
            arrTime:item.arrival.estimated,
            depTime:item.departure.estimated,
            flightNumber:item.flight.number,
            airport:item.departure.airport,
            flightDate:item.flight_date
          });


        this.sub = this.route
        .paramMap
        .subscribe(Item =>
          {

            let x=Item.get('countryFrom');
            let y = Item.get('countryTo');
            console.log('y', y)
            if(x&&y){

              this.filterFlights=this.filterFlights.filter(ele=>ele.countryFrom==x&&ele.countryTo==y)
              console.log('this.fil', this.filterFlights)
            }


            this.filterFlights.forEach((flight,i)=>{
              if(Item.get('class')=='Economy'){
                flight.class='Economy';
              }
              else if(Item.get('class')=='Business'){
                flight.class='Business';
              }
            })


          }
        );})
    })
    )

}
showDial(user: any){
  this.displayDial=true;
  this.http.pushticket(user)

}
blockedUi: boolean = false;

confirmAdd() {
  if(this.formFilter.valid){

    this.displayDial=false;

    this.blockedUi = true;
    this.messageService.add({
      life: 4000,
      severity: 'success',
      summary: 'Confirmed',
      detail: 'Your ticket is booked successfully',
  });
  }
}
reset(){


  this.formFilter.reset();
  this.displayDial=false;
}
}
