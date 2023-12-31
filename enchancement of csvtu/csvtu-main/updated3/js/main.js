$(document).ready(function() {
    $('.carousel').slick({
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [{
            breakpoint: 2400,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3
            }
        },{
            breakpoint: 1600,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 880,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1
            }
        }]
    });

    $('#announcement-list').paginate({ itemsPerPage: 3 });
    $('#news-list').paginate({ itemsPerPage: 3 });
    $('#events-list').paginate({ itemsPerPage: 3 });

    if ($('#announcement-list').length <= 3) {
        $('#announcement-list-previous,#announcement-list-next').addClass('disabled');
    }

    if ($('#events-list').children().length <= 3) {
        $('#events-list-previous,#events-list-next').addClass('disabled');
    }

    if ($('#news-list').length <= 3) {
        $('#news-list-previous,#news-list-next').addClass('disabled');
    }
});

function contributors($arg){

    if ($arg === undefined || $arg == '' || $arg == 'all')
        console.log("%cContributors List\n\n"+"%c--Designed by--"+
        "%c\nMofid Ansari (ansarimofid@gmail.com)\nPratyush Singh (singh.pratyush96@gmail.com)\n\n %c--Core Developers--\n%cMofid Ansari (ansarimofid@gmail.com)\nPratyush Singh (singh.pratyush96@gmail.com)\nSaurabh Jain (saurabhjn76@gmail.com)\n\n%c--Supporting Developers--\n%cRajuKoushik (g.rajukoushik@gmail.com)\nKamal Awasthi (kamalawasthi97@gmail.com)\nAvi Aryan (avi.aryan123@gmail.com)\n\n%c--Contribution through reporting issues--\n%cHarish Krupo (harishkrupo@gmail.com)\nShalinee Singh (shalinee43@gmail.com)\nMayank Maurya (mayankm522@gmail.com)\nNavneet Nandan (navneet.nandan8@gmail.com)\nPrem Chand Saini (premchandsaini779@gmail.com)\nUnni Rajendra (unni332265@gmail.com)\nRavi Kishan Jha (ravikishan77@gmail.com)\nAnkit Kumar (ankit.kumar071460@yahoo.com)",'color:rgb(163,169,72);text-align:center;font-size:2em','color: rgb(15,108,107);font-size:1.5em;text-align:center','color:rgb(50,50,50);font-size:1.0.5em','color: rgb(15,108,107);font-size:1.5em;','color:rgb(50,50,50);font-size:1.0.5em','color: rgb(15,108,107);font-size:1.5em;','color:rgb(50,50,50);font-size:1.0.5em','color: rgb(15,108,107);font-size:1.2em;','color:rgb(50,50,50);font-size:1.0.5em');
    else if($arg == 'designer' || $arg =='design' || $arg =='designers')
        console.log("%c--Designed by--%c\nMofid Ansari (ansarimofid@gmail.com)\nPratyush Singh (singh.pratyush96@gmail.com)",'color: rgb(15,108,107);font-size:1.5em;text-align:center','color:rgb(50,50,50);font-size:1.0.5em');
    else if($arg == 'devs' || $arg == 'dev' || $arg == 'developers' || $arg == 'developer')
    console.log("%c--Core Developers--\n%cMofid Ansari (ansarimofid@gmail.com)\nPratyush Singh (singh.pratyush96@gmail.com)\nSaurabh Jain (saurabhjn76@gmail.com)\n\n%c--Supporting Developers--\n%cRajuKoushik (g.rajukoushik@gmail.com)\nKamal Awasthi (kamalawasthi97@gmail.com)\nAvi Aryan (avi.aryan123@gmail.com)",'color: rgb(15,108,107);font-size:1.5em;','color:rgb(50,50,50);font-size:1.0.5em','color: rgb(15,108,107);font-size:1.5em;','color:rgb(50,50,50);');

    return "Thank You";
}

console.log("Type %c contributors()%c to get list of contributors.\n %carguments(optional):all,devs,designers",'color:rgb(15,108,107)','color:rgb(50,50,50);','color:blue');

(function(a){a.fn.paginate=function(b){var c=function(l,m){var d={itemsPerPage:10,selector:{next:l.selector+"-next",previous:l.selector+"-previous",pagination:l.selector+"-pagination"},cssClassName:{disabled:"disabled"}};var m=a.extend(d,m);var h=1;var e=1;var i=0;var k=function(){i=l.children().size();e=Math.ceil(i/m.itemsPerPage);if(e>1){a(m.selector.pagination).show();a(m.selector.previous).addClass(m.cssClassName.disabled)}l.children().hide();l.children().slice(0,m.itemsPerPage).show();a(m.selector.previous).click(function(n){n.preventDefault();g()});a(m.selector.next).click(function(n){n.preventDefault();f()});l.show()};var j=function(o){h=o;startPage=(h-1)*m.itemsPerPage;endPage=startPage+m.itemsPerPage;l.children().hide().slice(startPage,endPage).show();var n=m.cssClassName.disabled;a(m.selector.pagination+" a").removeClass(n);if(h<=1){a(m.selector.previous).addClass(n)}else{if(h==e){a(m.selector.next).addClass(n)}}};var f=function(){if(h<e){j(h+1)}};var g=function(){if(h>1){j(h-1)}};k();return this};return new c(this,b)}})(jQuery);