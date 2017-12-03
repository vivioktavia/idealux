import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {RTService} from './rt.service';

@Component({
    templateUrl: 'rt.component.html',
    providers: [RTService]
})

export class RTComponent {
    url: string = 'https://young-eyrie-51496.herokuapp.com'
    rt_form: FormGroup;
    constructor(
        private rtService : RTService,
        formBuilder: FormBuilder,
    ) {
        this.rt_form = formBuilder.group({
            name: ["", Validators.required]
        });
    }

    addRT(){
        this.rtService.addRT(this.rt_form.value).subscribe(
                 rt => {
                    // show an alert to tell the user if product was created or not
                    console.log(rt);
 
                    // go back to list of products
//                    this.readGroup();
                 },
                 error => console.log(error)
             );
    }

}


