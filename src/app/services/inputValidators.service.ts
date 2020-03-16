import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

numberOnly($event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test($event.key)) {
        // invalid character,prevent input
        $event.preventDefault();
        }
    }

textOnly($event: any) {
    const pattern = /^[a-zA-Z\s]*$/;
    if (!pattern.test($event.key)) {
        // invalid character,prevent input
        $event.preventDefault();
         }
     }
 }