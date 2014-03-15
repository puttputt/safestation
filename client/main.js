Template.main.helpers({
	'test': function()
	{
		var crimes = Crimes.find();
		var stations = Stations.find();

		crimes.forEach(function(crime) {
			stations.forEach(function(station) {
				console.log(station.StationName);
				console.log(crime.Name);

				
				console.log(calcDistance(station.Latitude, station.Longitude, crime.Latitude, crime.Longitude));
			});
		});

		console.log('test');
	}
});

function calcDistance(lat1, long1, lat2, long2)
{
	var R = 6371; // km
	var dLat = (lat1-lat2) * (3.141/180);
	var dLon = (long1-long2) * (3.141/180);
	var lat1 = lat1 * (3.141/180);
	var lat2 = lat2 * (3.141/180);

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
	return d;
}

Template.main.events({

});

