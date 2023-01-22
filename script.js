function btnClick(val){
        document.getElementById("output").value+=val;
}
function clearbtn(){
    document.getElementById("output").value=""
}

function answer(){
    let text =document.getElementById("output").value
    console.log(text)
    let result = eval(text);
    document.getElementById("output").value=result
}

