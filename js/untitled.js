console.log('hello');

//array of elements/pages
var heading_array["geology", "bathroom", "cafeteria", "bombs", "infrastructure", "food cart", "westbeth", "labs", "futures", "sculpture", "pipes"];

// var ri = Math.floor(Math.random() * heading_array.length); // Random Index position in the array
// var result = heading_array[ri];


function randomFrom(heading_array){
    var randomIndex = Math.floor(Math.random() * heading_array.length);
    return arr[randomIndex];
}



//video embeds, or do these have to be links

//<iframe width="420" height="315" src="https://www.youtube.com/embed/misc407kWvs" frameborder="0" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/zUE5UClp1Ys" frameborder="0" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/pc0TrN3v-8w" frameborder="0" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/70xDCokzAck" frameborder="0" allowfullscreen></iframe>

//array of captions
// ['plantation', 1971', '1966', '1895', '1936', '1948', '1952', 'A Mathematical Theory of Communication', 'spring street', E.A.T.', '2-G lunchroom', 'war on terror', '9 evenings', 'west st. cafeteria', 'Bell Labs', 'underground chinese kitchen', 'divining rod', 'an object is no longer an object', "feed 4,000 24/7", 
// '2,500 meals per day', 'cryptanalysts', 'water fountain', 'westbeth playwrights feminist collective', '150 gallons of ice cream per week', 'dance riots', 'corporate research powerhouse', 'Hudson River', 'Alan Turing', 'Claude Shannon', 'Merce Cunningham', 'minimalism', 'cold civil wars on terror', 'convention summers','like a photograph come to life']


//array of source images
// ["http://cdn2.dropmark.com/108792/89a15516e728967d2e9f0948daf45aa45f36a1b7/!st%20West%20Street%20cafeteria%201926-nocaption.jpg", 
// "http://cdn2.dropmark.com/108792/50bb280eb830cea8c28304c8a188643bb7c1f990/!st%20West%20Street%20cafeteria%201926.jpg",
// "http://cdn2.dropmark.com/108792/0ff89a5871fa55c09da770ea5aab04804486461d/object-IMG_6595.jpg",
// "http://cdn2.dropmark.com/108792/a3c9543904f5ac66d9783547165d263d4e67f87b/Screen%20Shot%202016-07-26%20at%209.54.27%20PM.png",
// "http://cdn2.dropmark.com/108792/082daa32c4659c0f1dfcb8445a8851df75eb53ed/Screen%20Shot%202016-07-30%20at%2010.23.05%20AM.png",
// "http://cdn2.dropmark.com/108792/6b592a91e2b901dd556a22c88b813f410036c138/Alan_Turing.jpg",
// "http://cdn2.dropmark.com/108792/08f269c0301fd2e7f71fd08b9d4025119d7170cf/Roberts-Claude-Shannon-782.jpg",
// "http://cdn2.dropmark.com/108792/9faa2bc21b78558984524dcd5e12542b55a28913/IMG_6757.jpg",
// "http://cdn2.dropmark.com/108792/f4d3ba6c5efaaab5beb037cfdb8b5a9dbc060a00/IMG_5907.JPG",
// "http://cdn2.dropmark.com/108792/b162e7198105ded7458e40f3342a6196b09331d4/IMG_7157_1.jpg",
// "http://cdn2.dropmark.com/108792/ffe0a72deaafa197c6bdf959be41d6abf24c3e0c/1874-watermap.jpg",
// "http://cdn2.dropmark.com/108792/685d3d95d9c7deb10107fb416763e21dcff622bd/IMG_6220%20copy.jpg",
// "http://cdn2.dropmark.com/108792/934930b0762cdce1f846e30b210689ebab8683bf/F_000.jpg",
// "http://cdn2.dropmark.com/108792/686c7f5e59b50a7d08c0fffc76804790c031734a/1904-block.png",
// "http://cdn2.dropmark.com/108792/8792d7eb888f059a1040c639430597b643def495/2391%2046.jpg",
// "http://cdn2.dropmark.com/108792/865c3d32f91bb215c9d24090b1ac7e407d0fa905/flavin.jpg",
// "http://cdn2.dropmark.com/108792/ee6e4eac2cab41749499812ef9e68b0825e2eebb/IMG_6883.jpg",
// "http://cdn2.dropmark.com/108792/1a2b2d93e54267a5a057e8099b7d9b0a534fff81/image_crop1.jpeg",
// "http://cdn2.dropmark.com/108792/a02bdd04f5198ac591b07b8e89c88c5d1f3168b5/9_eve-eat-artforum-februar-1967.jpg",
// "http://cdn2.dropmark.com/108792/da53aef69707e2e3a11a21d9e15aee4c5e8754b3/IMG_6482.jpg",
// "http://cdn2.dropmark.com/108792/0d4d4ab8b39d7c8b7da08ce50f1036008a0da1f2/File_004.jpg",
// "http://cdn2.dropmark.com/108792/a626419f1b4ad26f6ac870bfd5f0b74a7ef423cc/IMG_5846.JPG",
// "http://cdn2.dropmark.com/108792/38e7368a30d5178276c589fb91f7ee19c5f24e39/IMG_6641.jpg",
// "http://cdn2.dropmark.com/108792/258568c485c6a71392034a113d8484edce2323a8/1024px-Manhttan_Project_Organization_Chart.gif",
// "http://cdn2.dropmark.com/108792/7c76a98703e2205257e52a290d0d5420470dcee2/1024px-Y12_Calutron_Operators.jpg",
// "http://cdn2.dropmark.com/108792/136ab86f62d0fc698669adf74cc3097614265dbc/Screen%20Shot%202016-07-26%20at%209.54.03%20PM.png",
//"http://cdn2.dropmark.com/108792/505008a3d06c8d0ad0a6defe311a2ba93299efae/Screen%20Shot%202016-06-12%20at%203.30.13%20PM.png"
// ]



$(document).ready(function() {

	// console.log(window.location.pathname);
	if (window.location.pathname=="/") {
		// code that runs on the home page
		console.log('home page');
	}
	else if (window.location.pathname=="/geology_detail.html") {
		// code that runs on some other specific page 
		console.log('geology page');


		// or you can use http://www.w3schools.com/jsref/met_win_setinterval.asp
		// to have it happen on an interval

		// setTimeout(function() {
		// 	var img_div = $('.detail-img');
		// 	img_div.attr("src","http://i.imgur.com/rpLHOisb.jpg");
		// }, 5000);
	
	}

});
