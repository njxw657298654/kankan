$(function(){function i(){t>11&&(t=0);var i=$(".smal_pic li").eq(t).find("img").attr("backImg"),s=$(".smal_pic li").eq(t).find("img").attr("backColor"),e="url("+i+") no-repeat center "+s;$("#focus_background").css({background:e}),$(".smal_pic li").eq(t).addClass("hover").siblings().removeClass("hover"),$(".focus_title a").eq(t).show().siblings("a").hide(),t++}function s(){o>2&&(o=0),$(".ad_left ul").eq(o).show().siblings("ul").hide(),$(".ad_tab a").eq(o).addClass("one").siblings("a").removeClass("one"),o++}var e="",t=0,o=0,a="";$(".tabbox a").mouseover(function(){$(this).addClass("hot_style").siblings("a").removeClass("hot_style");var i=$(this).index();$(this).parents(".hot_l_title").siblings("ul").eq(i).show().siblings("ul").hide()}),$(".search_text").focus(function(){$(this).attr("value",""),$(this).removeClass().addClass("blue")}),$(".search_text").blur(function(){$(this).removeClass("blue").addClass("search_text")}),$(".user_r").hover(function(){$(".hidden_r").show()},function(){$(".hidden_r").hide()}),$(".hidden_m_top span").mouseover(function(){$(".hidden_m_top span").removeClass("span_style"),$(this).addClass("span_style")}),$(".user_m").hover(function(){$(".user_m .hidden_m").show()},function(){$(".user_m .hidden_m").hide()}),$("span.history").mouseover(function(){$(".history_box").show()}),$("span.update").mouseover(function(){$(".history_box").hide(),$(".user_m .hidden_m").show()}),$(".smal_pic li").mouseover(function(){clearInterval(e);var i=$(this).find("img").attr("backImg"),s=$(this).find("img").attr("backColor"),o="url("+i+") no-repeat center "+s;$("#focus_background").css({background:o}),$(this).addClass("hover").siblings().removeClass("hover"),t=$(this).index(),$(".focus_title a").eq(t).show().siblings("a").hide()}),$(".smal_pic li").mouseout(function(){e=setInterval(i,1e3)}),e=setInterval(i,1e3),$(".title a").mouseover(function(){$(this).addClass("rank_hover").siblings().removeClass("rank_hover")}),$(".focusrank p.title a").mouseover(function(){var i=$(this).index();$(".focusrank div.content ul").eq(i).show().siblings("ul").hide()}),$("a.pic").hover(function(){$(this).addClass("apic_hover")},function(){$(this).removeClass("apic_hover")}),$(".hot_right a.tab").mouseover(function(){$(this).addClass("a_r_tab").siblings("a").removeClass("a_r_tab");var i=$(this).index();$(".hot_right ul").eq(i).show().siblings("ul").hide()}),$("ul.tab_box li").mouseover(function(){$(this).addClass("tv_r_tab").siblings("li").removeClass("tv_r_tab");var i=$(this).index();$(".tv_right div.list").eq(i).show().siblings("div.list").hide(),$(".tv_right ul.tagbox").eq(i).show().siblings("ul.tagbox").hide()});var n=0;$(".like .title_left a.more2").click(function(){n--,n=n==-3?0:n;var i=953*n;$(".like_left .main_l ul.img_list").stop().animate({left:i+"px"},300)}),$(".movie_right ul.tab_box li").mouseover(function(){var i=$(this).index();$(".movie_right div.list").eq(i).show().siblings("div.list").hide(),$(".movie_right ul.tagbox").eq(i).show().siblings("ul.tagbox").hide()}),$(".vip_right ul.tab_box li").mouseover(function(){var i=$(this).index();$(".vip_right div.list").eq(i).show().siblings("div.list").hide()}),$(".zy .zy_tab li").mouseover(function(){var i=$(this).index();$(".zy .zy_right div.list").eq(i).show().siblings("div.list").hide(),$(".zy .zy_right ul.tagbox").eq(i).show().siblings("ul.tagbox").hide()}),$(".anime_right ul.tab_box li").mouseover(function(){var i=$(this).index();$(".anime_right div.list").eq(i).show().siblings("div.list").hide(),$(".anime_right ul.tagbox").eq(i).show().siblings("ul.tagbox").hide(),$(".anime_right ul.simglist").eq(i).show().siblings("ul.simglist").hide()}),$(".baidu_box a").hover(function(){$(this).css("opacity",.9)},function(){$(this).css("opacity",1)}),$(".good_right .tabbox_title a").mouseover(function(){$(this).addClass("good_r_style").siblings("a").removeClass("good_r_style");var i=$(this).index();$(".good_right ul.imglist").eq(i).show().siblings("ul.imglist").hide()}),$("p.tao").mouseover(function(){$("div.tao1").show(),$(this).hide()}),$("div.tao1").mouseout(function(){$("div.tao1").hide(),$("p.tao").show()}),$(".ad_tab a").mouseover(function(){clearInterval(a);var i=$(this).index();$(this).addClass("one").siblings("a").removeClass("one"),$(".ad_left ul").eq(i).show().siblings("ul").hide()}),$(".ad_tab a").mouseout(function(){a=setInterval(s,1e3)}),a=setInterval(s,1e3);var l="";$(window).scroll(function(){$(window).scrollTop()>500?$(".back_top").show():$(".back_top").hide()}),$(".back_top a").click(function(){l=setInterval(function(){$(window).scrollTop($(window).scrollTop()-1e3),$(window).scrollTop()<=0&&clearInterval(l)},1)})});