"use strict";$(function(){"use scrict";var a=50,e=$("#featured .item").length,t=Math.floor(Math.random()*e),i=$(window).height();$("#featured .item").eq(t).addClass("active"),$(".fullheight").css("height",i),$("#featured .item img").each(function(){var a=$(this).attr("src");$(this).parent().css({"background-image":"url("+a+")"}),$(this).remove()}),$(window).resize(function(){i=$(window).height(),$(".fullheight").css("height",i)}),$("body").scrollspy({target:"header .navbar",offset:a});var r=$(this).find("li.active a").attr("href");"#featured"!==r?$("header nav").addClass("inbody"):$("header nav").removeClass("inbody"),$(".navbar-fixed-top").on("activate.bs.scrollspy",function(){var a=$(this).find("li.active a").attr("href");"#featured"!==a?$("header nav").addClass("inbody"):$("header nav").removeClass("inbody")}),$(".navbar a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top-a+2},500),!1}});for(var s=0;e>s;s++){var h='<li data-target="#featured" data-slide-to="'+s+'"';s===t&&(h+=' class="active" '),h+="></li>",$("#featured ol").append(h)}$(".carousel").carousel({pause:!1})});