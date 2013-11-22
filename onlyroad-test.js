// to debug/load and debug from external
/*
 var e = document.createElement("script");
 e.src = 'https://dl.dropboxusercontent.com/s/a60y8az7qzbpok2/onlyroad-test.js?dl=1&token_hash=AAEIFBwdjHTl6RVToXniAM9z-m_9jjC8U86FzCIoxUGxug';
 e.type="text/javascript";
 document.getElementsByTagName("head")[0].appendChild(e);
 */
var load,execute,loadAndExecute,executeJQuery;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})}
,executeJQuery=function(a){if(typeof jQuery=='undefined'){var jqUrl='//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js';loadAndExecute(jqUrl,a);}else{execute(a);}};

executeJQuery(function(){

    // Give some indication that this is not the full list.
    $(".homeLink").text("Forum List (road only)")

    function removeForumRowByText(forums){

        $.each(forums, function( index, value ) {
            e = $("td:contains('" + value + "')");
            e.parent().toggle();
            console.log("Removed: " + value);
        });
    }
    function removeForumRowByPage(forums){

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

    removeForumRowByPage(ovalPages);
    removeForumRowByText(ovalHeaders);


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
    removeForumRowByText(clubHeaders);

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
    removeForumRowByPage(racingAndChampionshipsPages);

    /**
     * Club and Regional
     */
    var regionalHeaders = ["Regional Competitions Discussion"];
    var regionalPages = ["4111"];

    removeForumRowByText(regionalHeaders);
    removeForumRowByPage(regionalPages);

    /**
     * Paint
     */
    var paintHeaders = ["The Paint Booth"];
    var paintPages = ["639", "640"];
    removeForumRowByText(paintHeaders);
    removeForumRowByPage(paintPages);

    /**
     * Technical and Help
     */
    var techPages = [
        "618", // tech - other
        "617" // camera files
    ];
    removeForumRowByPage(techPages);
});