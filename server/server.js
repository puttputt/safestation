
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
		}).slice(0,15);
	},
	graphData: function()
	{
		var crimes = Crimes.find();

		var all = [];
		crimes.forEach(function(crime) {
			var areas = Areas.find({AreaId: crime._id});
			areas.forEach(function(area){
				var station = Stations.findOne({_id: area.StationId});
				var graph = [
					[new Date('2008').getTime(),crime.Crimes["2008"]],
					[new Date('2009').getTime(),crime.Crimes["2009"]],
					[new Date('2010').getTime(),crime.Crimes["2010"]],
					[new Date('2011').getTime(),crime.Crimes["2011"]],
					[new Date('2012').getTime(),crime.Crimes["2012"]],
					[new Date('2013').getTime(),crime.Crimes["2013"]],
					]
				console.log(graph);
				all.push({
					"name": station.StationName,
					"address": station.Address,
					"price": station.Price,
					"area": area.Area,
					"data": graph
				})
			})
			
		});
		return all;
	}
})