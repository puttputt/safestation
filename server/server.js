
Meteor.methods({
	rank: function(order)
	{
		var crimes = Crimes.find();

		var all = [];
		crimes.forEach(function(crime) {
			var areas = Areas.find({AreaId: crime._id});
			areas.forEach(function(area){
				var station = Stations.findOne({_id: area.StationId});
				all.push({
					"name": station.StationName,
					"address": station.Address,
					"price": station.Price,
					"area": area.Area,
					"count": crime.Crimes["2013"]
				})
			})
			
		});
		return all.sort(function(a,b){
			if(order)
				return a.count-b.count;
			else
				return b.count-a.count;
		});
	}
})