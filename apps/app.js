//function to clear input box after search
function resetForm() {
	$('#query').val('');
}

$(document).ready(function () { 
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
			html = html + "<li><p>" + video.snippet.title +
				"</p><a href='http://youtube.com'><img src='" +  video.snippet.thumbnails.high.url + "'/></a></li>" ;

		});
		$("#search-results").html(html);
	}

	$("#search-term").submit(function (event) {
		event.preventDefault();
		getResults($("#query").val());
		resetForm();
	});
});