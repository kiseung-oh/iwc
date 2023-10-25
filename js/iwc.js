
$(document).ready(function()
{
    podcast_resize();
    $("#headers").load("/headers.html");
    $("#footers").load("/footers.html");
    $("#fancybox_options").load("/fancybox_options.html");
    $(".closeBtn").click(header_search_close_event);
    justToggle(".watch_detail > div:first-of-type > div:first-of-type ul li");
    justToggle(".watch_detail > div:first-of-type button");
    detail_image_move("#detail_main_custom_pager a","#detail_main_custom_pager");
    service_toggle_control(".watch_detail > div:last-of-type > ul > li");
    service_toggle_control(".service_type > div:first-of-type ul li",".service_type > div:last-of-type > ul > li");
    service_toggle_control(".innovative_materials > div:first-of-type ul li",".innovative_materials > div:last-of-type > ul > li");
    service_toggle_control(".faq > div:first-of-type ul li",".faq > div:last-of-type > ul > li");
    service_toggle_control(".faq > div:last-of-type > ul > li div ul li");
    service_toggle_control(".sustainability > div > ul > li");
    header_search_close_event();
    bxcontroller(".p1", 'horizontal', 500, 'ease-in-out', true, true, false, true, true, true, false);
    bxcontroller(".newsSlider", 'horizontal', 500, 'ease-in-out', true, false, false, true, true, false, false);
    bxcontroller(".list_left_horizon",'horizontal', 500, 'ease-in-out', true, false, false, true, true, true, true);
    bxcontroller(".detail_main", 'vertical', 500, 'ease-in-out', false, false, true, true, false, true, false, "#detail_main_custom_pager");
    bxcontroller(".detail_another_watches", 'horizontal', 500, 'ease-in-out', true, false, false,true, true, false, true, null, 5, 5, 80, 70, 1, null, true, false,'detail_others');
    bxcontroller(".history_other_collections",'horizontal',500, 'ease-in-out', true, false, false,true, true, false, true,null, 3,3,350,30,1,null,true,false);
    bxcontroller(".watchmaking_bx",'horizontal',500, 'ease-in-out', true, false, false,true, true, false, true,null, 3,3,350,30,1,null,true,false);
    checkScreenSize();
    password_confirmcheck();
    history_card_list();
    history_scroll_event('.collection_history > div:first-of-type > ul li','.collection_history > div:first-of-type > div > ul li');
});

/**
 * bxSlider control
 * @param {class_or_id} slider_name name: 슬라이더 이름. 자료형: class_or_id 
 * @param {char} slider_mode mode: default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고). 자료형: char 
 * @param {int} slider_speed speed: default : 500. 전환속도 제어. 자료형: int 
 * @param {char} slider_easing easing: default : null. slide간 전환 가속도 설정. linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(n,n,n,n)'. 자료형: char 
 * @param {bool} slider_auto auto: default: false. slide 자동전환 켜기. false로 설정시 autoControls에서 작동가능. 자료형: bool 
 * @param {bool} slider_autoControls autoControls: default: false. 시각장애인들을 배려. 자료형: bool 
 * @param {bool} slider_autoHover autoHover: default: false. onMouseOver상태일 때 자동전환 중지(autoStart: true일 경우 사용가능). 자료형: bool 
 * @param {bool} slider_stopAutoOnClick stopAutoOnClick: controler button을 조작할 때는 자동전환 중지. 자료형: bool 
 * @param {bool} slider_touchEnabled touchEnabled: default: true. 터치스와이프 켜기 끄기. 자료형: bool 
 * @param {bool} slider_pager pager: default: true. pager 켜기/끄기. 자료형: bool 
 * @param {bool} slider_controls controls: default: true. control button 켜기 끄기.. 자료형: bool 
 * @param {class_or_id} slider_pagerCustom pagerCustom: default: null. 슬라이더 페이저 변형. 자료형: class_or_id 
 * @param {int} slider_maxSlides maxSlides: default: 1. 최대 노출 슬라이드 장수. 자료형: int 
 * @param {int} slider_minSlides minSlides: default: 1. 최소 노출 슬라이드 장수. 자료형: int 
 * @param {int} slider_slideWidth slideWidth: default: 0. carousel content 당 너비. 자료형: int 
 * @param {int} slider_slideMargin slideMargin: default: 0. slide간 간격 설정. 자료형: int 
 * @param {int} slider_moveSlides moveSlides: default:0. 전환시 이동할 carousel content 수. 자료형: int 
 * @param {char} slider_pagerType pagerType: default: full.(circle). short: count로 변경. 자료형: char 
 * @param {bool} slider_preventDefaultSwipeX preventDefaultSwipeX: default: true. screen자체 터치상태에서 x축 움직임을 중지. 자료형: bool
 * @param {bool} slider_preventDefaultSwipeY preventDefaultSwipeY: default: false. screen자체 터치상태에서 Y축 움직임을 중지. x와 y중 하나만 켜야한다. 자료형: bool
 * @param {char} slider_wrapperClass wrapperClass: default: 'bx-wrapper' 종속된 css 를 해제하고 다른 부모 class로 변경한다.
 * 
 * @see https://bxslider.com/options
 * */
function bxcontroller(slider_name,slider_mode,slider_speed,slider_easing,slider_auto,slider_autoControls,slider_autoHover,slider_stopAutoOnClick,slider_touchEnabled,slider_pager,slider_controls,slider_pagerCustom,slider_maxSlides,slider_minSlides,slider_slideWidth,slider_slideMargin,slider_moveSlides,slider_pagerType,slider_preventDefaultSwipeX,slider_preventDefaultSwipeY,slider_wrapperClass)
{
    $(slider_name).bxSlider(
        {
            mode:slider_mode,
            speed:slider_speed,
            easing:slider_easing,
            auto:slider_auto,
            autoControls:slider_autoControls,
            autoHover:slider_autoHover,
            stopAutoOnClick:slider_stopAutoOnClick, 
            touchEnabled:slider_touchEnabled,
            pager:slider_pager,
            controls:slider_controls,
            pagerCustom:slider_pagerCustom,
            maxSlides:slider_maxSlides,
            minSlides:slider_minSlides,
            slideWidth:slider_slideWidth,
            slideMargin:slider_slideMargin,
            moveSlides:slider_moveSlides,
            pagerType:slider_pagerType,
            preventDefaultSwipeX: slider_preventDefaultSwipeX , 
            preventDefaultSwipeY: slider_preventDefaultSwipeY,
            wrapperClass: slider_wrapperClass
        });
}

function history_scroll_event(css_of_year, css_of_list)
{
    $(document).ready(function()
    {
        $(css_of_year + ':first-of-type').addClass('active');
        $(window).scroll(function()
        {
            const find_image = document.querySelectorAll(css_of_list);
            var winX = window.scrollY + 169;
            var each_li_height = [];
            
            for(var i = 0; i < find_image.length; i++)
            {
                const li_rect = find_image[i].getBoundingClientRect().y;
                const scroll_length = window.scrollY;
                each_li_height.push(li_rect + scroll_length);
            }

            if(winX < each_li_height[2])
            {
                $(css_of_year + ':not(:first-of-type)').removeClass('active');
                $(css_of_year + ':first-of-type').addClass('active');
            }

            else if(winX > each_li_height[(find_image.length-1)])
            {
                $(css_of_year + ':not(:last-of-type)').removeClass('active');
                $(css_of_year + ':last-of-type').addClass('active');
            }

            for(var i = 2; i <= find_image.length; i++)
            {
                if(each_li_height[i] <= winX && winX < each_li_height[i+1])
                {
                    $(css_of_year + ':not(:nth-of-type(' + (i + 1) + '))').removeClass('active');
                    $(css_of_year + ':nth-of-type(' + (i + 1) + ')').addClass('active');
                }
            }
            

            $(css_of_year).click(function(){
                scrollTo(0,each_li_height[$(this).index()] - 169);
            });
        })


    })
}

function history_card_list()
{
    document.querySelectorAll(".collection_history > div:first-of-type > div > ul li").forEach((item) => {
        item.style.gridRowEnd = `span ${item.clientHeight + 20}`;
    });
}

function password_confirmcheck()
{
    $(function(){
        $(".Confirm_alert").hide();
        $("input").keyup(function()
        {
            var pw=$("#Pw").val();
            var Cpw=$("#ConfirmPw").val();

            if(pw != "" || Cpw != "")
            {
                if(pw != Cpw)
                {
                    $("#Confirm-success").hide();
                    $("#Confirm-wrong").show();
                    $(".Confirm_check").attr("disabled", "disabled");
                }
                else
                {
                    $("#Confirm-success").show();
                    $("#Confirm-wrong").hide();
                    $(".Confirm_check").removeAttr("disabled");
                }
                
            }
        });
    });
    
}

function checkScreenSize()
{
    var bx_destroy_and_reload = $(".list_right_vertical").bxSlider({mode: 'vertical',speed: 500,easing: 'ease-in-out',auto: true,autoControls: false,autoHover: false,stopAutoOnClick: true,touchEnabled: true,pager: true,controls: false,pagerType:'short',preventDefaultSwipeX: false, preventDefaultSwipeY: true});
    $(window).on('resize', function()
    {
        var new_window_width = $(window).width();
        if(new_window_width < 768)
        {
            bx_destroy_and_reload.destroySlider();
        } 
        else if(new_window_width = 768)
        {
            bx_destroy_and_reload.reloadSlider();            
        }    
    });
    
    
}

function justToggle(target)
{
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}

function service_toggle_control(target_from, target_to)
{
    $(target_from).click(function(){
        $(this).addClass("active");
        $(target_from).not($(this)).removeClass("active");  
        var count = $(this).index() + 1;

        $(target_to + ':nth-of-type(' + count + ')').addClass('active');
        $(target_to + ':not(:nth-of-type(' + count + '))').removeClass('active');
    });
} 

function detail_image_move(image_css, image_move)
{
    $(image_css).click(function(){
        var count = $(this).index() + 1;
        
        if (count < 3)
        {
            $(image_move).css({top: 0});
        }
        else if (count >= 3)
        {
            var move_height = (count - 3) * (- 110);
            $(image_move).css({top: move_height});
        }
    });
} 

function header_search_close_event()
{
    xrotate_to_close_search(".rotate1",".rotate2");
}

function xrotate_to_close_search(xrotate_1,xrotate_2)
{
    var line1 = $(xrotate_1);
    var line2 = $(xrotate_2);
    line1.css({"animation-duration": "1s","animation-name" :"xrotate1"});
    line2.css({"animation-duration": "1s","animation-name" :"xrotate2"});
}

function podcast_resize()
{
    var changing_value = $(".podcast div ul li div div a");

    $(window).on('resize', function()
    {
    if(matchMedia("screen and (min-width: 1279px)").matches) 
    {
        changing_value.css({"opacity": "0"});
    }
    else if(matchMedia("screen and (max-width:1279px)").matches) 
    {
        changing_value.css({"opacity": "1"});
    }
    });
}