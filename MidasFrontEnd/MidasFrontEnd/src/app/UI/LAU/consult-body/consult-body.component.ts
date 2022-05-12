import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ClientItem } from '../../../Entities/PersonItems/ClientItem';
import { ClientsAPIService } from '../../../APIServices/ClientsAPI/clients-api.service';
import { ClientSearchParams } from '../../../LogicEntities/ClientsLogic/ClientSearchParams';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ClientsListComponent } from '../../Shared/clients-list/clients-list.component';

@Component({
  selector: 'app-consult-body',
  templateUrl: './consult-body.component.html',
  styleUrls: ['./consult-body.component.scss']
})
export class ConsultBodyComponent implements OnInit {

  constructor(public clientsAPI : ClientsAPIService, public fb : FormBuilder) { }
  
  ngOnInit(): void {

  }

  @ViewChild(ClientsListComponent, {static:true}) childClientsList: ClientsListComponent;
 
  searchParams : ClientSearchParams;

  searchForm = new FormGroup({
    ClientID : new FormControl(),
    DNI : new FormControl(),
    SurNames : new FormControl(),
    FirstNames : new FormControl(),
    BirthDateFrom : new FormControl(),
    BirthDateTo : new FormControl(),
    FinancialBalanceFrom : new FormControl(),
    FinancialBalanceTo : new FormControl(),
    Active : new FormControl()
  });
  
  onSubmitSearchParams() {
    this.searchParams = this.searchForm.value;
    if(!this.searchParams.ClientID && !this.searchParams.DNI && !this.searchParams.SurNames
      && !this.searchParams.FirstNames && !this.searchParams.BirthDateFrom && !this.searchParams.BirthDateTo
      && !this.searchParams.FinancialBalanceFrom && !this.searchParams.FinancialBalanceTo && !this.searchParams.Active){
        this.clientsAPI.readClients()
        .subscribe(
          data => {
            this.childClientsList.clientsList = data;
          }
        );
    }else{
      this.clientsAPI.readClientsByParameters(this.searchParams)
      .subscribe(
        data => {
          this.childClientsList.clientsList = data;
        }
      );
    }
  }

  consultDetail(){
    
  }
}
