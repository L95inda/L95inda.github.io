$(function()
{
    // Add existing results to form for posting to google
    var existing = localStorage.getItem('existing');
    if(existing != null)
    {
        existing = JSON.parse(existing);
        
        var found = 0;
        for(var dict of existing)
        {
            for (var key in dict)
            {
                var value = dict[key];

                $("#form").append("<input type='hidden' name='" + key + "' value='" + value + "' />");
                found ++;
            }
        }

        console.log("Added " + found.toString() + " existing results!");
    }

    $('#form').submit(function (e) {
        e.preventDefault();

        postToGoogle();

        return false;
    });
});