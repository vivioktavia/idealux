import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {RwService} from './rw.service';

@Component({
    templateUrl: 'rw.component.html',
    providers: [RwService]
})

export class RwComponent {
    url: string = 'https://young-eyrie-51496.herokuapp.com'
    rw_form: FormGroup;
    constructor(
        private rwService : RwService,
        formBuilder: FormBuilder,
    ) {
        this.rw_form = formBuilder.group({
            name: ["", Validators.required]
        });
    }

    addRw(){
        this.rwService.addRw(this.rw_form.value).subscribe(
                 rw => {
                    // show an alert to tell the user if product was created or not
                    console.log(rw);
 
                    // go back to list of products
//                    this.readGroup();
                 },
                 error => console.log(error)
             );
    }

}


