if(Crimes.find().count() == 0)
{
	Crimes.insert({
			"Name":"Al Ritchie",
			"Longitude": -104.5785016,
			"Latitude": 50.4400944,
			"Crimes": {
				2008: 22,
				2009: 23,
				2010: 44,
				2011: 88,
				2012: 75,
				2013: 50
			}
			});
	
}