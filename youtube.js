$(document).ready(function() {

    let key = 'AIzaSyDh8y4jw8k5zuCGbIk3eL_baUDcKw2hlGI';
    let playListId = 'PLKdO3BmwZWnfGm9vDzYoAwaf8y-Dp2A8a';
    let URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    let options = {
        part: 'snippet',
        key: key,
        maxResults: 10,
        playListId: playListId
    }
    loadVids();

    function loadVids() {
        $.getJson(URL, options, function(data) {
            console.log(data);
            let id = data.items[0].snippet.resourceId.videoId;
            mainVid();
        })
    }

    function MainVid() {
        $(#video).html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        `);
    }

    function resultsLoop() {

    }
});