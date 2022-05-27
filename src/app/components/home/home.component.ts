import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Countries } from 'src/app/model/data';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
submitted:boolean=false;
  minDate=new Date();
  formFilter: FormGroup = new FormGroup({

  });
  blockedUi: boolean = false;
constructor(public route: Router,
  private confirmationService: ConfirmationService,
  private http:HttpService,
  private messageService: MessageService,
  private fb: FormBuilder,

  ) { }
  from!: Date;
  to!: Date;
  countriesList=Countries;
ngOnInit(): void {
  /* this.http.getFlights("").subscribe(
    (flights=>this.countriesList=flights)
  ) */
  this.minDate=new Date();
  this.formFilter = this.fb.group({
    countryFrom:[null,[Validators.required]],
    countryTo:[null,[Validators.required]],
    dateFrom: ['',this.dateRangeValidator],
    dateTo: ['',this.dateRangeValidator],
    class:[Boolean]
});
}

confirmAdd() {
  this.submitted=true
  if(this.formFilter.valid){

    this.blockedUi = true;

    this.messageService.add({
      life: 4000,
      severity: 'success',
      summary: 'Confirmed',
      detail: 'Your work has been saved',
  });
  console.log('this.formFilter.value :>> ', this.formFilter.value);
  this.route.navigate(['/result',this.formFilter.value]);

  this.reset();
  }
}
 //date validation
 private dateRangeValidator: ValidatorFn = (): {
  [key: string]: any;
} | null => {
  let invalid = false;
  const from = this.formFilter && this.formFilter.get("dateFrom")?.value;
  const to = this.formFilter && this.formFilter.get("dateTo")?.value;
  if (from && to) {
    invalid = new Date(from).valueOf() > new Date(to).valueOf();
  }
  return invalid ? { invalidRange: { from, to } } : null;
};
onCountrySelected($event: Country) {
  console.log($event);
}
reset(){

  this.formFilter.reset();
}

}
