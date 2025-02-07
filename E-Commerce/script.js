let icon=document.querySelector('.icon');
let ul=document.querySelector('ul');

icon.addEventListener('click',()=>{
    ul.classList.toggle("showData");
    if(ul.classList=="showData"){
        document.getElementById('bar').className="fa-solid fa-xmark"
    }
    else{
        document.getElementById('bar').className="fa-solid fa-bars"
    }
    
})

//navbar

let shops=document.getElementById('shops');
let reviews=document.getElementById('reviews');
let blogs=document.getElementById('blogs');
let contacts=document.getElementById('contacts');


shops.addEventListener('click',()=>{
    shops.style.color="rgb(4,219,219)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

reviews.addEventListener('click',()=>{
    reviews.style.color="rgb(4,219,219)";
    shops.style.color='white';
    blogs.style.color='white';
    contacts.style.color='white';
})
blogs.addEventListener('click',()=>{
    blogs.style.color="rgb(4,219,219)";
    shops.style.color='white';
    reviews.style.color='white';
    contacts.style.color='white';
})
contacts.addEventListener('click',()=>{
    contacts.style.color="rgb(4,219,219)";
    shops.style.color='white';
    reviews.style.color='white';
    blogs.style.color='white';
    
})


// card js
let itemPage=document.querySelector('.itemPage');

let crd=document.querySelectorAll(".crd");
let container=document.querySelector('.container');
let itemimg=document.getElementById("itemImg");
let buyBtn=document.getElementById('buyBtn')

let buyText=document.querySelector('.buyText');



    crd.forEach(function(curnValue){
        curnValue.addEventListener('click',function(){
            itemPage.style.display="flex";
            container.style.display='none';

          let imgsrc=curnValue.firstElementChild.src;
          itemimg.src=imgsrc;

          


          buyBtn.addEventListener('click',function(){
            document.querySelector('.buyPage').style.display="block"
            
            let worng=document.getElementById('Wrong');
            worng.addEventListener('click',function(){
                document.querySelector('.buyPage').style.display='none';
            })
          })


        })
     
    }) 
    let input=document.querySelectorAll("input");
    let button=document.getElementById('button');
    button.addEventListener('click',function(){
      if(input.value===""){
          alert("please Enter the details");
      }
    });



