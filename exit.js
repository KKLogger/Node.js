let i =1;
setInterval(()=>{
    if(i===5){
        console.log('END');
        process.exit();
        //Node 완전 종료
    }
    console.log(i);
    i++;
},1000);
