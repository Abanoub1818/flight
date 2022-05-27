import { Flight } from './../../model/data';
import { HttpService } from 'src/app/services/http.service';
import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  tickets!: Array<Flight>;

  constructor(public router: Router,
    private route:ActivatedRoute,
    private http :HttpService


    ) { }
    sub :Subscription=new Subscription();


  ngOnInit(): void {
    let x=this.http.getReserved();
    this.tickets=Array.from(x);
    this.tickets.shift();


  }


}
