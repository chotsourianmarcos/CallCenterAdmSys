import { Component, OnInit } from '@angular/core';
import { ClientItem } from 'src/app/Entities/PersonItems/ClientItem';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clientsList : ClientItem[];

}
