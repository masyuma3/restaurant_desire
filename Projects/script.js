function full_moon_change(){
        document.querySelector("#close_moon").classList.add("disp");
        document.querySelector("#open_moon").classList.remove("disp")
    }

 function crescent_moon_change(){
        document.querySelector("#close_moon").classList.remove("disp");
         document.querySelector("#open_moon").classList.add("disp")
     }

function breakfast_on(){
    document.querySelector("#food_breakfast").classList.remove("disp");
}

function breakfast_out(){
    document.querySelector("#food_breakfast").classList.add("disp");
}


function salads_on(){
    document.querySelector("#food_salads").classList.remove("disp");
}

function salads_out(){
    document.querySelector("#food_salads").classList.add("disp");
}


function soups_on(){
    document.querySelector("#food_soups").classList.remove("disp");
}

function soups_out(){
    document.querySelector("#food_soups").classList.add("disp");
}


function pizza_on(){
    document.querySelector("#food_pizza").classList.remove("disp");
}

function pizza_out(){
    document.querySelector("#food_pizza").classList.add("disp");
}


function garnish_on(){
    document.querySelector("#food_garnish").classList.remove("disp");
}

function garnish_out(){
    document.querySelector("#food_garnish").classList.add("disp");
}


function meat_on(){
    document.querySelector("#food_meat").classList.remove("disp");
}

function meat_out(){
    document.querySelector("#food_meat").classList.add("disp");
}


function fish_on(){
    document.querySelector("#food_fish").classList.remove("disp");
}

function fish_out(){
    document.querySelector("#food_fish").classList.add("disp");
}


function desserts_on(){
    document.querySelector("#food_desserts").classList.remove("disp");
}

function desserts_out(){
    document.querySelector("#food_desserts").classList.add("disp");
}


function no_alcohol_on(){
    document.querySelector("#no-alcohol_drinks").classList.remove("disp");
}

function no_alcohol_out(){
    document.querySelector("#no-alcohol_drinks").classList.add("disp");
}


function alcohol_on(){
    document.querySelector("#alcohol_drinks").classList.remove("disp");
}

function alcohol_out(){
    document.querySelector("#alcohol_drinks").classList.add("disp");
}




function open_booking_main(){
    document.querySelector("#full_main_space").classList.remove("disp");
    document.querySelector("#full_main_space").classList.add("full_main_space");

    document.querySelector("body").style.overflow='hidden';

    document.querySelector("#booking_main").classList.remove("disp");
    document.querySelector("#booking_main").classList.add("booking_main");
}


function close_booking_main(){
    document.querySelector("#full_main_space").classList.add("disp");
    document.querySelector("#full_main_space").classList.remove("full_main_space");

    document.querySelector("body").style.overflow='visible';

    document.querySelector("#booking_main").classList.add("disp");
    document.querySelector("#booking_main").classList.remove("booking_main");
}

document.querySelector("#booking_main").addEventListener('click', function(event) {
  event.stopPropagation();
});

document.getElementById('full_main_space').addEventListener('click', close_booking_main);

document.getElementById('booking_exit_main').addEventListener('click', close_booking_main);




function open_feedback(){
    document.querySelector("#full_feedback_space").classList.remove("disp");
    document.querySelector("#full_feedback_space").classList.add("full_feedback_space");

    document.querySelector("body").style.overflow='hidden';

    document.querySelector("#feedback").classList.remove("disp");
    document.querySelector("#feedback").classList.add("feedback");
}


function close_feedback(){
    document.querySelector("#full_feedback_space").classList.add("disp");
    document.querySelector("#full_feedback_space").classList.remove("full_feedback_space");

    document.querySelector("body").style.overflow='visible';

    document.querySelector("#feedback").classList.add("disp");
    document.querySelector("#feedback").classList.remove("feedback");
}

document.querySelector("#feedback").addEventListener('click', function(event) {
  event.stopPropagation();
});

document.getElementById('full_feedback_space').addEventListener('click', close_feedback);

document.getElementById('feedback_exit').addEventListener('click', close_feedback);


function yellow_stars(a){
    var stars = document.getElementsByClassName("stars_1");
  
    for (var i = 0; i < a; i++) {
      stars[i].classList.add("hightlight");
    }
}

function grey_stars(a){
    var stars = document.getElementsByClassName("stars_1");
  
    for (var i = 0; i < a; i++) {
      stars[i].classList.remove("hightlight");
    }
}


function choose_stars(a){
    var stars = document.getElementsByClassName("stars_1");

    for (var i = 0; i < a; i++) {
        stars[i].classList.add("stars_color");
      }
    
    for(var i=a; i<5; i++){
        stars[i].classList.remove("stars_color");
    }
}




function yellow_stars_2(a){
    var stars = document.getElementsByClassName("stars_2");
  
    for (var i = 0; i < a; i++) {
      stars[i].classList.add("hightlight");
    }
}

function grey_stars_2(a){
    var stars = document.getElementsByClassName("stars_2");
  
    for (var i = 0; i < a; i++) {
      stars[i].classList.remove("hightlight");
    }
}


function choose_stars_2(a){
    var stars = document.getElementsByClassName("stars_2");

    for (var i = 0; i < a; i++) {
        stars[i].classList.add("stars_color");
      }
    
    for(var i=a; i<5; i++){
        stars[i].classList.remove("stars_color");
    }
}


function phone_about_us(){
    var spisok1=document.querySelectorAll(".about_us_view");
    var spisok2=document.querySelectorAll(".about_us_not_view");
    var a=document.querySelector(".phone_about_us");
    var content = ".";

    if(spisok1[0].classList.contains("disp")){
        spisok1.forEach(element => {
            element.classList.remove("disp");
        });
        spisok2.forEach(element => {
            element.classList.add("disp");
        });
    a.classList.add("pointer_up");
    a.classList.remove("pointer_down");
    }

    else{
        spisok1.forEach(element => {
            element.classList.add("disp");
        });
        spisok2.forEach(element => {
            element.classList.remove("disp");
        });
        a.classList.remove("pointer_up");
        a.classList.add("pointer_down");
    }

}


function phone_open_menu(){
    var s_menu=document.querySelector(".phone_menu_button");
    var f_menu=document.querySelector(".phone_menu");

    f_menu.classList.remove("disp");
    s_menu.classList.add("disp");
}

function phone_close_menu(){
    var s_menu=document.querySelector(".phone_menu_button");
    var f_menu=document.querySelector(".phone_menu");

    f_menu.classList.add("disp");
    s_menu.classList.remove("disp");
}

function kyiv_color(){
var a=document.querySelector(".kyiv_feedback");
var b=document.querySelector(".odesa_feedback");

  if(a.classList.contains("feedback_color")){
  a.classList.remove("feedback_color");
//   a.classList.remove("grey_c");
//     if(a.classList.contains("feedback_color")){
//         a.classList.remove("feedback_color");
//   }
}

  else {
    // a.classList.add("grey_c");
    a.classList.add("feedback_color");
    // if(b.classList.contains("feedback_color")){
    //     b.classList.remove("feedback_color");
    // }
}
}

function odesa_color(){
    var a=document.querySelector(".kyiv_feedback");
    var b=document.querySelector(".odesa_feedback");
    
      if(b.classList.contains("feedback_color")){
      b.classList.remove("feedback_color");
    //   b.classList.remove("grey_c");
    //     if(b.classList.contains("feedback_color")){
    //         b.classList.remove("feedback_color");
    //   }
    }
    
      else {
        b.classList.add("feedback_color");
        // a.classList.add("grey_c");
        // if(a.classList.contains("feedback_color")){
        //     a.classList.remove("feedback_color");
        // }
    }
    }

    function al_feedback(){
    var a=alert("Спасибі вам за ваш відгук. Він допоможе нашим ресторанам стати ще кращими!");
    }

    function bok_form(event){
        // event.preventDefault(); 
        var a=alert("Ми отримали ваше бронювання. Наш співробітник незабаром зв'яжеться з Вами, аби підвердити його.");
        }


        function rec1_on(){
            document.querySelector("#rec1").classList.remove("disp");
        }
        
        function rec1_out(){
            document.querySelector("#rec1").classList.add("disp");
        }


        function rec2_on(){
            document.querySelector("#rec2").classList.remove("disp");
        }
        
        function rec2_out(){
            document.querySelector("#rec2").classList.add("disp");
        }


        function rec3_on(){
            document.querySelector("#rec3").classList.remove("disp");
        }
        
        function rec3_out(){
            document.querySelector("#rec3").classList.add("disp");
        }

        function rec4_on(){
            document.querySelector("#rec4").classList.remove("disp");
        }
        
        function rec4_out(){
            document.querySelector("#rec4").classList.add("disp");
        }




        function sales1_on(){
            document.querySelector("#sales1").classList.remove("disp");
        }
        
        function sales1_out(){
            document.querySelector("#sales1").classList.add("disp");
        }


        function sales2_on(){
            document.querySelector("#sales2").classList.remove("disp");
        }
        
        function sales2_out(){
            document.querySelector("#sales2").classList.add("disp");
        }


        function sales3_on(){
            document.querySelector("#sales3").classList.remove("disp");
        }
        
        function sales3_out(){
            document.querySelector("#sales3").classList.add("disp");
        }

        function sales4_on(){
            document.querySelector("#sales4").classList.remove("disp");
        }
        
        function sales4_out(){
            document.querySelector("#sales4").classList.add("disp");
        }




        function pop1_on(){
            document.querySelector("#pop1").classList.remove("disp");
        }
        
        function pop1_out(){
            document.querySelector("#pop1").classList.add("disp");
        }


        function pop2_on(){
            document.querySelector("#pop2").classList.remove("disp");
        }
        
        function pop2_out(){
            document.querySelector("#pop2").classList.add("disp");
        }


        function pop3_on(){
            document.querySelector("#pop3").classList.remove("disp");
        }
        
        function pop3_out(){
            document.querySelector("#pop3").classList.add("disp");
        }


        function pop4_on(){
            document.querySelector("#pop4").classList.remove("disp");
        }
        
        function pop4_out(){
            document.querySelector("#pop4").classList.add("disp");
        }