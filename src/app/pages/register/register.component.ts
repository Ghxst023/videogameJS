import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/services/inputValidators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
     // Variables

    // Titles
    personalInfo = 'Personal information';
    address = 'Address';
    console = 'Console information';

    // Form
    myForm: FormGroup;

  constructor( private fB: FormBuilder, public validators: ValidatorService) { }

  ngOnInit() {

    // Validators
    this.myForm = this.fB.group({
        name: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        // gender: '',
        email: ['', Validators.required],
        phoneContact: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        streetLine1: ['', Validators.required],
        departmentNumber: ['', Validators.required],
        fabricant: ['', Validators.required],
        favoriteConsole: ['', Validators.required],
        favoriteVideogame: ['', Validators.required],
        agree: [false, [
            Validators.requiredTrue
        ]]
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

    // Function for hide and show with toggle
    isShow = true;
 
    toggleDisplay() {
      this.isShow = !this.isShow;
    };

    // Submit and print the form
    onSubmit(){
        console.log(this.myForm)
    }
}
