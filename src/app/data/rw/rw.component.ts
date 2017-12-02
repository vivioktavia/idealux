import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {RwService} from '../../services/rw.service';

@Component({
    templateUrl: 'rw.component.html',
    providers: [RwService]
})

export class RwComponent implements OnInit{
    rw_form: FormGroup;
    rws = [];
    columns = [
      { prop: 'id', name: 'Id' },
      { prop: 'rwNo', name: 'RW No' },
      { prop: 'rwDescs', name: 'Keterangan' }
    ];

    constructor(
        private rwService : RwService,
        formBuilder: FormBuilder,
    ) {
        this.rw_form = formBuilder.group({
            rwNo: ["", Validators.required],
            rwDescs: ["", Validators.required]
        });
    }

    ngOnInit() {
      console.log("masuk")
      this.rwService.readRw().subscribe(data => {
        this.rws = data;
        console.log(data["_body"]);
      });
    }


    // readRw(){
    //     // this.rwService.readRw()
    //     // .then(rws => {
    //     //     console.log(rws)
    //     // })
    // }

    // addRw(){
    //     this.rwService.addRw(this.rw_form.value).subscribe(
    //              rw => {
    //                 console.log(rw);
    //              },
    //              error => console.log(error)
    //          );
    // }

}


