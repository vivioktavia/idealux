import {KKDetails} from '../models/kk_details';
import {Observable} from 'rxjs/Observable';

export class KK {
    constructor(
        public id?: number,
        public rwNo?: string,
        public rtNo?: string,
        public blockNo?: string,
        public lotNo?: string,
        public kkNo?: string,
        public address?: string,
        public lot?: string,
        public kkDetails? : KKDetails[]
    ) {}

}