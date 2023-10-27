$(document).ready(function(){
    toggle_control("#menuPanel nav ul li span");
    panel_open_Control(".openBtn");
});

function toggle_control(target)
{
    $(target).click(function(){
        $(this).toggleClass("active");
        $(target).not($(this)).removeClass("active");  
    });
}
function panel_open_Control(openBtn)
{
    var currentPanel = null;
    $(openBtn).click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).removeClass("active");
    });
}
