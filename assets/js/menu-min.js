$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>100?$(".logo").removeClass("hidden"):$(".logo").addClass("hidden")}),$(".mobile-toggle").click(function(){$(".navigation").hasClass("open-nav")?$(".navigation").removeClass("open-nav"):$(".navigation").addClass("open-nav")})});