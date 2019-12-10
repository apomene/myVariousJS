'use strict'

$(document).ready(function () {
    loadInit();   
});

function loadInit() {
    var id = $('#selMovieId').text();
    loadDetails(id);
}

function loadDetails(id) {
    var selectedPoster = id + ' poster';
    var selectedOverview = id + ' overview';
    var selectedTitle = id + ' title';
    var selectedDate = id + ' release';
    var selectedRating = id + ' rating';
    var genres = document.getElementsByClassName(id+' gennres-ids');
    var genresIds = [];
    for (let i = 0; i < genres.length; i++) {
        genresIds.push(genres[i].textContent);
    }
    getGenreNames(genresIds);
    $('#selMovieId').text(id);
    var imageParh = "https://image.tmdb.org/t/p/w342/" + document.getElementById(selectedPoster).textContent;
    $("#imagePoster").attr("src", imageParh);
    var description = document.getElementById(selectedOverview).textContent;
    $('#movieDescr').html(description);
    var title = document.getElementById(selectedTitle).textContent;
    var releaseDate = document.getElementById(selectedDate).textContent;
    $('#movieTitle').html(title + ' (' + releaseDate.split('-')[0] + ')');    
    var rating = document.getElementById(selectedRating).textContent;
    $('#rating').html(rating);
    HighlightSelection(id);
}

function getGenreNames(genresIds) {

    $.ajax({
        timeout: 10000,
        type: "POST",
        url: "/Home/GetGenreNames",
        traditional: true,
        data: { 'genresIds': genresIds },         
        success: function (data) {
            for (var name in data) {
                CreateGenreElements(data[name]);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('AJAX error:' + thrownError);
        },
        complete: function () {
            
        }
    });
}

function CreateGenreElements(genreName){
    var genreDiv = document.getElementById("genres");
    //1st we remove all existing genre elements
    while (genreDiv.firstChild) {
        genreDiv.removeChild(genreDiv.firstChild);
      }
    ///we add new genres to a new div and 
    //add the newly created element and its content into the DOM
    var newContent = document.createTextNode(genreName);    
    genreDiv.appendChild(newContent);  
}

function HighlightSelection(id){
    /// Highlight Selected movie: remove class titleListSelected from all and then assign to selected movie
    var allTitles = document.getElementsByClassName('titleList');
    for (let i = 0; i < allTitles.length; i++) {
        var elelment = document.getElementById(allTitles[i].id);
        elelment.classList.remove('titleListSelected');
    }
    $('#' + id).addClass('titleListSelected');
}

