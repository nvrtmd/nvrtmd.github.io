---
layout: null
sitemap: false
---

{% assign counter = 0 %}
var documents = [{% for page in site.pages %}{% if page.url contains '.xml' or page.url contains 'assets' or page.url contains 'category' or page.url contains 'tag' %}{% else %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }, {% endif %}{% endfor %}{% for page in site.without-plugin %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }, {% endfor %}{% for page in site.posts %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{site.baseurl}}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.date | date: "%Y/%m/%d" }} - {{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }{% if forloop.last %}{% else %}, {% endif %}{% endfor %}];

var idx = lunr(function () {
    this.use(lunr.ko);
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block" style="background-color: rgb(0, 0, 0, 0.5);" tabindex="-1" role="dialog" aria-labelledby="resultsmodal"><div style="width: 100%; height: 100%; display:flex;"> <div class="modal-content" id="modal-content-wrapper" style="width: 90%; max-width:600px; max-height: 85%;margin: auto;"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body" style="overflow: auto;"> <ul class="mb-0"> </ul></div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';


    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        console.log(results)
        if(results.length>0){
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,100)+'...';
                if (title === "🌑 PLUTO 🌑") {
                    continue;
                }
                console.log(ref, url, title, body);
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /></small></a></li><br />";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different keyword!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });

    $("#lunrsearchresults").on('click', '#modal-content-wrapper', function (e) {
        e.stopPropagation();
    });

    $("#lunrsearchresults").on('click', '#resultsmodal', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});