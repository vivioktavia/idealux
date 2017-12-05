import {RT} from './rt';
import {Block} from './block'
export class Lot {
    constructor(    
        public id: number,
        public lotNo : string,
        public descs : string,
        public landArea : number,
        public buildArea : number,
        public rt : RT,
        public block : Block
    ){}
    
}