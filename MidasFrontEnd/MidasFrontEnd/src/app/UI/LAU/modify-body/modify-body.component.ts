import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientItem } from 'src/app/Entities/PersonItems/ClientItem';
import { ConsultBodyComponent } from '../consult-body/consult-body.component';

@Component({
  selector: 'app-modify-body',
  templateUrl: './modify-body.component.html',
  styleUrls: ['./modify-body.component.scss']
})
export class ModifyBodyComponent extends ConsultBodyComponent implements OnInit {

  override ngOnInit(): void {
    this.modifyVisible = false;
  }
  modifyVisible : boolean;
  
  updateForm = new FormGroup({

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
    InsertDate : new FormControl(),

    ClientID : new FormControl(),
    ExcelID : new FormControl(),
    FinancialBalance : new FormControl(),
    ActiveServices : new FormControl(),
    Active : new FormControl()
    
  });

  showUpdateClient(input : boolean){
    this.modifyVisible = input;
  }

  updateClient(){
    var updateClientItem : ClientItem = new ClientItem();
    updateClientItem = this.updateForm.value;
    this.clientsAPI.updateClient(updateClientItem);
    this.searchParams.ClientID = updateClientItem.ClientID;
    this.clientsAPI.readClientsByParameters(this.searchParams).subscribe(
      data => {
        this.childClientsList.clientsList = data;
      }
    );
  }

}
