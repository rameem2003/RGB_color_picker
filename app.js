const appBody = document.getElementById("app_body");
const copyBtn = document.getElementById("copy");
appBody.addEventListener("change", color);

window.onload = () => {
    color();
}



copyBtn.addEventListener("click", () => {
    var bgcolor = color();
    navigator.clipboard.writeText(bgcolor);
})




function color(){
    let color_code = document.getElementById("color_code");
    let redColor = parseInt(document.getElementById("r").value);
    let greenColor = parseInt(document.getElementById("g").value);
    let blueColor = parseInt(document.getElementById("b").value);



    document.getElementById("r_value").innerHTML =  redColor;
    document.getElementById("g_value").innerHTML =  greenColor;
    document.getElementById("b_value").innerHTML =  blueColor;


    document.getElementById("window").style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    color_code.value = `rgb(${redColor}, ${greenColor}, ${blueColor})`;  

    return `rgb(${redColor}, ${greenColor}, ${blueColor})`
}

