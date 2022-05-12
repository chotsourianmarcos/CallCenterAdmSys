import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-person-data-form',
  templateUrl: './person-data-form.component.html',
  styleUrls: ['./person-data-form.component.scss']
})
export class PersonDataFormComponent implements OnInit {

  constructor(private rootFormGroup: FormGroupDirective) { }
  form : FormGroup;
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

}
