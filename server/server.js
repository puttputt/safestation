
Meteor.methods({
	rank: function()
	{
		var crimes = Crimes.find();

		var all = [];
		crimes.forEach(function(crime) {
			var areas = Areas.find({AreaId: crime._id});
			areas.forEach(function(area){
				all.push({
					"station": area.Station,
					"count": crime.Crimes["2013"]
				})
			})
			
		});
		return all.sort(function(a,b){
			return a.count-b.count;
		});
	}
})