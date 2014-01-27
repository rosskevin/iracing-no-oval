// ==UserScript==
// @name        iRacing road only
// @namespace   drinkto.me
// @description Userscript for iRacing that hides content unrelated to road racing.  This is opinionated, so YMMV.
// @include     http://members.iracing.com/jforum/forums/list.page
// @include     http://members.iracing.com/membersite/member/*
// @version     1
// @grant       none
// ==/UserScript==
var load,execute,loadAndExecute,executeJQuery;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})}
    ,executeJQuery=function(a){if(typeof jQuery=='undefined'){var jqUrl='//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js';loadAndExecute(jqUrl,a);}else{execute(a);}};

executeJQuery(function(){

    // On membersite, make 'series' link always go to the road filter
    $("td.simpleNav ul li a[href='/membersite/member/Series.do']").attr("href", "/membersite/member/Series.do?cat=2")

    // Give some indication that this is not the full list on forum home.
    $(".homeLink").text("Forum List (road only)")


    //-----------------------------------------------------
    //
    //  Show countdown timer and number registered drivers in title (contributed by @kutu)
    //
    if ("racingpaneldata" in this && racingpaneldata.session) {
        var originalTitle = document.title;
        setInterval(function () {
            var numRegistered = $("#racingpanel_session_numregistered");
            var countdownTimer = $("#racingpanel_countdown_timer");
            if (numRegistered.length && countdownTimer.length) {
                document.title = numRegistered.text() + " " + countdownTimer.text() + " " + originalTitle;
            } else {
                document.title = originalTitle;
            }
        }, 1000);
    }


    //-----------------------------------------------------
    //
    //  Only execute the following if we are on the forum list page
    //
    if(window.location.pathname.indexOf("/list.page") <= 0)
        return;
    else
        console.log("Skipping forum list pruning.");

    function toggleForumRowByText(forums){

        $.each(forums, function( index, value ) {
            e = $("td:contains('" + value + "')");
            e.parent().toggle();
            console.log("Removed: " + value);
        });
    }
    function toggleForumRowByPage(forums){

        $.each(forums, function( index, value ) {
            e = $("td a[href*='/" + value + ".page']");
            text = e.text();
            e.parent().parent().toggle();
            console.log("Removed: " + value + ".page - " + text);
        });
    }

    /**
     * Remove oval
     */
    var ovalPages = [
        "619",
        "620",
        "635",
        "621",
        "3713",
        "624",
        "2911",
        "629",
        "637",
        "623",
        "631",
        "632",
        "5511",
        "6312"
    ];

    var ovalHeaders = ["Oval Racing"];

    toggleForumRowByPage(ovalPages);
    toggleForumRowByText(ovalHeaders);


    /******************************************************
     * OPINIONATED removal below here, just oval is above
     */

    /**
     * Remove club
     */
        // club general discussion
    $("td:contains('Club Discussion Area')").parent().next().remove()
    var clubHeaders = [
        "Club Discussion Area",
        "Club News",
        "Club Stats",
        "Setup Garage"
    ];
    toggleForumRowByText(clubHeaders);

    /**
     * Racing and championships (selected ones only)
     */
    var racingAndChampionshipsPages = [
        "644", // world champ
        "645", // pro
        "647", // licenses, ratings and scoring
        "648", // racing your latest race
        "649", // video and screenshot showcase
        "643" // world cup of iracing
    ];
    toggleForumRowByPage(racingAndChampionshipsPages);

    /**
     * Club and Regional
     */
    var regionalHeaders = ["Regional Competitions Discussion"];
    var regionalPages = ["4111"];

    toggleForumRowByText(regionalHeaders);
    toggleForumRowByPage(regionalPages);

    /**
     * Paint
     */
    var paintHeaders = ["The Paint Booth"];
    var paintPages = ["639", "640"];
    toggleForumRowByText(paintHeaders);
    toggleForumRowByPage(paintPages);

    /**
     * Technical and Help
     */
    var techPages = [
        "618", // tech - other
        "617" // camera files
    ];
    toggleForumRowByPage(techPages);
});