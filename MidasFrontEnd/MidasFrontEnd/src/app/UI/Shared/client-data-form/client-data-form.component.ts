import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-client-data-form',
  templateUrl: './client-data-form.component.html',
  styleUrls: ['./client-data-form.component.scss']
})
export class ClientDataFormComponent implements OnInit {

  constructor(private rootFormGroup: FormGroupDirective) { }
  form : FormGroup;
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

}
