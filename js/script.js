
var Product=document.querySelectorAll(".p1");
//var Content=document.querySelector(".content");
var total=document.querySelector(".total");
var btn=document.querySelectorAll(".btn");
var total1=0;
var price=document.querySelectorAll(".price")



/*Product.forEach(function(item1){
    item1.addEventListener("click",function(){
        Content.innerHTML+=item1.textContent;
        total.innerHTML+=item1.getAttribute("price");
        if(Content.innerHTML!=" " && total.innerHTML!=0)
        {
            btn.style.display="block";
        }


    })
});*/
var arr1=["iphone","samsung","oppo","vivo"]
var prices=[1200,5000,7900,4000]

btn.forEach(function(btn1,index)
{
    btn1.addEventListener("click",()=>{
        Product.forEach(function(pro1,index2){
         pro1[index2].innerHtml=arr1[index2]
        })
     price.forEach(function(item3,index2){
        item3[index2].innerHtml=prices[index2];
        total1+=item3[index2];
        

     })
     total.innerHtml=total1
    })

})






















