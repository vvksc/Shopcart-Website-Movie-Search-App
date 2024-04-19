export function adddata(product){
    console.log(product);
    
    return{
        type:'ADDDATA',
        payload:product
    }
}
