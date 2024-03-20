const leftdiv=(title1,para1,para2,button1,button2,button3,button4)=>{
    let mydiv = document.createElement("mydiv");
    mydiv.className= "Leftclass";
    mydiv.innerHTML=`<h1>${title1}</h1>
    <p>${para1}</p>
    <p>${para2}</p>
    <button>${button1}</button>
    <button>${button2}</button>
    <button>${button3}</button>
    <button>${button4}</button>
    `
    return mydiv;
}
export{leftdiv}