export class Invoice {
    constructor( 
        public id?: number,
        public trxTypeCode?: string,
        public lotNo?: string,
        public unallocated?: number,
        public aging?: number,
        public docNo?: string,
        public trxDate?: string,
        public docDate?: string,
        public descs?: string,
        public docAmt?: string,
        public refNo?: string,
        public lot?: number,
        public trxType?:number,
    ){}
    
}