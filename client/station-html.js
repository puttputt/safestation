
Template.safe.rendered = function() {
	Meteor.call('rank', true, function(error, result) {
			
      result.forEach(function(station) {
      	
      		$('#safe').append(html(station.name, station.address, station.price, station.count));
      });
	});
}

Template.spooky.rendered = function() {
	Meteor.call('rank', false, function(error, result) {

      result.forEach(function(station) {
      		$('#spooky').append(html(station.name, station.address, station.price, station.count));
      });
	});
}

function html(name, address, price, count){
	return '<div class="station"><div class="stationPrice">'+ price +'¢</div><div class="stationInfo"><div class="stationTitle">'+ name+'</div><div class="stationAddress">'+address+'</div></div><div class="stationRating">'+ (100- (count/1532) * 100).toFixed(0) +'.0</div></div>';
}

/*
Template.graphs.rendered = function() {
	Meteor.call('graphData', function(error, result) {

	console.log(result[0].data);
	$.plot("#placeholder", [result[0].data], {
				xaxis: { mode: "time" }
			});
	});
}*/