// After the API loads, call a function to enable the search box.

$(document).ready(function () {
	results();
	handleAPILoaded();


}); 

function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function results() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}// JavaScript Document



//
//var getVideo = function(tags) {
//	
//	// the parameters we need to pass in our request to YouTube's API
//	var q = $('#query').val();
//  		var request = gapi.client.youtube.search.list({
//    	q: q,
//   		part: 'snippet',
//		safeSearch: 'moderate'
//		//site: 'Google'
// 	 });
//	
//	var result = $.ajax({
//		url: "https://www.googleapis.com/youtube/v3/search" + request,
//		data: request,
//		dataType: "json",
//		type: "GET",
//		})
//	.done(function(result){
//		var searchResults = showSearchResults(request.part, result.items.length);
//
//		$('.search-results').html(searchResults);
//
//		$.each(result.items, function(i, item) {
//			var question = showVideo(item);
//			$('.results').append(video);
//		});
//	})
//	.fail(function(jqXHR, error, errorThrown){
//		var errorElem = showError(error);
//		$('.search-results').append(errorElem);
//	});
//
//};
//
//var showSearchResults = function(query, resultNum) {
//	var results = resultNum + ' results for <strong>' + query;
//	return results;
//};
//
//
//var showVideo = function(video) {
//	
//	// clone our result template code
//	var result = $('#search-container').clone();
//	
//	// Set the question properties in result
//	var questionElem = result.find('video');
//	questionElem.attr('href', video.link);
//	questionElem.text(video.pageInfo);
//
//	return result;
//};
//
//
//// takes error string and turns it into displayable DOM element
//var showError = function(error){
//	var errorElem = $('.templates .error').clone();
//	var errorText = '<p>' + error + '</p>';
//	errorElem.append(errorText);
//};

