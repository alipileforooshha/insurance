jQuery(document).ready(function ($) {
  var width=$(window).width();
 /***********************start click submenu xs*************************/
  if(width<992){
      $(".primary-menu .menu-item-has-children").prepend('<button type="button" class="toggle-menu">' +
          '<i  class="fa fa-angle-down"></i>' +
          '</button>');
      $(".primary-menu .toggle-menu").click(function (){
          $(this).siblings('.sub-menu').slideToggle();
          $(this).parent('li.menu-item-has-children').toggleClass('open');
          $(this).find('.fa').toggleClass('rotate');
      });
      $('.btn-menu').click(function(){
          $('.primary-menu ul.nav-menu').toggleClass('open');
      });
  }
 /***********************end click submenu xs*************************/
  //start menu
  $('.btn-menu').click(function() {
      $('.btn-menu .opener-button-menu')
          .children('.fa')
          .toggleClass('fa-bars fa-times');
      $('.primary-menu').toggleClass('open');
  });
/*****************start open sub-menu tablet********************/   
   var width = $(window).width();
   if (width > 768) {
     $('.primary-menu .menu-item-has-children').hoverIntent({
       over: openSubMenu,
       out: CloseSubMenu,
       interval: 200,
       timeout: 500
     });
     function openSubMenu() {
       $(this)
         .children('.sub-menu')
         .addClass('open');
     }
     function CloseSubMenu() {
       $(this)
         .children('.sub-menu')
         .removeClass('open');
     }
  }
  //click tag select
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);
}
);
$(".form-switch-percent").click(function(){
  $(".hide").fadeToggle("slow");
});
$( "#btn-add-river" ).click( function () {
  $(".add-driver").slideToggle();
} );
  var width=$(window).width();
if ( width < 992 ) {
  $(".tooltip-click").click(function () {
    $(this).find(".fa").toggleClass("rotate");
    $(this).siblings(".hover-tooltip").toggleClass('show');
  });
 }

