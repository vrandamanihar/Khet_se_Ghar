let valueCount=1;
let increment=document.querySelector(".btn-increment");
let decrement=document.querySelector(".btn-increment");
let count=document.querySelector("#quantity");
let totalcount=document.querySelector("#price");
increment.addEventListener("click",()=>{
    let add=valueCount++;
    count.value=add;
    
})
decrement.addEventListener("click",()=>{
    if(valueCount>=2){
        let sub=--valueCount;
        count.value=sub;

    }
}
    )
    
