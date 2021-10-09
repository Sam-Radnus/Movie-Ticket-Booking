let movie=document.getElementById("movie");
let seat=$("div.seat");
let ticketPrice=movie.value;
let chair=0;
let added=0;
var avail=false;
let change=false;
seat.each(function(i){
     console.log();
     seat[i].innerText=seat[i].id;
});
let changeNormal=($('small[id="Normal"]'));
let changeExecutive=($('small[id="Executive"]'));
let changeVIP=($('small[id="VIP"]'));


function updateCost(ticketPrice)
{
     changeNormal.text(parseFloat(ticketPrice)+" GBP");
     changeExecutive.text((parseFloat(ticketPrice)+1)+" GBP");
     changeVIP.text((parseInt(ticketPrice)+2)+" GBP");
    
}
for(let i=0;i<10;i++)
{
    let r=Math.floor(Math.random()*(60-1+1))+1;
  
    let x=document.getElementById(r);
    x.classList="seat occupied";
    
}
function calcPrice(x)
{
    let tax=0;
    if(x<=30)
    {
      tax=1.71;   
      return tax;
    }
    else
    if(x>30&&x<=50){
         tax=2.81;
         return tax;
    }
    else
    {
         tax=4.01;
         return tax;
    }

}
function updateCount()
{
     
     const numberOfTickets=document.querySelectorAll('div[class="seat selected"]');
     let ticketCost=ticketPrice;


     const price=document.querySelector('label[id="price"]');
     const total=document.querySelector('label[id="ticket"]');

     
     
     total.innerText=numberOfTickets.length;
     price.innerText="£"+(ticketCost*numberOfTickets.length);

}
function selectedMovieData(movieIndex,moviePrice)
{
     localStorage.setItem("selected seats",moviePrice);
}
let container=$('div[class="seats section"]')
//console.log(container);
container.on('click',function(e)
{
     
   if(
        e.target.classList.contains('seat')&&! e.target.classList.contains('occupied')
   )
   {
        chair=e.target.id;
        e.target.classList.toggle('selected');
        updateCount();
   }
   
   change=true;
});
const check=document.querySelector('select[id="movie"]');
check.addEventListener('change',function(e)
{
     const x=e.target.value;
     ticketPrice=e.target.value; 
     console.log(ticketPrice);
     updateCount();
     updateCost(ticketPrice);
});
window.onbeforeunload=function()
{
     return "changes you have made may not be saved";
}
$('input[type="radio"]').on('change',function()
{
     let x=this.value;
     let y=$('label[id="change"]');
     y.html(x+" Number");
     $('input[id="pin1"]').attr("placeholder","Enter "+x+" Number");
});
let x=document.querySelector('.modal-bg');
$('button[id="submit"]').on('click',function(e)
{
     let price2=document.querySelector('label[id="price"]');
     let displayVal=document.querySelector('input[id="display"]');
     displayVal.value=price2.innerHTML;
     x.classList.add("active");
});
$('span').on('click',function()
{
     
     x.classList.remove("active");
});