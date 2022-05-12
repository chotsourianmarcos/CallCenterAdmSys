import { Component, OnInit } from '@angular/core';
import { ClientItem } from 'src/app/Entities/PersonItems/ClientItem';
import { ConsultBodyComponent } from '../consult-body/consult-body.component';

@Component({
  selector: 'app-cease-body',
  templateUrl: './cease-body.component.html',
  styleUrls: ['./cease-body.component.scss']
})
export class CeaseBodyComponent extends ConsultBodyComponent implements OnInit {

  ceaseClient(){
    var clientToCease : ClientItem = new ClientItem();
    clientToCease.ClientID = this.childClientsList.clientsList[0].ClientID;
    clientToCease.Active = false;
    clientToCease.ActiveServices = [];
    this.clientsAPI.updateClient(clientToCease);
    this.searchParams.ClientID = this.childClientsList.clientsList[0].ClientID;
    this.clientsAPI.readClientsByParameters(this.searchParams).subscribe(
      data => {
        this.childClientsList.clientsList = data;
      }
    );
  }

}
