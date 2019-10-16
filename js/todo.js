$("ul").on("click","li",function()
{/*
if($(this).css("color") === "rgb(128, 128, 128)")
{
	$(this).css({
color:"black",
textDecoration:"none"
	});
}
else
{
$(this).css({
color:"gray",
textDecoration:"line-through"
	});

}
*/
$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event)
{
	$(this).parent().fadeOut(500,function()
	{
		$(this).remove();
	})
event.stopPropagation();
});

$("input").keypress(function(event)
{
	if(event.which===13)
		{
			var val=$(this).val();
			console.log(val);
			$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + val + "</li>")
		}

});
$(".fa-plus").on("click",function()
{
$("input").fadeToggle(10);


});