import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  contactForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      fullname: new FormControl('',  [Validators.required]),
      email: new FormControl('',  [Validators.required]),
      phoneNumber: new FormControl(0,  [Validators.required]),
    });
  }

  onSendData(data: any) {
    alert('nombre: '+data.fullname +' correo: '+ data.email + ' celular: ' +data.phoneNumber);
  }

}
