// image.js

const rightDiv = (image) => {
    let mydiv = document.createElement("div");
    mydiv.className = "rightClass";
    mydiv.innerHTML = `<img src="./${image}" class="imgc">`;
    return mydiv;
};

export { rightDiv };
