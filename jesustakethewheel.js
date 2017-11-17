const why = "Is everything";
const insanely = "obscure when it";
const comesTo = "anything programming related";

function saveBookmark(event) {
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    event.preventDefault();
}

function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarkResults = document.getElementById('bookmarkResults');
    bookmarkResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarkResults.innerHTML += '<div class="well">'+
                                     '<h3>'+name+
                                     ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '
                                     '</h3>'
                                     '</div>';
    }
}

  
