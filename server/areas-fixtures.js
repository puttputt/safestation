if(Areas.find().count() == 0)
{
	var stations = Stations.find();
	var areas = [];
	stations.forEach(function(station) {
		var crimes = Crimes.find();
		var shortest;
		var id;
		var area = "";
		console.log(station.StationName);

		crimes.forEach(function(crime) {
			console.log(crime.Name);
			var distance = calcDistance(station.Latitude, station.Longitude, crime.Latitude, crime.Longitude);
			console.log(distance);

			if (distance < shortest || shortest == null)
			{
				console.log(crime.Name);
				shortest = distance;
				area = crime.Name;
				id = crime._id;
			}
		});

		areas.push({
			'StationId': station._id,
			'AreaId': id,
			'Station': station.StationName,
			'Area': area
		});		
	});
	areas.forEach(function(item){
		Areas.insert(item);		
	})
}

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