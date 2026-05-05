

//bai 1
// let tong,x,y;
// document.getElementById("sum").onclick=function(){
//     x=document.getElementById("x");
//     y=document.getElementById("y"); 
//     x=Number(x.value);
//     y=Number(y.value);
//     tong=x+y;
//     console.log(tong);
//     document.getElementById("ketqua").textContent="ket qua"+tong;
// }


//bai 2
// let x,y;
// document.getElementById("submit").onclick=function(){
//     x=document.getElementById("ten").value;
//     y=document.getElementById("tuoi").value;
//     console.log(x);
//     document.getElementById("ketqua").textContent="Ten: "+x+" ,Tuoi: "+y;
//}

//Bai 3
let x,y,z,tbc;
document.getElementById("submit").onclick=function(){
    x=document.getElementById("x");
    y=document.getElementById("y");
    z=document.getElementById("z");
    x=Number(x.value);
    y=Number(y.value);
    z=Number(z.value);
    tbc=(x+y+z)/3**3;
    tbc=String(tbc);
    tbc+=1;
    console.log(tbc);
    document.getElementById("ketqua").textContent=tbc;
}

