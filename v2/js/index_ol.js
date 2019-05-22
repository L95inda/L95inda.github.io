var defaultColor = "";

var expectedCount = -1;

var nextPage = "";

var isTrain = false;

// training files to get used to presentation and adjust volume
var train = [
    // File 1, File 2, Google Forms Id
    ['Audio/095-2-061030_sample29_training.wav', 'Audio/054-2-060612_sample2_training.wav',     "entry.1762625825"],
    ['Audio/093-2-061024_sample16_training.wav', 'Audio/059-2-060615_sample3_training.wav',     "entry.71688659"],
    ['Audio/079-2-061016_sample24_training.wav', 'Audio/036-2-060501_sample6_training.wav',     "entry.206446725"],
    ['Audio/017-2-060327_sample6_training.wav', 'Audio/060-2-060615_sample10_training.wav',     "entry.987091516"],
    ['Audio/027-2-060426_sample11_training.wav', 'Audio/029-2-060426_sample13_training.wav',    "entry.900940266"]
];


// actual test files (55 comparisons)
var questions = [
    // File 1, File 2, Google Forms Id
    ['Audio/017-2-060327_sample25.wav', 'Audio/027-2-060426_sample26.wav',     "entry.1892256234"],
    ['Audio/093-2-061024_sample19.wav', 'Audio/017-2-060327_sample8.wav',     "entry.49918461"],
    ['Audio/054-2-060612_sample39.wav', 'Audio/017-2-060327_sample28.wav',     "entry.1306580115"],
    ['Audio/060-2-060615_sample18.wav', 'Audio/060-2-060615_sample4.wav',     "entry.660167094"],   // same speaker
    ['Audio/029-2-060426_sample4.wav', 'Audio/029-2-060426_sample21.wav',     "entry.1540334802"],  // same speaker

    ['Audio/093-2-061024_sample3.wav', 'Audio/095-2-061030_sample1.wav',     "entry.700673313"],
    ['Audio/095-2-061030_sample38.wav', 'Audio/029-2-060426_sample22.wav',     "entry.689736028"],
    ['Audio/095-2-061030_sample18.wav', 'Audio/060-2-060615_sample1.wav',     "entry.1700964310"],
    ['Audio/017-2-060327_sample9.wav', 'Audio/059-2-060615_sample2.wav',     "entry.997376607"],
    ['Audio/079-2-061016_sample18.wav', 'Audio/029-2-060426_sample29.wav',     "entry.853761221"],

    ['Audio/036-2-060501_sample12.wav', 'Audio/059-2-060615_sample21.wav',     "entry.962199474"],
    ['Audio/060-2-060615_sample23.wav', 'Audio/079-2-061016_sample2.wav',     "entry.1656871955"],
    ['Audio/093-2-061024_sample23.wav', 'Audio/093-2-061024_sample5.wav',     "entry.653673810"], // same speaker
    ['Audio/079-2-061016_sample24.wav', 'Audio/036-2-060501_sample2.wav',     "entry.1955398998"],
    ['Audio/054-2-060612_sample32.wav', 'Audio/036-2-060501_sample13.wav',     "entry.984619616"],

    ['Audio/054-2-060612_sample12.wav', 'Audio/054-2-060612_sample3.wav',     "entry.1977066748"],  // same speaker
    ['Audio/093-2-061024_sample4.wav', 'Audio/027-2-060426_sample6.wav',     "entry.1878300647"],
    ['Audio/079-2-061016_sample25.wav', 'Audio/027-2-060426_sample7.wav',     "entry.1333506195"],
    ['Audio/036-2-060501_sample6.wav', 'Audio/095-2-061030_sample26.wav',     "entry.245737352"],
    ['Audio/095-2-061030_sample36.wav', 'Audio/095-2-061030_sample37.wav',     "entry.414680294"], // same speaker

    ['Audio/079-2-061016_sample12.wav', 'Audio/095-2-061030_sample5.wav',     "entry.1025052163"],
    ['Audio/027-2-060426_sample28.wav', 'Audio/059-2-060615_sample16.wav',     "entry.1925596530"],
    ['Audio/017-2-060327_sample15.wav', 'Audio/095-2-061030_sample15.wav',     "entry.2138249126"],
    ['Audio/017-2-060327_sample16.wav', 'Audio/017-2-060327_sample18.wav',     "entry.6330497"], // same speaker
    ['Audio/036-2-060501_sample1.wav', 'Audio/027-2-060426_sample22.wav',     "entry.1519920502"],

    ['Audio/054-2-060612_sample33.wav', 'Audio/079-2-061016_sample5.wav',     "entry.1565249903"],
    ['Audio/027-2-060426_sample15.wav', 'Audio/060-2-060615_sample25.wav',     "entry.200374486"],
    ['Audio/093-2-061024_sample12.wav', 'Audio/029-2-060426_sample24.wav',     "entry.460413823"],
    ['Audio/079-2-061016_sample6.wav', 'Audio/079-2-061016_sample20.wav',     "entry.1588172806"],  // same speaker
    ['Audio/054-2-060612_sample40.wav', 'Audio/029-2-060426_sample8.wav',     "entry.1136139842"],

    ['Audio/017-2-060327_sample29.wav', 'Audio/036-2-060501_sample3.wav',     "entry.1928270241"],
    ['Audio/060-2-060615_sample20.wav', 'Audio/054-2-060612_sample34.wav',     "entry.1631871487"],
    ['Audio/027-2-060426_sample18.wav', 'Audio/027-2-060426_sample4.wav',     "entry.1693379801"],  // same speaker
    ['Audio/036-2-060501_sample7.wav', 'Audio/060-2-060615_sample11.wav',     "entry.1702879672"],
    ['Audio/059-2-060615_sample6.wav', 'Audio/095-2-061030_sample21.wav',     "entry.1157417677"],

    ['Audio/059-2-060615_sample30.wav', 'Audio/079-2-061016_sample26.wav',     "entry.143481347"],
    ['Audio/059-2-060615_sample18.wav', 'Audio/093-2-061024_sample16.wav',     "entry.758756037"],
    ['Audio/029-2-060426_sample28.wav', 'Audio/017-2-060327_sample27.wav',     "entry.1092467834"],
    ['Audio/036-2-060501_sample10.wav', 'Audio/093-2-061024_sample7.wav',     "entry.127097722"],
    ['Audio/027-2-060426_sample21.wav', 'Audio/054-2-060612_sample19.wav',     "entry.1581317459"],

    ['Audio/060-2-060615_sample21.wav', 'Audio/093-2-061024_sample9.wav',     "entry.601872185"],
    ['Audio/093-2-061024_sample15.wav', 'Audio/079-2-061016_sample9.wav',     "entry.2128343507"],
    ['Audio/079-2-061016_sample1.wav', 'Audio/017-2-060327_sample5.wav',     "entry.528502878"],
    ['Audio/036-2-060501_sample4.wav', 'Audio/036-2-060501_sample5.wav',     "entry.847124059"],   // same speaker
    ['Audio/054-2-060612_sample21.wav', 'Audio/093-2-061024_sample14.wav',     "entry.774656081"],

    ['Audio/027-2-060426_sample1.wav', 'Audio/095-2-061030_sample2.wav',     "entry.1163467414"],
    ['Audio/029-2-060426_sample1.wav', 'Audio/059-2-060615_sample1.wav',     "entry.711537041"],
    ['Audio/059-2-060615_sample8.wav', 'Audio/059-2-060615_sample10.wav',     "entry.527175188"],  // same speaker
    ['Audio/017-2-060327_sample32.wav', 'Audio/060-2-060615_sample10.wav',     "entry.862730328"],
    ['Audio/054-2-060612_sample27.wav', 'Audio/095-2-061030_sample29.wav',     "entry.723274653"],

    ['Audio/059-2-060615_sample11.wav', 'Audio/054-2-060612_sample22.wav',     "entry.501768031"],
    ['Audio/027-2-060426_sample29.wav', 'Audio/029-2-060426_sample13.wav',     "entry.1038590447"],
    ['Audio/060-2-060615_sample15.wav', 'Audio/029-2-060426_sample5.wav',     "entry.1585610338"],
    ['Audio/060-2-060615_sample2.wav', 'Audio/059-2-060615_sample9.wav',     "entry.917781276"],
    ['Audio/029-2-060426_sample26.wav', 'Audio/036-2-060501_sample11.wav',     "entry.424732404"]
];


// send results to Google
function postToGoogle(data) {
    var hiddenFields = $("input[type='hidden']");
    for(var i = 0; i < hiddenFields.length; i++)
    {
        var field = hiddenFields[i];
        data[$(field).attr('name')] = $(field).val();
    }

    var ip = "Unknown";

    if(typeof userip !== 'undefined')
    {
        ip = userip.toString(); // get ip address 
    }

    data['entry.363252003'] = $("textarea[type='text'][name='comments']").val(); 
    data['entry.947378844'] = ip;
    delete data['id'];

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


// build rows for comparisons
function BuildRow(i, array, start) {
    var qnum = parseInt(i) + 1 + start; // get comparison number

    var googleId = array[i][2];
    var rowStr = "<tr class='question-row audio-row' id='" + googleId + "'>"; // table row

    rowStr += "<td>" + qnum.toString() + "</td>"; // table data (add comparison number)

    // make audio player
    for (var a = 0; a < 2; a++) { // change a<2 to a<1 to only have one player (adapt list of audio files and table header accordingly!)
        rowStr += "<td>";
        rowStr += '<audio class="player" controls>';
        rowStr += '<source src="' + array[i][a] + '" type="audio/wav"></audio><input type="button" class="playbutton" value="&#9658;" />'; //type="audio/mp4" changed to "audio/wav"
        rowStr += "</td>";
    }

    {   // make slider
        rowStr += "<td id='" + googleId + "'>";

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
        rowStr += '<div class="btn btn-primary btn-sm btn-submit" type="button"><span class="btn-text">Submit</span><span class="btn-icon"><i class="fas fa-check"></i></span></div>';
    }

    rowStr += "</tr>";
    return rowStr;
}

function LayoutTrain()
{
    var tbodyHtml = '';
    for(var i in train)
    {
        expectedCount ++;
        tbodyHtml += BuildRow(i, train, 0);
    }
    $("#train-table tbody").html(tbodyHtml);

    SetupPlayersAndSliders();
}

// old version, one page only
function LayoutTests()
{
    var tbodyHtml = '';
    for(var i in questions)
    {
        expectedCount ++;
        tbodyHtml += BuildRow(i, questions, 3);
    }
    $("#maintable tbody").html(tbodyHtml);

    SetupPlayersAndSliders();
}

// new version, several pages
function LayoutTestsPartial(start, end)
{
    var tbodyHtml = '';
    for(var i in questions)
    {
        if(i < start || i > end) continue;

        expectedCount ++;
        tbodyHtml += BuildRow(i, questions, 5);
    }
    $("#maintable tbody").html(tbodyHtml);

    SetupPlayersAndSliders();
}

function StopAllAudio(e)
{
    $("audio").not(e).each(function (index, audio) {
        audio.pause();
        audio.currentTime = 0;
    });
}

// on click radiobuttons retrieve value, and change slider value if window size changes
$(document).on('click', "input[type='radio']", function () {

    $(this).closest("tr").find("input[type='range']").val($(this).val());
    $(this).closest("tr").find(".slider_value").html($(this).val());

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

    if($(".complete").length > expectedCount)
    {
        $("#send").prop('disabled', false);
    }
});

// when the document is done loading
$(document).ready(function () {
    // make up the training and testing tables
    //LayoutTrain();
    //LayoutTests();

    $('#form').submit(function (e) {
        e.preventDefault();

        var fd = {};
        var audioRows = $(".audio-row");
        for(var i = 0; i < audioRows.length; i++)
        {
            var row = audioRows[i];
            var value = null; // variable to retrieve similarity ratings for each comparison
            if ($(window).width() > 900) // if the window width is big enough get the value from radiobuttons (computer)
            {
                value = $(row).find("input[type='radio']:checked").val();
            }
            else // if the window is not big enough get values from slider (smartphone)
            {
                value = $(row).find("input[type='range']").val();
            }

            if(value != null)
            {
                var key = $(row).attr('id');
                fd[key] = value;
            }
        }
        fd['id'] = localStorage.getItem("sessionId");

        for(var key in fd)
        {
            $(form).append("<input type='hidden' name='" + key + "' value='" + fd[key] + "' />");
        }

        if(nextPage == "thankyou.html")
        {
            // is the last submit, post to google!
            postToGoogle(fd);
            nextPage = null;
        }

        SubmitForm($(this).serialize(), fd, nextPage);

        return false;
    });
    
    // What is this for?
    if (window.navigator.standalone) jQuery.ajaxSetup({ isLocal: true });

    $("audio").on("play", function () {
        StopAllAudio(this);
    });
    
});


// only let one player play at a time
/*window.addEventListener("play", function(e)
{
    if(window.$_currentlyPlaying)
    {
        window.$_currentlyPlaying.pause();
    }
    window.$_currentlyPlaying = e.target;
}, true);*/


function SetupPlayersAndSliders()
{

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
            if(isTrain)
            {
                var valueStr = this.value.toString();
                var popoverText = '';

                if(valueStr == '1')
                {
                    popoverText = "Very Dissimilar";
                }
                else if(valueStr == '2')
                {
                    popoverText = "Moderately Dissimilar";
                }
                else if(valueStr == '3')
                {
                    popoverText = "Slightly Dissimilar";
                }
                else if(valueStr == '4')
                {
                    popoverText = "Very Slightly Dissimilar";
                }
                else if(valueStr == '5')
                {
                    popoverText = "Midpoint";
                }
                else if(valueStr == '6')
                {
                    popoverText = "Very Slightly Similar";
                }
                else if(valueStr == '7')
                {
                    popoverText = "Slightly Similar";
                }
                else if(valueStr == '8')
                {
                    popoverText = "Moderately Similar";
                }
                else if(valueStr == '9')
                {
                    popoverText = "Very Similar";
                }

                popoverText = valueStr + ' - ' + popoverText;

                $(this).next(value).html(popoverText);
            }
            else
            {
                $(this).next(value).html(this.value);
            }
            //var val = this.value;
        });
    });
};
rangeSlider();
$("audio").on("play", function () {
        StopAllAudio(this);
    });
}

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