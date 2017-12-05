import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {IBaseInterface} from './base.interface';

@Component({
    template: ""
})
export class BaseComponent {

    //constant
    protected NEW_CODE: string = "new";
    protected ACTION_ADD: string = "add";
    protected ACTION_UPDATE: string = "update";
    protected ACTION_LIST: string = "list";
    protected IService: IBaseInterface;

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    sub: any;
    method: string;
    url: string;
    id: string;

    constructor(
        protected router: Router,
        protected route: ActivatedRoute
    ) {}

    init() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            if (!this.id) {
                this.method = this.ACTION_LIST;
            } else if (this.id == this.NEW_CODE) {
                this.method = this.ACTION_ADD;
            } else {
                this.method = this.ACTION_UPDATE;
            }
        })
    }

    callForm(id?) {
        if (id) {
            this.router.navigate(['master/rw', id]);
        } else {
            this.router.navigate(['/master/rw/new']);
        }
    }
    
    save(){
        if (this.method == this.ACTION_ADD){
            this.saveAdd();
        }else if(this.method == this.ACTION_UPDATE){
            this.saveUpdate();
        }
    }

    saveAdd() {
        this.IService.saveAddItem();
    }

    saveUpdate() {
        this.IService.saveUpdateItem(this.id);
    }

    saveDelete() {
        this.IService.saveDeleteItem(this.id);
    }

}
