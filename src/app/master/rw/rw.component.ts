import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {GroupService} from './group.service';

@Component({
    templateUrl: 'group.component.html',
    providers: [GroupService]
})

export class GroupComponent {
    url: string = 'https://young-eyrie-51496.herokuapp.com'
    group_form: FormGroup;
    constructor(
        private groupService : GroupService,
        formBuilder: FormBuilder,
    ) {
        this.group_form = formBuilder.group({
            name: ["", Validators.required]
        });
    }

    addGroup(){
        this.groupService.addGroup(this.group_form.value).subscribe(
                 group => {
                    // show an alert to tell the user if product was created or not
                    console.log(group);
 
                    // go back to list of products
//                    this.readGroup();
                 },
                 error => console.log(error)
             );
    }

}


