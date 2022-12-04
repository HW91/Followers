//https://codepen.io/juanv/pen/gbgjLe
//Use the code as you want, just replace the access tokens, I don't mind, but it would be
//better if you use your own because I might delete the tokens and the code might no longer work.
//The Twitter and Vine counter require PHP, all other counters only use jQuery.
//PHP code that was used to get Vine followers is at the bottom of the page
//The Twitter counter requires two PHP files, I left some references so you can download those PHP files
//Instagram API - New client apps created on Instagram only give access token for your own photos only. New clients appear as "Sandbox Mode", this doesn't apply for clients you created prior to Instagram adding that restriction. If you want to be able to access your own photos, private or public, you can use http://instagram.pixelunion.net to generate an access token, or you can send you client for review to Instagram. With your access token you can access your own private photos and any other public profile, but you cannot access other people's private photos unless you are following them.
//Code for Twitter and Vine is working, but I don't have a hosting to upload the PHP files.
//Instagram made some changes to their API, now my access token doesn't work, I would have to send my application for review to instagram to get a valid access token. 
//Instagram counter will only work with your access token, my access token only allows me to retrieve information of my profile
//This is not a plugin, this is just to show you how easy it is to retrieve information from APIs...

//Get Usernames
var dribbble = 'juanvargas';
var facebook = 'envato';
var instagram = 'juanv911';
var google_plus = '100542012590159373204';
var youtube = 'envato';
var pinterest = 'envato';
var soundcloud ="3207";
var vimeo = "vimeocuration";
var github = 'desandro';
var twitter = 'codepen';
var behance ="juanv911";
var vine = "1150982282283315200";

//Pinterst API V3
$.ajax({
  url: 'https://api.pinterest.com/v3/pidgets/users/'+pinterest+'/pins',
  dataType: 'jsonp',
  type: 'GET',
  success: function(data) {   
    var followers = data.data.user.follower_count;
    var k = kFormatter(followers);
    $('#posts .pinterest .count').append(k); 
    getTotal(followers); 
  } 
}); 

//Dribble API
//Dribble Access Token
var dr_token = '1c73ffb7859f2c1c37450789dce2369af5caa9e18c3df1fa30485cfad79081d8';
$.ajax({
  url: 'https://api.dribbble.com/v1/users/'+dribbble,
  dataType: 'json',
  type: 'GET',
  data:{access_token: dr_token},
  success: function(data) {   
    var followers = data.followers_count;
    var k = kFormatter(followers);
    $('#posts .dribbble .count').append(k); 
    getTotal(followers); 
  } 
}); 
