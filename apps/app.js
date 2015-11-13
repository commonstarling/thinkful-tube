//function to clear input box after search
function resetForm() {
	$('#query').val('');
}

function checkInput() {
	var userSearch = $("#query").val();
	if (userSearch == "") {
		alert("Please type a search term");
	}
}

$(document).ready(function () { 
	//function to 
	function getResults(query) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				"part": "snippet",
				"key": "AIzaSyCt4unH9lYMnXE92TLtgOsJSy_8JZJ6Gho",
				"q": query 
			},
			function (data) {
				displayResults(data.items);
			}

		);
	}

	function displayResults(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			console.log(video.snippet.thumbnails.medium.url);
			console.log('http://youtube.com/watch?v=' + video.id.videoId);
			html = html + "<p>" + video.snippet.title + "</p><a href='http://youtube.com/watch?v=" + video.id.videoId + "' target='_blank'><img src='" + video.snippet.thumbnails.high.url + "'/></a>";

		});
		$("#search-results").html(html);
	}

	$("#search-term").submit(function (event) {
		event.preventDefault();
		checkInput();
		getResults($("#query").val());
		resetForm();
	});
});