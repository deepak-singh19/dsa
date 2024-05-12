for(let i=1;i<5;i++){
    setTimeout((num)=>{
        console.log("SetTimeout ",num)
    },i*1000,i)
};


for(let i=1;i<5;i++){
    setTimeout(()=>{
        console.log("without ",i)
    },i)
};