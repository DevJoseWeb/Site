import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ContactForm} from '../models/contactForm';
import {SendEmailService} from '../services/send-email.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MatSnackBar} from '@angular/material';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  
})
export class ContactComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  ContactModel = new ContactForm();
  private emailResponse;
  private truefalse:boolean = false;
  


  constructor(private sendServices: SendEmailService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  getErrorMessage() {
      return this.email.hasError('required') ? 'Ingrese un correo electronico' :
          this.email.hasError('email') ? 'Correo invalido' :
              '';
    }

onSubmit(f: NgForm){
    this.getSentServices(this.ContactModel, f);
}
getSentServices(body:ContactForm, f: NgForm){
    this.sendServices.getResponseEmail(body).subscribe(
        data => {
            if(data){
                this.snackBar.open("Gracias por el mensaje", "Correcto", {
                    duration: 2000,
                  });
                  f.reset();
            }
            else{
                this.snackBar.open(":(", "Error", {
                    duration: 2000,
                  });
                  
            }
            
        },
        err => { this.snackBar.open("Algo fallo :/, correo: cesar@unprogramador.com", "ups", {
            duration: 5000,
          }); }
      );
  
}

}
