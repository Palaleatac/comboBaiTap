//Tao cũng tạo .js này để chúng mày không cần làm :>>>
//Write your answer below:
let rad1,rad2,rad3,rad4,rad5,min;
document.getElementById("submit").onclick=function(){
    let count=0;
    rad1=Number(document.getElementById("rad1").value);
    rad2=Number(document.getElementById("rad2").value);
    rad3=Number(document.getElementById("rad3").value);
    rad4=Number(document.getElementById("rad4").value);
    rad5=Number(document.getElementById("rad5").value);
    if(Math.cos(Math.PI*(rad1**2))>0) count++;
    if(Math.cos(Math.PI*(rad2**2))>0) count++;
    if(Math.cos(Math.PI*(rad3**2))>0) count++;
    if(Math.cos(Math.PI*(rad4**2))>0) count++;
    if(Math.cos(Math.PI*(rad5**2))>0) count++;
    min=Math.min(rad1,rad2,rad3,rad4,rad5);
    document.getElementById("end").textContent="so luong cos>0:"+count + "|min:"+min;       
}
document.getElementById("circle").onclick=function(){
     let circle=0;
    rad1=Number(document.getElementById("rad1").value);
    rad2=Number(document.getElementById("rad2").value);
    rad3=Number(document.getElementById("rad3").value);
    rad4=Number(document.getElementById("rad4").value);
    rad5=Number(document.getElementById("rad5").value);
    if(Math.floor((rad1**2)/2)) circle++;
    if(Math.floor((rad2**2)/2)) circle++;
    if(Math.floor((rad3**2)/2)) circle++;
    if(Math.floor((rad4**2)/2)) circle++;
    if(Math.floor((rad5**2)/2)) circle++;
    console.log(circle);

}