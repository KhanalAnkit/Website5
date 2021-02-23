function sort(){
    let n1=document.querySelector("#input-1").value;
    let n2=document.querySelector("#input-2").value;
    let n3=document.querySelector("#input-3").value;
    let n4=document.querySelector("#input-4").value;
    let n5=document.querySelector("#input-5").value;
    let n6=document.querySelector("#input-6").value;
    let n7=document.querySelector("#input-7").value;
    let n8=document.querySelector("#input-8").value;
    let n9=document.querySelector("#input-9").value;
    let n10=document.querySelector("#input-10").value;
    let n11=document.querySelector("#input-11").value;
    let n12=document.querySelector("#input-12").value;
    let n13=document.querySelector("#input-13").value;
    let n14=document.querySelector("#input-14").value;
    let n15=document.querySelector("#input-15").value;
    let n16=document.querySelector("#input-16").value;
    let string=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16];
    let re=string.sort();
    document.querySelector(".td1").innerHTML=string[0];
    document.querySelector(".td2").innerHTML=string[1];
    document.querySelector(".td3").innerHTML=string[2];
    document.querySelector(".td4").innerHTML=string[3];
    document.querySelector(".td5").innerHTML=string[4];
    document.querySelector(".td6").innerHTML=string[5];
    document.querySelector(".td7").innerHTML=string[6];
    document.querySelector(".td8").innerHTML=string[7];
    document.querySelector(".td9").innerHTML=string[8];
    document.querySelector(".td10").innerHTML=string[9];
    document.querySelector(".td11").innerHTML=string[10];
    document.querySelector(".td12").innerHTML=string[11];
    document.querySelector(".td13").innerHTML=string[12];
    document.querySelector(".td14").innerHTML=string[13];
    document.querySelector(".td15").innerHTML=string[14];
    document.querySelector(".td16").innerHTML=string[15];

}