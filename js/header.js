$(document).ready(function(){
    justToggle("#menuPanel nav ul li span");
    panelControl(".openBtn");
});

function justToggle(target)
{
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}
function panelControl(openBtn)
{
    var currentPanel = null;
    $(openBtn).click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(currentPanel).removeClass("active");
    });
}