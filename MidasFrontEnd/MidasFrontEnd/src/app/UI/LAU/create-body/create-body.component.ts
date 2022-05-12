import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ClientsAPIService } from 'src/app/APIServices/ClientsAPI/clients-api.service';
import { ClientItem } from 'src/app/Entities/PersonItems/ClientItem';
import { ClientSearchParams } from 'src/app/LogicEntities/ClientsLogic/ClientSearchParams';
import { ConsultBodyComponent } from '../consult-body/consult-body.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-body',
  templateUrl: './create-body.component.html',
  styleUrls: ['./create-body.component.scss'] 
})
export class CreateBodyComponent extends ConsultBodyComponent implements OnInit {

  newClient : ClientItem = new ClientItem;
  addForm : FormGroup;

  override ngOnInit(): void {
    this.addForm = this.fb.group({
      personData: this.fb.group({
        PersonID : new FormControl(),
        DNI : new FormControl(),
        GenderID : new FormControl(),
        FirstNames : new FormControl(),
        SurNames : new FormControl(),
        BirthDate : new FormControl(),
        PhoneNumber : new FormControl(),
        PhoneNumber2 : new FormControl(),
        Email : new FormControl(),
        Email2 : new FormControl(),
        Adress : new FormControl(),
        PreferedContactTypeID : new FormControl(),
        Observations : new FormControl(),
        FilesRoute : new FormControl(),
        InsertDate : new FormControl()
      }),
        clientData: this.fb.group({
        ClientID : new FormControl(),
        ExcelID : new FormControl(),
        FinancialBalance : new FormControl(),
        ActiveServices : new FormControl(),
        Active : new FormControl()
      })
    })
  }

  async onSubmitAdd() {
    var clientToExtend = this.addForm.value.personData;
    var clientData = this.addForm.value.clientData;
    $.extend(clientToExtend, clientData);
    clientToExtend.PersonID = 0;
    clientToExtend.ClientID = 0;
    clientToExtend.InsertDate = new Date()
    if(clientToExtend.Active == null){
      clientToExtend.Active = false;
    }
    await this.clientsAPI.addClient(clientToExtend);
    this.searchParams = new ClientSearchParams;
    this.searchParams.ClientID = clientToExtend.ClientID;
    this.clientsAPI.readClientsByParameters(this.searchParams).subscribe(
      data => {
        this.childClientsList.clientsList = data;
      }
    );
  }

}

