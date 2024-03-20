// card.js

const sectwoDiv = (title2, image1, image2, image3,image4, para1, para2, para3,para4, button1, button2, button3,button4) => {
    let mydiv = document.createElement("div");
    mydiv.className = "sectwoClass";
    mydiv.innerHTML = `<h1 class="title2">${title2}</h1>
                            <div class="container">
                                <ul class="column1">
                                    <li><img src="./${image1}" class="img1"></li>
                                    <li><p class="p2">${para1}</p></li>
                                    <li><button class="btn1">${button1}</button></li>
                                </ul>
                                <ul class="column2">
                                    <li><img src="./${image2}" class="img2"></li>
                                    <li><p class="p2">${para2}</p></li>
                                    <li><button class="btn2">${button2}</button></li>
                                </ul>
                                <ul class="column3">
                                    <li><img src="./${image3}" class="img3"></li>
                                    <li><p class="p2">${para3}</p></li>
                                    <li><button class="btn3">${button3}</button></li>
                                </ul>
                                <ul class="column4">
                                    <li><img src="./${image4}" class="img4"></li>
                                    <li><p class="p2">${para4}</p></li>
                                    <li><button class="btn4">${button4}</button></li>
                                </ul>
                               `;
    return mydiv;
};

export { sectwoDiv };
