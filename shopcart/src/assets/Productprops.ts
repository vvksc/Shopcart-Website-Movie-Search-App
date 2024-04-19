interface ProductProps{
    splice(arg0: any, arg1: number): unknown;
    indexOf(props: ProductProps): any;
    brand : string;
    category : string;
    description : string;
    discountPercentage : number;
    id : number;
    images:string[];
    price : number;
    rating:number;
    stock : number;
    thumbnail:string;
    title:string;
    
}
 
export default ProductProps;