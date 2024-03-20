import { leftdiv } from "./info.js";
import { rightdiv } from "./image.js";

const data = {
    title1:"SHERWIN",
    para1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur harum numquam incidunt qui deserunt nesciunt, commodi modi, facilis ipsam ab praesentium voluptate, rem eveniet impedit vitae? Qui, dicta ut.",
    para2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur harum numquam incidunt qui deserunt nesciunt, commodi modi, facilis ipsam ab praesentium voluptate, rem eveniet impedit vitae? Qui, dicta ut.",
    button1:"Home",
    button2:"View",
    button3:"Contact Us",
    button4:"About Us",
    myImage:"dog.jpg"
}

const{title1,para1,para2,button1,button2,button3,button4,myImage} = data;
container.append(leftdiv(title1,para1,para2,button1,button2,button3,button4));
container.append(rightdiv(myImage));