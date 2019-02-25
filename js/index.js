var defaultColor = "";

// training files to get used to presentation and adjust volume
var train = [
    // File 1, File 2, Google Forms Id
    ["/Audio/test_112-3-061117_norm_sample.wav",   "/Audio/test_112B-3-070212_norm_sample.wav",     "entry.1762625825"],
    ["/Audio/test_073B-3-061218_norm_sample.wav",   "/Audio/test_115-3-061121_norm_sample.wav",     "entry.71688659"],
    ["/Audio/test_073-3-061009_norm_sample.wav",   "/Audio/test_096B-3-070209_norm_sample.wav",     "entry.206446725"],
];

/*
// actual test files (EXPERIMENT 1 - differentiation similar/different - 55 comparisons)
var questions = [
    // File 1, File 2, Google Forms Id
    ["/Audio/018B-3-060623_norm_sample.wav",   "/Audio/115-3-061121_norm_sample.wav",     "entry.1892256234"],
    ["/Audio/020B-3-060623_norm_sample.wav",   "/Audio/018-3-060327_norm_sample.wav",     "entry.49918461"],
    ["/Audio/064B-3-061218_norm_sample.wav",   "/Audio/020-3-060328_norm_sample.wav",     "entry.1306580115"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/064-3-061004_norm_sample.wav",     "entry.660167094"],
    ["/Audio/073B-3-061218_norm_sample.wav",   "/Audio/071-3-061009_norm_sample.wav",     "entry.1540334802"],
    ["/Audio/095B-3-070208_norm_sample.wav",   "/Audio/073-3-061009_norm_sample.wav",     "entry.700673313"],
    ["/Audio/096B-3-070209_norm_sample.wav",   "/Audio/095-3-061030_norm_sample.wav",     "entry.689736028"],
    ["/Audio/103B-3-070206_norm_sample.wav",   "/Audio/096-3-061030_norm_sample.wav",     "entry.1700964310"],
    ["/Audio/112B-3-070212_norm_sample.wav",   "/Audio/103-3-061102_norm_sample.wav",     "entry.997376607"],
    ["/Audio/115B-3-070215_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.853761221"],
    ["/Audio/018-3-060327_norm_sample.wav",   "/Audio/064B-3-061218_norm_sample.wav",     "entry.962199474"],
    ["/Audio/020-3-060328_norm_sample.wav",   "/Audio/071B-3-061221_norm_sample.wav",     "entry.1656871955"],
    ["/Audio/064-3-061004_norm_sample.wav",   "/Audio/073B-3-061218_norm_sample.wav",     "entry.653673810"],
    ["/Audio/071-3-061009_norm_sample.wav",   "/Audio/095B-3-070208_norm_sample.wav",     "entry.1955398998"],
    ["/Audio/073-3-061009_norm_sample.wav",   "/Audio/096B-3-070209_norm_sample.wav",     "entry.984619616"],
    ["/Audio/095-3-061030_norm_sample.wav",   "/Audio/103B-3-070206_norm_sample.wav",     "entry.1977066748"],
    ["/Audio/096-3-061030_norm_sample.wav",   "/Audio/112B-3-070212_norm_sample.wav",     "entry.1878300647"],
    ["/Audio/103-3-061102_norm_sample.wav",   "/Audio/115B-3-070215_norm_sample.wav",     "entry.1333506195"],
    ["/Audio/112-3-061117_norm_sample.wav",   "/Audio/018B-3-060623_norm_sample.wav",     "entry.245737352"],
    ["/Audio/115-3-061121_norm_sample.wav",   "/Audio/020B-3-060623_norm_sample.wav",     "entry.414680294"],
    ["/Audio/018B-3-060623_norm_sample.wav",   "/Audio/071-3-061009_norm_sample.wav",     "entry.1025052163"],
    ["/Audio/020B-3-060623_norm_sample.wav",   "/Audio/073-3-061009_norm_sample.wav",     "entry.1925596530"],
    ["/Audio/064B-3-061218_norm_sample.wav",   "/Audio/095-3-061030_norm_sample.wav",     "entry.2138249126"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/096-3-061030_norm_sample.wav",     "entry.6330497"],
    ["/Audio/073B-3-061218_norm_sample.wav",   "/Audio/103-3-061102_norm_sample.wav",     "entry.1519920502"],
    ["/Audio/095B-3-070208_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.1565249903"],
    ["/Audio/096B-3-070209_norm_sample.wav",   "/Audio/115-3-061121_norm_sample.wav",     "entry.200374486"],
    ["/Audio/103B-3-070206_norm_sample.wav",   "/Audio/018-3-060327_norm_sample.wav",     "entry.460413823"],
    ["/Audio/112B-3-070212_norm_sample.wav",   "/Audio/020-3-060328_norm_sample.wav",     "entry.1588172806"],
    ["/Audio/115B-3-070215_norm_sample.wav",   "/Audio/064-3-061004_norm_sample.wav",     "entry.1136139842"],
    ["/Audio/018-3-060327_norm_sample.wav",   "/Audio/073B-3-061218_norm_sample.wav",     "entry.1928270241"],
    ["/Audio/020-3-060328_norm_sample.wav",   "/Audio/095B-3-070208_norm_sample.wav",     "entry.1631871487"],
    ["/Audio/064-3-061004_norm_sample.wav",   "/Audio/096B-3-070209_norm_sample.wav",     "entry.1693379801"],
    ["/Audio/071-3-061009_norm_sample.wav",   "/Audio/103B-3-070206_norm_sample.wav",     "entry.1702879672"],
    ["/Audio/073-3-061009_norm_sample.wav",   "/Audio/112B-3-070212_norm_sample.wav",     "entry.1157417677"],
    ["/Audio/095-3-061030_norm_sample.wav",   "/Audio/115B-3-070215_norm_sample.wav",     "entry.143481347"],
    ["/Audio/096-3-061030_norm_sample.wav",   "/Audio/018B-3-060623_norm_sample.wav",     "entry.758756037"],
    ["/Audio/103-3-061102_norm_sample.wav",   "/Audio/020B-3-060623_norm_sample.wav",     "entry.1092467834"],
    ["/Audio/112-3-061117_norm_sample.wav",   "/Audio/064B-3-061218_norm_sample.wav",     "entry.127097722"],
    ["/Audio/115-3-061121_norm_sample.wav",   "/Audio/071B-3-061221_norm_sample.wav",     "entry.1581317459"],
    ["/Audio/018B-3-060623_norm_sample.wav",   "/Audio/095-3-061030_norm_sample.wav",     "entry.601872185"],
    ["/Audio/020B-3-060623_norm_sample.wav",   "/Audio/096-3-061030_norm_sample.wav",     "entry.2128343507"],
    ["/Audio/064B-3-061218_norm_sample.wav",   "/Audio/103-3-061102_norm_sample.wav",     "entry.528502878"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.847124059"],
    ["/Audio/073B-3-061218_norm_sample.wav",   "/Audio/115-3-061121_norm_sample.wav",     "entry.774656081"],

    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.1163467414"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.711537041"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.527175188"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.862730328"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.723274653"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.501768031"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.1038590447"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.1585610338"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.917781276"],
    ["/Audio/071B-3-061221_norm_sample.wav",   "/Audio/112-3-061117_norm_sample.wav",     "entry.424732404"]
];
*/



// actual test files (EXPERIMENT 2 - MATRIX (voice parade) - 45 comparisons)
var questions = [
    // File 1, File 2, Google Forms Id
    ["/Audio/114-3-061121_norm_sample.wav", "/Audio/018B-3-060623_norm_sample.wav","entry.1892256234"],
    ["/Audio/071B-3-061221_norm_sample.wav", "/Audio/010-3-060322_norm_sample.wav","entry.49918461"],
    ["/Audio/071-3-061009_norm_sample.wav", "/Audio/100B-3-070206_norm_sample.wav","entry.1306580115"],
    ["/Audio/018-3-060327_norm_sample.wav", "/Audio/065B-3-061214_norm_sample.wav","entry.660167094"],
    ["/Audio/115-3-061121_norm_sample.wav", "/Audio/065B-3-061214_norm_sample.wav","entry.1540334802"],
    ["/Audio/100B-3-070206_norm_sample.wav", "/Audio/018-3-060327_norm_sample.wav","entry.700673313"],
    ["/Audio/071-3-061009_norm_sample.wav", "/Audio/096B-3-070209_norm_sample.wav","entry.689736028"],
    ["/Audio/115-3-061121_norm_sample.wav", "/Audio/112B-3-070212_norm_sample.wav","entry.1700964310"],
    ["/Audio/003-3-060313_norm_sample.wav", "/Audio/096B-3-070209_norm_sample.wav","entry.997376607"],
    ["/Audio/112B-3-070212_norm_sample.wav", "/Audio/114-3-061121_norm_sample.wav","entry.853761221"],
    ["/Audio/115-3-061121_norm_sample.wav", "/Audio/071B-3-061221_norm_sample.wav","entry.962199474"],
    ["/Audio/018B-3-060623_norm_sample.wav", "/Audio/115-3-061121_norm_sample.wav","entry.1656871955"],
    ["/Audio/115-3-061121_norm_sample.wav", "/Audio/096B-3-070209_norm_sample.wav","entry.653673810"],
    ["/Audio/065-3-061004_norm_sample.wav", "/Audio/071B-3-061221_norm_sample.wav","entry.1955398998"],
    ["/Audio/115-3-061121_norm_sample.wav", "/Audio/100B-3-070206_norm_sample.wav","entry.984619616"],
    ["/Audio/100B-3-070206_norm_sample.wav", "/Audio/003-3-060313_norm_sample.wav","entry.1977066748"],
    ["/Audio/010-3-060322_norm_sample.wav", "/Audio/112B-3-070212_norm_sample.wav","entry.1878300647"],
    ["/Audio/003-3-060313_norm_sample.wav", "/Audio/065B-3-061214_norm_sample.wav","entry.1333506195"],
    ["/Audio/018B-3-060623_norm_sample.wav", "/Audio/003-3-060313_norm_sample.wav","entry.245737352"],
    ["/Audio/071B-3-061221_norm_sample.wav", "/Audio/003-3-060313_norm_sample.wav","entry.414680294"],
    ["/Audio/018-3-060327_norm_sample.wav", "/Audio/071B-3-061221_norm_sample.wav","entry.1025052163"],
    ["/Audio/114-3-061121_norm_sample.wav", "/Audio/010B-3-060621_norm_sample.wav","entry.1925596530"],
    ["/Audio/100B-3-070206_norm_sample.wav", "/Audio/096-3-061030_norm_sample.wav","entry.2138249126"],
    ["/Audio/096B-3-070209_norm_sample.wav", "/Audio/065-3-061004_norm_sample.wav","entry.6330497"],
    ["/Audio/100B-3-070206_norm_sample.wav", "/Audio/010-3-060322_norm_sample.wav","entry.1519920502"],
    ["/Audio/112B-3-070212_norm_sample.wav", "/Audio/003-3-060313_norm_sample.wav","entry.1565249903"],
    ["/Audio/114-3-061121_norm_sample.wav", "/Audio/096B-3-070209_norm_sample.wav","entry.200374486"],
    ["/Audio/065B-3-061214_norm_sample.wav", "/Audio/010-3-060322_norm_sample.wav","entry.460413823"],
    ["/Audio/071-3-061009_norm_sample.wav", "/Audio/112B-3-070212_norm_sample.wav","entry.1588172806"],
    ["/Audio/112B-3-070212_norm_sample.wav", "/Audio/065-3-061004_norm_sample.wav","entry.1136139842"],
    ["/Audio/003-3-060313_norm_sample.wav", "/Audio/010B-3-060621_norm_sample.wav","entry.1928270241"],
    ["/Audio/065-3-061004_norm_sample.wav", "/Audio/100B-3-070206_norm_sample.wav","entry.1631871487"],
    ["/Audio/112B-3-070212_norm_sample.wav", "/Audio/100-3-061031_norm_sample.wav","entry.1693379801"],
    ["/Audio/114-3-061121_norm_sample.wav", "/Audio/065B-3-061214_norm_sample.wav","entry.1702879672"],
    ["/Audio/010-3-060322_norm_sample.wav", "/Audio/096B-3-070209_norm_sample.wav","entry.1157417677"],
    ["/Audio/114-3-061121_norm_sample.wav", "/Audio/100B-3-070206_norm_sample.wav","entry.143481347"],
    ["/Audio/018-3-060327_norm_sample.wav", "/Audio/112B-3-070212_norm_sample.wav","entry.758756037"],
    ["/Audio/003-3-060313_norm_sample.wav", "/Audio/114B-3-070216_norm_sample.wav","entry.1092467834"],
    ["/Audio/115B-3-070215_norm_sample.wav", "/Audio/003-3-060313_norm_sample.wav","entry.127097722"],
    ["/Audio/096-3-061030_norm_sample.wav", "/Audio/112B-3-070212_norm_sample.wav","entry.1581317459"],
    ["/Audio/115B-3-070215_norm_sample.wav", "/Audio/010-3-060322_norm_sample.wav","entry.601872185"],
    ["/Audio/010-3-060322_norm_sample.wav", "/Audio/018B-3-060623_norm_sample.wav","entry.2128343507"],
    ["/Audio/115B-3-070215_norm_sample.wav", "/Audio/114-3-061121_norm_sample.wav","entry.528502878"],
    ["/Audio/096B-3-070209_norm_sample.wav", "/Audio/018-3-060327_norm_sample.wav","entry.847124059"],
    ["/Audio/071B-3-061221_norm_sample.wav", "/Audio/114-3-061121_norm_sample.wav","entry.774656081"]
 ];



// send results to Google
function postToGoogle() {
    var Name = $("input[type='text'][name='name']").val();
    var Email = $("input[type='text'][name='email']").val();
    var Gender = $("#gender option:selected").text();
    var fLang = $("input[type='text'][name='fLang']").val();
    var Accent = $("input[type='text'][name='accent']").val();
    var sLang = $("input[type='text'][name='sLang']").val();
    var Age = $("#age").val();
    var Hearing = $("#hearing option:selected").text();
    var Quiet = $("#quiet option:selected").text();
    var audOut = $("#audOut option:selected").text();
    var Comments = $("textarea[type='text'][name='comments']").val(); 

    var trainFields = [];
    var questionFields = []; // array for storing the similarity rating values

    // for every array in questions
    for(var n in train)
    {
        var i = parseInt( n ) + 1; // comparison number
        var value = null; // variable to retrieve similarity ratings for each comparison
        if ($(window).width() > 900) // if the window width is big enough get the value from radiobuttons (computer)
        {
            value = $("input[type='radio'][name='q" + i.toString() + "']:checked").val();
        }
        else // if the window is not big enough get values from slider (smartphone)
        {
            value = $("input[type='range'][name='q" + i.toString() + "']").val();
        }

        if(value != null) // this is set to null in second line of the for-loop for each n in questions before retrieving the rating value
        {
            trainFields.push( value ); // add value to array trainFields

            try
            {
                localStorage.setItem('q' + i.toString(), value); // store comparison number + rating value
            }
            catch{}
        }
    }

    // for every array in questions
    for(var n in questions)
    {
        var i = parseInt( n ) + 3; // comparison number (Starting past number of train fields)
        var value = null; // variable to retrieve similarity ratings for each comparison
        if ($(window).width() > 900) // if the window width is big enough get the value from radiobuttons (computer)
        {
            value = $("input[type='radio'][name='q" + i.toString() + "']:checked").val();
        }
        else // if the window is not big enough get values from slider (smartphone)
        {
            value = $("input[type='range'][name='q" + i.toString() + "']").val();
        }

        if(value != null) // this is set to null in second line of the for-loop for each n in questions before retrieving the rating value
        {
            questionFields.push( value ); // add value to array questionFields

            try
            {
                localStorage.setItem('q' + i.toString(), value); // store comparison number + rating value
            }
            catch{}
        }
    }

    var allComplete = true;
    var rows = $(".question-row");

    for(var q = 0; q < rows.length; q++)
    {
        var r = $(rows[q]);
        if(!r.hasClass("complete"))
        {
            allComplete = false;
            break;
        }
    }

    var ip = "Unknown";

    if(typeof userip !== 'undefined')
    {
        ip = userip.toString(); // get user 
    }

    if (!allComplete || Gender == "" || fLang == "" || Accent == "" || sLang == "" || Age == "" || Hearing == "" || Quiet == "" || audOut == "" || questionFields.length < questions.length || trainFields.length < train.length) { // if these fields haven't been filled in
        alert('Not all fields/questions have been completed'); // show message to user and do not proceed further
        $("tr").not(':first, thead tr').each(
            function () {
                if (!$(this).hasClass("sel")) {
                    $(this).closest('tr').css("background-color", "#ff3333");
                    defaultColor = "#ff3333";
                }
            });
        if (fLang == "") {
            $("input[type='text'][name='fLang']").css("background-color", "#ff3333");
        }
        if (Age == "") {
            $("#age").css("background-color", "#ff3333");
        }
        if (Accent == "") {
            $("input[type='text'][name='accent']").css("background-color", "#ff3333");
        }
        if(sLang == "")
        {
            $("input[type='text'][name='sLang']").css("background-color", "#ff3333");
        }
    }
    else {
        if(Comments == null)
        {
            Comments = "";
        }

        var data = {
            "entry.536582984": Name, 
            "entry.1974949965": Email, 
            "entry.1763165004": Gender, 
            "entry.1165454118": fLang, 
            "entry.559157509": Accent,
            "entry.914213355": sLang,
            "entry.1346854184": Age, 
            "entry.483439782": Hearing, 
            "entry.1646809941": Quiet,
            "entry.1302133734": audOut,
            "entry.363252003": Comments,
            "entry.947378844": ip 
        }

        for(var i in questionFields) // for every comparison + value
        {
            data[questions[i][2]] = questionFields[i]; // for every comparison get Google Forms Id
        }

        for(var i in trainFields)
        {
            data[train[i][2]] = trainFields[i];
        }

        $.ajax({
            //url: "https://docs.google.com/forms/d/1UV9W907M8jKhciaxbuHhCmAXFChta40VR_mRQQwMbqg/formResponse",
            url: "https://docs.google.com/forms/d/18uNqgTd8XEJIQhh67ixHRp_m-JEBfwmCwgpxB4ikxi8/formResponse",
            data: data,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    window.location.href = 'thankyou.html';
                },
                200: function () {
                    window.location.href = 'thankyou.html';
                }
            }

        });
    }
}


// build rows for comparisons
function BuildRow(i, array, start) {
    var qnum = parseInt(i) + 1 + start; // get comparison number

    var rowStr = "<tr class='question-row'>"; // table row

    rowStr += "<td>" + qnum.toString() + "</td>"; // table data (add comparison number)

    // make audio player
    for (var a = 0; a < 2; a++) {
        rowStr += "<td>";
        rowStr += '<audio class="player" controls>';
        rowStr += '<source src="' + window.location.href.replace('/index.html', '') + array[i][a] + '" type="audio/wav"></audio><input type="button" class="playbutton" value="&#9658;" />'; //type="audio/mp4" changed to "audio/wav"
        rowStr += "</td>";
    }

    {   // make slider
        rowStr += "<td>";

        rowStr += '<div class="slider"><input type="range" name="q' + qnum.toString() + '" id="q' + qnum.toString() + '" value="5" min="1" max="9" /><span class="slider_value">0</span></div>';

        // make radiobuttons
        for (var b = 1; b < 10; b++) {
            var qId = b.toString() + 'q' + qnum.toString();

            rowStr += '<div class="checkboxgroup">';

            rowStr += '<label for="' + qId + '">';
            rowStr += '<input type="radio" name="q' + qnum.toString() + '" value="' + b.toString() + '" id="' + qId + '" />';
            rowStr += '<br />' + b.toString() + '</label>';

            rowStr += '</div>';
        }

        rowStr += "</td>";
    }

    {   // make submit button for each row
        rowStr += "<td>";
        rowStr += '<div class="btn btn-primary btn-sm btn-submit" type="button">Submit</div>';
    }

    rowStr += "</tr>";
    return rowStr;
}

function LayoutTrain()
{
    var tbodyHtml = '';
    for(var i in train)
    {
        tbodyHtml += BuildRow(i, train, 0);
    }
    $("#train-table tbody").html(tbodyHtml);
}

function LayoutTests()
{
    var tbodyHtml = '';
    for(var i in questions)
    {
        tbodyHtml += BuildRow(i, questions, 3);
    }
    $("#maintable tbody").html(tbodyHtml);
}

function StopAllAudio(e)
{
    $("audio").not(e).each(function (index, audio) {
        audio.pause();
        audio.currentTime = 0;
    });
}

// on click radiobuttons retrieve value, change appearance of current row and disable it
$(document).on('click', "input[type='radio']", function () {
    /*$(this).closest('tr').css("background-color", "#66ff99");
    $(this).closest('tr').addClass("sel");
*/
    $(this).closest("tr").find("input[type='range']").val($(this).val());
    $(this).closest("tr").find(".slider_value").html($(this).val());
/*
    // Disable this row, and stop the audio.
    $(this).closest('tr').find('source').attr('src', '');
    $(this).closest('tr').find('audio').addClass('disabled');
    $(this).closest('tr').find('input').prop('disabled', true);
    StopAllAudio(null);*/
});


// What is this for? Do I need to add the other input lines that I would like to include in the survey?
$(document).on('input', "input[type='text'][name='fLang'],input[type='text'][name='sLang'],input[type='number'][name='age']", function () {
    $(this).css("background-color", "");
});


// on input change background colour of row, add selected to class? and find input and set to checked?
$(document).on("input", 'input[type="range"]', function () {
    //$(this).closest('tr').css("background-color", "#66ff99");
   // $(this).closest('tr').addClass("sel");
    $(this).closest("tr").find("input[type='radio']").eq($(this).val() - 1).prop("checked", "checked");
});


/*
// on input disable changes and repeat listening
$(document).on("change", 'input[type="range"]', function () {
    // Disable this row, and stop the audio.
    $(this).closest('tr').find('source').attr('src', '');
    $(this).closest('tr').find('audio').addClass('disabled');
    $(this).closest('tr').find('input').prop('disabled', true);
    $(this).addClass('disabled');
    StopAllAudio(null);
});
*/

// disable row on click 'submit' btn
$(document).on("click",".btn-submit", function () {
    $(this).closest('tr').css("background-color", "#d9d9d9");
    $(this).closest('tr').addClass("sel");

   /* if ($(this).attr('type') == 'radio') {
        $(this).closest("tr").find("input[type='radio']").eq($(this).val() - 1).prop("checked", "checked");
        $(this).closest('tr').find('source').attr('src', '');
    }

    else if ($(this).attr('type') == 'range') {
        $(this).closest("tr").find("input[type='range']").val($(this).val());
        $(this).closest("tr").find(".slider_value").html($(this).val());
    }*/

    if($(this).closest("tr").find("input[type='radio']:checked").length == 0)
    {
        $(this).closest("tr").find("input[type='radio']").eq(4).prop("checked", "checked");
    }

    $(this).closest('tr').addClass("complete")

    $(this).closest('tr').find('audio').addClass('disabled');
    $(this).closest('tr').find('input').prop('disabled', true);
    $(this).addClass('disabled');
    StopAllAudio(null);
});


// check whether gdpr box is checked and disable send option if it is not
$(document).on("change", "#gdpr-checkbox", function(){
    var checked = $("#gdpr-checkbox").is(":checked");
    $('#send').prop("disabled", !checked);
});

// when the document is done loading
$(document).ready(function () {
    // make up the training and testing tables
    LayoutTrain();
    LayoutTests();
    
    // What is this for?
    if (window.navigator.standalone) jQuery.ajaxSetup({ isLocal: true });
    $('#form').submit(function (e) {
        e.preventDefault();

        postToGoogle();

        return false;
    });

    $("audio").on("play", function () {
        StopAllAudio(this);
    });

    // Check whether Internet Explorer is used and send message that it is not supported
    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        alert("Internet Explorer is not supported. Please try again from another browser.");
        $('#send').prop("disabled", true);
    }
    var $players = $('.player');
    var $playButtons = $('.playbutton');

    function onPlayClick(playButton, player) {
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    }


    for (var i = 0; i < $playButtons.length; i++) {
        var playButton = $playButtons[i];
        var player = $players[i];

        $(playButton).click(onPlayClick.bind(null, playButton, player));
    }

    // Why is this?
    if ($(window).width() < 900) {
        $('#audOut').val('Speakers (Internal, Mobile Built-In)');
    }

    $("tr").not(':first, thead tr').hover(
        function () {
            if (!$(this).hasClass("sel")) {
                $(this).css("background", "rgba(0, 155, 228, 0.7)");
            }
        },
        function () {
            if (!$(this).hasClass("sel")) {
                $(this).css("background", defaultColor);
            }
        });
    $('.maintable').stickyTableHeaders();

var rangeSlider = function () {
    var slider = $('input[type="range"]'),
        value = $('.slider_value');

    slider.each(function () {

        value.each(function () {
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        slider.on('input', function () {
            $(this).next(value).html(this.value);
        });
    });
};
rangeSlider();
});


(function ($, window, undefined) {
    'use strict';

    var name = 'stickyTableHeaders',
        id = 0,
        defaults = {
            fixedOffset: 0,
            leftOffset: 0,
            marginTop: 0,
            scrollableArea: window
        };

    function Plugin(el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        base.id = id++;
        base.$window = $(window);
        base.$document = $(document);

        // Listen for destroyed, call teardown
        base.$el.bind('destroyed',
            $.proxy(base.teardown, base));

        // Cache DOM refs for performance reasons
        base.$clonedHeader = null;
        base.$originalHeader = null;

        // Keep track of state
        base.isSticky = false;
        base.hasBeenSticky = false;
        base.leftOffset = null;
        base.topOffset = null;

        base.init = function () {
            base.$el.each(function () {
                var $this = $(this);

                // remove padding on <table> to fix issue #7
                $this.css('padding', 0);

                base.$originalHeader = $('thead:first', this);
                base.$clonedHeader = base.$originalHeader.clone();
                $this.trigger('clonedHeader.' + name, [base.$clonedHeader]);

                base.$clonedHeader.addClass('tableFloatingHeader');
                base.$clonedHeader.css('display', 'none');

                base.$originalHeader.addClass('tableFloatingHeaderOriginal');

                base.$originalHeader.after(base.$clonedHeader);

                base.$printStyle = $('<style type="text/css" media="print">' +
                    '.tableFloatingHeader{display:none !important;}' +
                    '.tableFloatingHeaderOriginal{position:static !important;}' +
                    '</style>');
                $('head').append(base.$printStyle);
            });

            base.setOptions(options);
            base.updateWidth();
            base.toggleHeaders();
            base.bind();
        };

        base.destroy = function () {
            base.$el.unbind('destroyed', base.teardown);
            base.teardown();
        };

        base.teardown = function () {
            if (base.isSticky) {
                base.$originalHeader.css('position', 'static');
            }
            $.removeData(base.el, 'plugin_' + name);
            base.unbind();

            base.$clonedHeader.remove();
            base.$originalHeader.removeClass('tableFloatingHeaderOriginal');
            base.$originalHeader.css('visibility', 'visible');
            base.$printStyle.remove();

            base.el = null;
            base.$el = null;
        };

        base.bind = function () {
            base.$scrollableArea.on('scroll.' + name, base.toggleHeaders);
            if (!base.isWindowScrolling) {
                base.$window.on('scroll.' + name + base.id, base.setPositionValues);
                base.$window.on('resize.' + name + base.id, base.toggleHeaders);
            }
            base.$scrollableArea.on('resize.' + name, base.toggleHeaders);
            base.$scrollableArea.on('resize.' + name, base.updateWidth);
        };

        base.unbind = function () {
            // unbind window events by specifying handle so we don't remove too much
            base.$scrollableArea.off('.' + name, base.toggleHeaders);
            if (!base.isWindowScrolling) {
                base.$window.off('.' + name + base.id, base.setPositionValues);
                base.$window.off('.' + name + base.id, base.toggleHeaders);
            }
            base.$scrollableArea.off('.' + name, base.updateWidth);
        };

        base.toggleHeaders = function () {
            if (base.$el) {
                base.$el.each(function () {
                    var $this = $(this),
                        newLeft,
                        newTopOffset = base.isWindowScrolling ? (
                            isNaN(base.options.fixedOffset) ? base.options.fixedOffset.outerHeight() : base.options.fixedOffset) : base.$scrollableArea.offset().top + (!isNaN(base.options.fixedOffset) ? base.options.fixedOffset : 0),
                        offset = $this.offset(),

                        scrollTop = base.$scrollableArea.scrollTop() + newTopOffset,
                        scrollLeft = base.$scrollableArea.scrollLeft(),

                        scrolledPastTop = base.isWindowScrolling ? scrollTop > offset.top : newTopOffset > offset.top,
                        notScrolledPastBottom = (base.isWindowScrolling ? scrollTop : 0) < (offset.top + $this.height() - base.$clonedHeader.height() - (base.isWindowScrolling ? 0 : newTopOffset));

                    if (scrolledPastTop && notScrolledPastBottom) {
                        newLeft = offset.left - scrollLeft + base.options.leftOffset;
                        base.$originalHeader.css({
                            'position': 'fixed',
                            'margin-top': base.options.marginTop,
                            'left': newLeft,
                            'z-index': 3 // #18: opacity bug
                        });
                        base.leftOffset = newLeft;
                        base.topOffset = newTopOffset;
                        base.$clonedHeader.css('display', '');
                        if (!base.isSticky) {
                            base.isSticky = true;
                            // make sure the width is correct: the user might have resized the browser while in static mode
                            base.updateWidth();
                        }
                        base.setPositionValues();
                    } else if (base.isSticky) {
                        base.$originalHeader.css('position', 'static');
                        base.$clonedHeader.css('display', 'none');
                        base.isSticky = false;
                        base.resetWidth($('td,th', base.$clonedHeader), $('td,th', base.$originalHeader));
                    }
                });
            }
        };

        base.setPositionValues = function () {
            var winScrollTop = base.$window.scrollTop(),
                winScrollLeft = base.$window.scrollLeft();
            if (!base.isSticky || winScrollTop < 0 || winScrollTop + base.$window.height() > base.$document.height() || winScrollLeft < 0 || winScrollLeft + base.$window.width() > base.$document.width()) {
                return;
            }
            base.$originalHeader.css({
                'top': base.topOffset - (base.isWindowScrolling ? 0 : winScrollTop),
                'left': base.leftOffset - (base.isWindowScrolling ? 0 : winScrollLeft)
            });
        };

        base.updateWidth = function () {
            if (!base.isSticky) {
                return;
            }
            // Copy cell widths from clone
            if (!base.$originalHeaderCells) {
                base.$originalHeaderCells = $('th,td', base.$originalHeader);
            }
            if (!base.$clonedHeaderCells) {
                base.$clonedHeaderCells = $('th,td', base.$clonedHeader);
            }
            var cellWidths = base.getWidth(base.$clonedHeaderCells);
            base.setWidth(cellWidths, base.$clonedHeaderCells, base.$originalHeaderCells);

            // Copy row width from whole table
            base.$originalHeader.css('width', base.$clonedHeader.width());
        };

        base.getWidth = function ($clonedHeaders) {
            var widths = [];
            $clonedHeaders.each(function (index) {
                var width, $this = $(this);

                if ($this.css('box-sizing') === 'border-box') {
                    width = $this[0].getBoundingClientRect().width; // #39: border-box bug
                } else {
                    var $origTh = $('th', base.$originalHeader);
                    if ($origTh.css('border-collapse') === 'collapse') {
                        if (window.getComputedStyle) {
                            width = parseFloat(window.getComputedStyle(this, null).width);
                        } else {
                            // ie8 only
                            var leftPadding = parseFloat($this.css('padding-left'));
                            var rightPadding = parseFloat($this.css('padding-right'));
                            // Needs more investigation - this is assuming constant border around this cell and it's neighbours.
                            var border = parseFloat($this.css('border-width'));
                            width = $this.outerWidth() - leftPadding - rightPadding - border;
                        }
                    } else {
                        width = $this.width();
                    }
                }

                widths[index] = width;
            });
            return widths;
        };

        base.setWidth = function (widths, $clonedHeaders, $origHeaders) {
            $clonedHeaders.each(function (index) {
                var width = widths[index];
                $origHeaders.eq(index).css({
                    'min-width': width,
                    'max-width': width
                });
            });
        };

        base.resetWidth = function ($clonedHeaders, $origHeaders) {
            $clonedHeaders.each(function (index) {
                var $this = $(this);
                $origHeaders.eq(index).css({
                    'min-width': $this.css('min-width'),
                    'max-width': $this.css('max-width')
                });
            });
        };

        base.setOptions = function (options) {
            base.options = $.extend({}, defaults, options);
            base.$scrollableArea = $(base.options.scrollableArea);
            base.isWindowScrolling = base.$scrollableArea[0] === window;
        };

        base.updateOptions = function (options) {
            base.setOptions(options);
            // scrollableArea might have changed
            base.unbind();
            base.bind();
            base.updateWidth();
            base.toggleHeaders();
        };

        // Run initializer
        base.init();
    }

    // A plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[name] = function (options) {
        return this.each(function () {
            var instance = $.data(this, 'plugin_' + name);
            if (instance) {
                if (typeof options === 'string') {
                    instance[options].apply(instance);
                } else {
                    instance.updateOptions(options);
                }
            } else if (options !== 'destroy') {
                $.data(this, 'plugin_' + name, new Plugin(this, options));
            }
        });
    };

})(jQuery, window);



// auto-fill in for test purposes
function test()
{
    $("input[type='number']").val(9);
    $("input[type='text']").val("test");

    
    // Set all the rows...
    var rows = $(".question-row");
    var sel = 0;
    for(var n in rows)
    {
        var i = parseInt(n);

        if(isNaN(i)) continue;

        sel += 1;
        if(sel > 9)
        {
            sel = 1;
        }

        $(rows[i]).find("input[type='radio'][value='" + sel + "']").click();
        $(rows[i]).find(".btn-sm").click();
    }
}