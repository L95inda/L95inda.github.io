var api_url = "https://www.oxfordwaveresearch.com/linda/api/";

function StartSession()
{
    /*if(!$("#gdpr-checkbox").is(":checked"))
    {
        alert("You must check the checkbox to consent to the described collection and processing of the data before you may continue.")
        return;
    }*/

    $.ajax({
        url: api_url + "start.php",
        type: "POST",
        success: function(data) {
            var sessionId = data.toString();
            localStorage.setItem('sessionId', sessionId);
            window.location.href = "page2_persdata.html";
        },
        error: function() {
            alert('Error occured');
        }
    });
}

function ClearSession(redirect)
{
    localStorage.clear();
    if(redirect)
    {
        window.location.href = "index.html";
    }
}

function PostInfo(info, complete)
{
    $.ajax({
        url: api_url + "update.php",
        type: "POST",
        data: info,
        processData: false,
        cache: false,
        success: function(data) {
            if(complete != null)
            {
                window.location.href = complete;
            }
        },
        error: function() {
            alert('Error occured');
            ClearSession(true);
        }
    });
}