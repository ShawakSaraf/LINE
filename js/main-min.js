!function(){"use strict";const n=document.body,a=document.documentElement,t=document.getElementById("page"),o=document.getElementById("blog"),i=document.getElementById("read-progress"),d=document.getElementById("title-front"),s=document.getElementById("title-back"),l=document.getElementById("blog_main_art"),r=[768,1080,1280];let f,c,m,u,g,h,p,v;$(function(){var e,t;B(),w(),b(),C(),M(),W(),I(),x(),S(),E(),y()&&(e=document.getElementById("title-front"),null!==(t=null!==e?e.getAttribute("font-size-mobile"):null))&&screen.width<innerWidth>=r[0]&&e.setAttribute("style","font-size: "+t)});var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}},y=()=>null!==(e.Android()||e.iOS()),w=()=>{$("#page").prepend('<div id="offcanvas" />'),$("#page").prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>');var e=$(".menu-1 > ul").clone();$("#offcanvas").append(e),$("#offcanvas .has-dropdown").addClass("offcanvas-has-dropdown"),$("#offcanvas").find("li").removeClass("has-dropdown"),$(".offcanvas-has-dropdown").mouseenter(function(){$(this).addClass("active").find("ul").slideDown(500,"easeOutExpo")}).mouseleave(function(){$(this).removeClass("active").find("ul").slideUp(500,"easeOutExpo")}),$(window).resize(function(){$("body").hasClass("offcanvas")&&($("body").removeClass("offcanvas"),$(".js-nav-toggle").removeClass("active"))})},b=()=>{$("body").on("click",".js-nav-toggle",function(e){var t=$(this);$("body").hasClass("overflow offcanvas")?($("body").removeClass("overflow offcanvas"),n.style.overflow=""):($("body").addClass("overflow offcanvas"),n.style.overflow="hidden"),t.toggleClass("active"),e.preventDefault()}),$(document).on("click",e=>{var t=$("#offcanvas, .js-nav-toggle");t.is(e.target)||0!==t.has(e.target).length||$("body").hasClass("offcanvas")&&($("body").removeClass("offcanvas"),$(".js-nav-toggle").removeClass("active"),n.style.overflow="")})},C=()=>{$(".animate-box").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated-fast")||($(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(e){var t=$(this);setTimeout(function(){var e=t.data("animate-effect");"fadeIn"===e?t.addClass("fadeIn animated-fast"):"fadeInLeft"===e?t.addClass("fadeInLeft animated-fast"):"fadeInRight"===e?t.addClass("fadeInRight animated-fast"):t.addClass("fadeInUp animated-fast"),t.removeClass("item-animate")},200*e,"easeInOutExpo")})},100))},{offset:"85%"})},I=()=>{y()||$(".has-dropdown").mouseenter(function(){$(this).find(".dropdown").css("display","block").addClass("animated-fast fadeInUpMenu")}).mouseleave(function(){$(this).find(".dropdown").css("display","none").removeClass("animated-fast fadeInUpMenu")})},W=()=>{if(y())null!==d&&(s.style.display="none",window.addEventListener("scroll",()=>{requestAnimationFrame(()=>{d.style.transform="translateY("+.15*scrollY+"px",A()})}));else if(null!==l){o.style.opacity=0,o.style.scale=0,u=innerWidth>=r[2]?.2:innerWidth>=r[1]?.1:innerWidth>=r[0]?.13:.35,g=innerWidth>=r[2]?100:innerWidth>=r[0]?50:30,h=function(e){let t=e.parentNode,n=t.offsetHeight,a=t.offsetWidth,o=window.getComputedStyle(e).boxSizing,i=parseFloat(window.getComputedStyle(e).paddingTop),d=parseFloat(window.getComputedStyle(e).paddingBottom),s=parseFloat(window.getComputedStyle(e).paddingLeft),l=parseFloat(window.getComputedStyle(e).paddingRight);"border-box"===o&&(i+=parseFloat(window.getComputedStyle(e).borderTopWidth),d+=parseFloat(window.getComputedStyle(e).borderBottomWidth),s+=parseFloat(window.getComputedStyle(e).borderLeftWidth),l+=parseFloat(window.getComputedStyle(e).borderRightWidth));var e=(i+d)/n*100,r=(s+l)/a*100;return{top:i,bottom:d,left:s,right:l,percentH:e,percentW:r}}(d).top,p=20,window.addEventListener("resize",()=>{u=innerWidth>=r[2]?.2:innerWidth>=r[0]?.13:.35,g=innerWidth>=r[2]?100:innerWidth>=r[0]?50:30,A(innerWidth>=r[2]?innerWidth/2:innerWidth,2)});let e;window.addEventListener("scroll",()=>{requestAnimationFrame(()=>{clearTimeout(e),c=innerWidth>=r[2]?2*scrollY:scrollY,m=Math.min(1,c/innerWidth),o.style.opacity=Math.min(1,function(e,t,n,a){return n*(e/=a)*e*e+t}(1.3*m,0,1,1)),o.style.scale=Math.min(1,O(m,0,1,1)),d.style.paddingTop=h-O(m,0,h-g,1)+"px",s.style.paddingTop=h-O(m,0,h-g,1)+"px",c<innerWidth+p&&(t.style.transform="translate3d(0,"+scrollY+"px, 0)",o.style.transform="translate3d(0,"+-Math.min(innerHeight*u,c)+"px, 0)",l.style.transform="translate3d("+c+"px, 0, 0)",d.style.transform="translate3d("+-c+"px, 0, 0)"),A(innerWidth>=r[2]?innerWidth/2:innerWidth,2),scrollY>v?$(".js-top").addClass("active"):k(),e=setTimeout(()=>{k(),$("#read-progress").fadeOut("slow")},3e3)})})}},x=()=>{v=y()?800:2e3,$(".js-gotop").on("click",function(e){return e.preventDefault(),$("html, body").animate({scrollTop:$("html").offset().top},250,"easeInOutExpo"),!1})};function k(){$(".js-top").removeClass("active")}var S=()=>{$(window).on("DOMContentLoaded",()=>{$(".loader").fadeOut("slow")}),$(window).on("load",()=>{$("#blog_main_art").fadeIn("slow")})},E=()=>{0<$("#counter").length&&$("#counter").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(void $(".js-counter").countTo({formatter:function(e,t){return e.toFixed(t.decimals)}}),400),$(this.element).addClass("animated"))},{offset:"90%"})},M=()=>{$(".flexslider").flexslider({animation:"fade",slideshowSpeed:5e3,directionNav:!0,start:function(){setTimeout(function(){$(".slider-text, .blog-title-style").removeClass("animated fadeInUp"),$(".flex-active-slide").find(".slider-text, .blog-title-style").addClass("animated fadeInUp")},500)},before:function(){setTimeout(function(){$(".slider-text, .blog-title-style").removeClass("animated fadeInUp"),$(".flex-active-slide").find(".slider-text, .blog-title-style").addClass("animated fadeInUp")},500)}})},B=()=>{let e=localStorage.getItem("darkMode"),t=document.getElementById("title-back");const n=null!==t?t.getAttribute("light_col"):"white",a=null!==t?t.getAttribute("dark_col"):"black",o=()=>{$("body").addClass("dark-mode"),localStorage.setItem("darkMode","enabled"),null!==t&&(t.style.color=null!==n?n:"white")},i=()=>{$("body").removeClass("dark-mode"),localStorage.setItem("darkMode","disabled"),null!==t&&(t.style.color=null!==a?a:"black")};("enabled"==e||"disabled"!=e&&window.matchMedia("(prefers-color-scheme: dark)").matches?o:i)(),$("body").on("click",".theme-toggle",function(){("enabled"!==(e=localStorage.getItem("darkMode"))?o:i)()})};function A(e=0,t=1){$("#read-progress").fadeIn("fast"),f=Math.max(n.scrollHeight,n.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)-innerHeight*t,i.style.width=100*Math.max(0,Math.min(1,(scrollY-e)/f))+"%"}function O(e,t,n,a){return n*((e=e/a-1)*e*e+1)+t}}();