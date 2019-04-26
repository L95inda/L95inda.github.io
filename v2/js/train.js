$(document).ready(function () {
	isTrain = true;
	
    LayoutTrain();


    // on click radiobuttons retrieve value, and change slider value if window size changes
	$(document).on('click', "input[type='radio']", function () {

        $(this).popover();
        return;

	    $(this).closest("tr").find("input[type='range']").val($(this).val());
	    $(this).closest("tr").find(".slider_value").html($(this).val());

	    // get score
		var row = $(this).parent().parent();
        var value = null; // variable to retrieve similarity ratings for each comparison
        if ($(window).width() > 900) // if the window width is big enough get the value from radiobuttons (computer)
        {
            value = $(row).find("input[type='radio']:checked").val();
        }

        
        else // if the window is not big enough get values from slider (smartphone)
        {
            value = $(row).find("input[type='range']").val();
        }

	});

});