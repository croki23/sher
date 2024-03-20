const rightdiv =(image)=>{
    let mydiv = document.createElement("mydiv");
    mydiv.className="RightClass";
    mydiv.innerHTML=`<img src=" /Activity 3/${image}">`

    return mydiv;
}
export{rightdiv}