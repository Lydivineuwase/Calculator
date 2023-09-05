document.addEventListener('DOMContentLoaded', function() {
const btn1= document.getElementById("btn1");
const btn2= document.getElementById("btn2");
const btn3= document.getElementById("btn3");
const multiplication= document.getElementById("multiplication");
const btn4= document.getElementById("btn4");
const btn5= document.getElementById("btn5");
const btn6= document.getElementById("btn6");
const addition= document.getElementById("addition");
const btn7= document.getElementById("btn7");
const btn8= document.getElementById("btn8");
const btn9= document.getElementById("btn9");
const sub= document.getElementById("sub");
const dot= document.getElementById("dot");
const btn0= document.getElementById("btn0");
const equal= document.getElementById("equal");
const previousOperand= document.getElementById("previous-operand");
const currentOperand= document.getElementById("current-operand");
const clear= document.getElementById("ac");
const delet= document.getElementById("delet");
const division= document.getElementById("division");
const clas= document.getElementsByClassName("output")


btn1.addEventListener("click", () =>{
        const num1= 1;
        previousOperand.innerHTML += num1;
        console.log(num1);

});

btn2.addEventListener("click", () =>{
        const num2= 2;
        previousOperand.innerHTML += num2;
        console.log(num2);

});

btn3.addEventListener("click", () =>{
        const num3= 3;
        previousOperand.innerHTML += num3;
        console.log(num3);

});

multiplication.addEventListener("click", () =>{
        const mul= "*";
        previousOperand.innerHTML += mul;
        console.log(mul);

});

btn4.addEventListener("click", () =>{
        const num4= 4;
        previousOperand.innerHTML += num4;
        console.log(num4);

});

btn5.addEventListener("click", () =>{
        const num5= 5;
        previousOperand.innerHTML += num5;
        console.log(num5);

});

btn6.addEventListener("click", () =>{
        const num6= 6;
        previousOperand.innerHTML += num6;
        console.log(num6);

});

addition.addEventListener("click", () =>{
        const add= "+";
        previousOperand.innerHTML += add;
        console.log(add);

});

btn7.addEventListener("click", () =>{
        const num7= 7;
        previousOperand.innerHTML += num7;
        console.log(num7);

});

btn8.addEventListener("click", () =>{
        const num8= 8;
        previousOperand.innerHTML += num8;
        console.log(num8);

});

btn9.addEventListener("click", () =>{
        const num9= 9;
        previousOperand.innerHTML += num9;
        console.log(num9);

});

sub.addEventListener("click", () =>{
        const substr= "-";
        previousOperand.innerHTML += substr;
        console.log(substr);

});

dot.addEventListener("click", () =>{
        const dott= "." ;
        previousOperand.innerHTML += dott;
        console.log(dott);

});

btn0.addEventListener("click", () =>{
        const num0= 0;
        previousOperand.innerHTML += num0;
        console.log(num0);

});


division.addEventListener("click", () =>{
        const div= "/";
        previousOperand.innerHTML += div;
        console.log(div);

});

delet.addEventListener("click", () =>{
        // const deletee= "DEL"
        console.log(previousOperand.textContent)
         const currentExpression= previousOperand.textContent;
        previousOperand.innerHTML= currentExpression.slice(0,-1);

});

equal.addEventListener("click", () =>{
        const value= previousOperand.textContent;
        console.log("result=",eval(value))
        currentOperand.innerHTML = eval(value)
        
})

clear.addEventListener("click", ()=>{
        currentOperand.innerHTML= "";
        previousOperand.innerHTML= "";
});





});
