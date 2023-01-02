import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactosForm: FormGroup = new FormGroup({});
 constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.contactosForm = this.formBuilder.group({
      nombre:['', Validators.compose([Validators.required, Validators.max(50)])],
      email:['', [Validators.required, Validators.email]],
      asunto:['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      mensaje:['', Validators.compose([Validators.required, Validators.max(200)])]
    })
  }

  get nombre(){
    return this.contactosForm.get('nombre')
  }

  get email(){
    return this.contactosForm.get('email')
  }

  get asunto(){
    return this.contactosForm.get('asunto')
  }

  get mensaje(){
    return this.contactosForm.get('mensaje')
  }
}
