

const countVow = (num)=>{
    let count=0;
    for (const i of num){
        if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
        count ++;
        }
        
    }
    console.log(count);
}