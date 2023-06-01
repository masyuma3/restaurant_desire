var cost=0;
var coins=0;

function open_spisok(){
    if(document.querySelector("#spisok_navigation").classList.contains("disp_menu")){ 
        document.querySelector("#spisok_navigation").classList.remove("disp_menu");
    }

    else{
    document.querySelector("#spisok_navigation").classList.add("disp_menu");
    }
}

function open_koshik(){
    if(document.querySelector("#koshik_tovariv").classList.contains("disp_menu")){ 
        document.querySelector("#koshik_tovariv").classList.remove("disp_menu");
    }

    else{
        document.querySelector("#koshik_tovariv").classList.add("disp_menu");
    }
}

 //   document.getElementById('outerBlock').style.display = 'none';


function open_booking(){
    document.querySelector("#full_menu_space").classList.remove("disp_menu");
    document.querySelector("#full_menu_space").classList.add("full_menu_space");

    document.querySelector("#booking_menu").classList.remove("disp_menu");
    document.querySelector("#booking_menu").classList.add("booking_menu");
}

function close_booking(){
    document.querySelector("#full_menu_space").classList.add("disp_menu");
    document.querySelector("#full_menu_space").classList.remove("full_menu_space");

    document.querySelector("#booking_menu").classList.add("disp_menu");
    document.querySelector("#booking_menu").classList.remove("booking_menu");
}

document.querySelector("#booking_menu").addEventListener('click', function(event) {
  event.stopPropagation(); // Останавливаем всплытие события
});

document.getElementById('full_menu_space').addEventListener('click', close_booking);

document.getElementById('booking_exit').addEventListener('click', close_booking);



function menu_open_delivery(){
    if(coins!=0){
    document.querySelector("#full_menu_delivery_space").classList.remove("disp_menu");
    document.querySelector("#full_menu_delivery_space").classList.add("full_menu_delivery_space");

    document.querySelector("body").style.overflow='hidden';

    document.querySelector("#menu_delivery").classList.remove("disp_menu");
    document.querySelector("#menu_delivery").classList.add("menu_delivery");
    }
}


function close_menu_delivery(){
    document.querySelector("#full_menu_delivery_space").classList.add("disp_menu");
    document.querySelector("#full_menu_delivery_space").classList.remove("full_menu_delivery_space");

    document.querySelector("body").style.overflow='visible';

    document.querySelector("#menu_delivery").classList.add("disp_menu");
    document.querySelector("#menu_delivery").classList.remove("menu_delivery");
}

document.querySelector("#menu_delivery").addEventListener('click', function(event) {
  event.stopPropagation();
});

document.getElementById('full_menu_delivery_space').addEventListener('click', close_menu_delivery);

document.getElementById('menu_delivery_exit').addEventListener('click', close_menu_delivery);




function menu_open_buy(){
    if(coins!=0){
    // var clasi=document.querySelectorAll()

    document.querySelector("#full_menu_buy_space").classList.remove("disp_menu");
    document.querySelector("#full_menu_buy_space").classList.add("full_menu_buy_space");

    document.querySelector("body").style.overflow='hidden';

    document.querySelector("#menu_buy").classList.remove("disp_menu");
    document.querySelector("#menu_buy").classList.add("menu_buy");

    }

}

function close_menu_buy(){
    document.querySelector("#full_menu_buy_space").classList.add("disp_menu");
    document.querySelector("#full_menu_buy_space").classList.remove("full_menu_buy_space");

    document.querySelector("body").style.overflow='visible';

    document.querySelector("#menu_buy").classList.add("disp_menu");
    document.querySelector("#menu_buy").classList.remove("menu_buy");
}

document.querySelector("#menu_buy").addEventListener('click', function(event) {
  event.stopPropagation();
});

document.getElementById('full_menu_buy_space').addEventListener('click', close_menu_buy);

document.getElementById('menu_buy_exit').addEventListener('click', close_menu_buy);


window.addEventListener('scroll', function() {
    // var food_type = document.getElementById('test');
    // var scroll_now = window.scrollY;
    // var scroll_target = 500; // позиция, на которой должен произойти увеличение блока

    // от 300, по 2400

if (window.scrollY > 
    (document.getElementById('breakfast_name').getBoundingClientRect().top + window.scrollY - 220) 
    && window.scrollY <= 
    (document.getElementById('salads_name').getBoundingClientRect().top + window.scrollY - 220)) 
    {
        document.getElementById('scroll_breakfast').classList.remove('linkers_none');
    } 
    else {
        document.getElementById('scroll_breakfast').classList.add('linkers_none');
    }

    if (window.scrollY > 
        (document.getElementById('salads_name').getBoundingClientRect().top + window.scrollY - 220) 
        && window.scrollY <= 
        (document.getElementById('soups_name').getBoundingClientRect().top + window.scrollY - 220)) 
        {
            document.getElementById('scroll_salads').classList.remove('linkers_none');
        } 
        else {
            document.getElementById('scroll_salads').classList.add('linkers_none');
        }

if (window.scrollY > 
    (document.getElementById('soups_name').getBoundingClientRect().top + window.scrollY - 220) 
    && window.scrollY <= 
    (document.getElementById('pizza_name').getBoundingClientRect().top + window.scrollY - 220)) 
    {
        document.getElementById('scroll_soups').classList.remove('linkers_none');
    } 
    else {
        document.getElementById('scroll_soups').classList.add('linkers_none');
    }

    if (window.scrollY > 
        (document.getElementById('pizza_name').getBoundingClientRect().top + window.scrollY - 220) 
        && window.scrollY <= 
        (document.getElementById('garnish_name').getBoundingClientRect().top + window.scrollY - 220)) 
        {
            document.getElementById('scroll_pizza').classList.remove('linkers_none');
        } 
        else {
            document.getElementById('scroll_pizza').classList.add('linkers_none');
        }

if (window.scrollY > 
    (document.getElementById('garnish_name').getBoundingClientRect().top + window.scrollY - 220) 
    && window.scrollY <= 
    (document.getElementById('meat_name').getBoundingClientRect().top + window.scrollY - 220)) 
    {
        document.getElementById('scroll_garnish').classList.remove('linkers_none');
    } 
    else {
        document.getElementById('scroll_garnish').classList.add('linkers_none');
    }

    if (window.scrollY > 
        (document.getElementById('meat_name').getBoundingClientRect().top + window.scrollY - 220) 
        && window.scrollY <= 
        (document.getElementById('fish_name').getBoundingClientRect().top + window.scrollY - 220)) 
        {
            document.getElementById('scroll_meat').classList.remove('linkers_none');
        } 
        else {
            document.getElementById('scroll_meat').classList.add('linkers_none');
        }

if (window.scrollY > 
    (document.getElementById('fish_name').getBoundingClientRect().top + window.scrollY - 220) 
    && window.scrollY <= 
    (document.getElementById('desserts_name').getBoundingClientRect().top + window.scrollY - 220)) 
    {
        document.getElementById('scroll_fish').classList.remove('linkers_none');
    } 
    else {
        document.getElementById('scroll_fish').classList.add('linkers_none');
    }

    if (window.scrollY > 
        (document.getElementById('desserts_name').getBoundingClientRect().top + window.scrollY - 220) 
        && window.scrollY <= 
        (document.getElementById('no_alcohol_name').getBoundingClientRect().top + window.scrollY - 220)) 
        {
            document.getElementById('scroll_desserts').classList.remove('linkers_none');
        } 
        else {
            document.getElementById('scroll_desserts').classList.add('linkers_none');
        }

if (window.scrollY > 
    (document.getElementById('no_alcohol_name').getBoundingClientRect().top + window.scrollY - 220) 
    && window.scrollY <= 
    (document.getElementById('alcohol_name').getBoundingClientRect().top + window.scrollY - 220)) 
    {
        document.getElementById('scroll_no_alcohol').classList.remove('linkers_none');
    } 
    else {
        document.getElementById('scroll_no_alcohol').classList.add('linkers_none');
    }

    if (window.scrollY > 
        (document.getElementById('alcohol_name').getBoundingClientRect().top + window.scrollY - 220) 
        && window.scrollY <= 
        (document.documentElement.scrollHeight)) 
        {
            document.getElementById('scroll_alcohol').classList.remove('linkers_none');
        } 
        else {
            document.getElementById('scroll_alcohol').classList.add('linkers_none');
        }
  });
  


  function add_el(a){
    // choose_rest();
    var el=a.parentElement.parentElement.parentElement;
    var spisok=document.getElementById('koshik_spisok');
 
    var span=document.createElement('span');
    var li=document.createElement('li');
    var div=document.createElement('div');
    var cina=document.createElement('section');
    var type=document.createElement('p');
    // li как элемент еды (70)
    cina.textContent=a.parentElement.querySelector('.price .full_price .money').textContent;

    var type_b=el.querySelector('.food_text > .food_type > .choose_food_type');
    if(type_b!==null){
    radio_b=type_b.querySelectorAll('input');
    label_b=type_b.querySelectorAll('label');

    for(i=0; i<radio_b.length;i++){
        if(radio_b[i].checked){
           type.textContent=label_b[i].textContent.trim();
        }
    }}

    div.textContent='✕';
    div.classList.add('koshik_tovarov_delete');
    li.textContent=el.querySelector('.food_text > .food_name').textContent;
    // var foodName=el.querySelector('.food_text > .food_name').textContent;
    // var typeName=type.textContent;
    // li.innerHTML=foodName+'<br>'+typeName;

    // li.innerHTML+='<br>';
    if(type_b!==null){
        li.textContent+='('+type.textContent+')';
    }
    li.style.fontSize='20px';

    var clasi=Array.from(el.classList);
        if(clasi.length>0){
            li.classList.add(clasi);
        }

    spisok.appendChild(li);

    var cina_grn=parseFloat(cina.textContent);
    // cina.textContent += ' грн'
    li.appendChild(cina);
    li.appendChild(div);
    // li.appendChild(type);
    spisok.scrollTop=spisok.scrollHeight;

    var money=el.querySelector('.price .full_price .money').textContent;
    var grivni=parseFloat(money);
    cost=cost+grivni;

  

    // price, в котором full_price, в котором money (можно .price>.full_price>.money))


    div.addEventListener('click', function() {
        // li как элемент спика покупок
        // console.log(cost);
        var sp = this.parentElement;
        sp.remove();
        cost=cost-cina_grn;
        if (cost <= 0) {
            cost = 0;
          }
    // заменил coins вместо cost

          coins=0;
          var li_spiska=spisok.querySelectorAll('li');
          li_spiska.forEach(function(li){
              if (!li.classList.contains("disp_menu")) {
              var temp=li.querySelector('section');
              coins+=parseFloat(temp.textContent);
              }
          });
        
        //   console.log(li.lenth);

        var ol_koshik=document.getElementById("koshik_spisok");

        var li_koshik=ol_koshik.querySelectorAll('li');
          
        //   for(i=0;i<li_koshik.length;i++){
        //     if(!li_koshik.classList.contains("disp_menu"))
        // li_koshik[i].querySelector('span').textContent=i+1+'.';
        //   }
          if(li_koshik.length!=0){  
            var j=0;
            for(i=0;i<li_koshik.length;i++){
            var li=li_koshik[i];
        
                if(!li.classList.contains("disp_menu")){
                    li.querySelector('span').textContent=j+1+'.';
                    // li.insertBefore(span,li.firstChild);
                    j++;
            }}}

      
     document.getElementById("buy_price").textContent=coins.toFixed(2);
        document.getElementById("full_price").textContent=coins.toFixed(2);
        document.getElementById("buying_price").textContent=coins.toFixed(2);
      });




      var lishki=spisok.querySelectorAll('li');



  if(lishki.length!=0){  
    var j=0;
    for(i=0;i<lishki.length;i++){
    var li=lishki[i];

        if(!li.classList.contains("disp_menu")){
            span.textContent=j+1;
            span.textContent+='.';
            li.insertBefore(span,li.firstChild);
            j++;
    }}}

    coins=0;
    var li_spiska=spisok.querySelectorAll('li');
    li_spiska.forEach(function(li){
        if (!li.classList.contains("disp_menu")) {
        var temp=li.querySelector('section');
        coins+=parseFloat(temp.textContent);
        }
    });

    document.getElementById("buy_price").textContent=coins.toFixed(2);
      document.getElementById("full_price").textContent=coins.toFixed(2);
      document.getElementById("buying_price").textContent=coins.toFixed(2);
  }



//   document.querySelectorAll(".koshik_tovarov_delete").forEach(function(a) {
//     a. addEventListener('click', function() {
//         var sp=this.parentElement;
//         sp.remove();
//         });
//   });

document.addEventListener("DOMContentLoaded", function() {
    choose_rest();
});

function choose_rest(){
    var rest_kyiv=document.getElementById("kyiv_rest");
    var kyiv=document.querySelectorAll(".odesa_only");
    var odesa=document.querySelectorAll(".kyiv_only");

    if(rest_kyiv.checked){
        kyiv.forEach(function(element) {
            element.classList.add("disp_menu");
        });

        odesa.forEach(function(element) {
            element.classList.remove("disp_menu");
        });
    }

    else{
        odesa.forEach(function(element) {
            element.classList.add("disp_menu");
        });
        kyiv.forEach(function(element) {
            element.classList.remove("disp_menu");
        });
    }


    coins=0;
    var spisok=document.getElementById("koshik_spisok");
    var li_spiska=spisok.querySelectorAll('li');

 li_spiska.forEach(function(li){
     if (!li.classList.contains("disp_menu")) {
     var temp=li.querySelector('section');
     coins+=parseFloat(temp.textContent);
     }
 })
 document.getElementById("buy_price").textContent=coins.toFixed(2);
 document.getElementById("full_price").textContent=coins.toFixed(2);
 document.getElementById("buying_price").textContent=coins.toFixed(2);

}
 
function open_photo(a){
    if(a.classList.contains("full_photo")){
        a.classList.remove("full_photo")
    }
    else{
    a.classList.add("full_photo");
    }
}

function bok_form(event){
    // event.preventDefault(); 
    var a=alert("Ми отримали ваше бронювання. Наш співробітник незабаром зв'яжеться з Вами, аби підвердити його.");
    }

function buy_check(){
    var a=document.getElementById("card");
    // var b=getElementById("cash");
    var c=document.querySelectorAll(".card");
    var d=document.querySelectorAll(".cash");

    if(a.checked){
        Array.from(d).forEach(function(t){
            t.classList.add("disp_menu");
        });
        Array.from(c).forEach(function(t){
            t.classList.remove("disp_menu");
        });
    }

    else{
        Array.from(d).forEach(function(t){
            t.classList.remove("disp_menu");
        });
        Array.from(c).forEach(function(t){
            t.classList.add("disp_menu");
        });
    }
}