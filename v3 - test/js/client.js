$(function()
{
    // Check for sessionId in localStorage
    var sessionId = localStorage.getItem('sessionId');
    if(sessionId == null)
    {
        // If there is no sessionId, then return to index.
        window.location.href = "index.html";
        return;
    }

    // Add the sessionId to the form.
    $("#form").append("<input type='hidden' name='id' value='" + sessionId + "' />");

    // When form is submitted, pass all the form data to our 'update' request to store in a csv.
    /*$('#form').submit(function (e) {
        e.preventDefault();

        let data = {};
        let fd = new FormData($(this).get(0));

        for (let [key, prop] of fd) {
          data[key] = prop;
        }

        var existing = localStorage.getItem('existing');
        if(existing == null)
        {
            existing = [];
        }
        else
        {
            existing = JSON.parse(existing);
        }
        existing.push(data);
        localStorage.setItem("existing", JSON.stringify(existing));

        PostInfo($(this).serialize(), "page3_assessment.html");
        
        return false;
    });*/

    /*$('#form').submit(function (e) {
        e.preventDefault();
        let data = {};
        let fd = new FormData($(this).get(0));

        for (let [key, prop] of fd) {
          data[key] = prop;
        }
        SubmitForm($(this).serialize(), data);
        return false;
    });*/
});

function SubmitForm(fd, data, complete)
{
    var existing = localStorage.getItem('existing');
    if(existing == null)
    {
        existing = [];
    }
    else
    {
        existing = JSON.parse(existing);
    }
    existing.push(data);
    localStorage.setItem("existing", JSON.stringify(existing));

    PostInfo(fd, complete);
}