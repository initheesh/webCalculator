function btnClick(val){
    console.log(val);
    let op=['+','-','*','/'];
    if(!op.includes(val))
        document.getElementById("output").value+=val;
}

