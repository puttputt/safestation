import json

with open("crimes.json") as json_file:
    json_data = json.load(json_file)
    lat_long = []

    with open("lat_lon.json") as lat_lon_file:
        lat_long = json.load(lat_lon_file)


    clean_data = []

    neighbourhoods = json_data['Neighbourhoods']

    for n in neighbourhoods:

        if n['Name'] == 'Total':
            break

        name = n['Name']
        long = 0
        lat = 0

        crimes = {'2008': 0, '2009': 0, '2010': 0, '2011': 0,
              '2012': 0, '2013': 0, '2014': 0}


        for area in lat_long['lat_long']:

            if area['name'] == name:
                lat = area['lat']
                long = area['lon']
                break

        for c in n['CrimeSets']:
            year = c['Month'][:4]
            month_crimes = c['CrimeValues']['Assault'] + c['CrimeValues']['B&E (Business)'] + c['CrimeValues']['Drugs&Controlled Substances'] + c['CrimeValues']['Drugs/Substances'] + c['CrimeValues']['Mischief'] + c['CrimeValues']['Offensive Weapons'] + c['CrimeValues']['Robbery-Person'] + c['CrimeValues']['Sexual Assault'] + c['CrimeValues']['Theft of Auto'] + c['CrimeValues']['Violence/Threats'] + c['CrimeValues']['Trafficking and possession stolen goods'] + c['CrimeValues']['Theft From Auto Under $5K'] + c['CrimeValues']['Theft Under $5K']

            crimes[year] = crimes[year] + month_crimes

        clean_data.append({'Name': name,'Longitude': long, 'Latitude': lat, 'Crimes': crimes})

    f= open('clean_data.json','w')
    newData = json.dumps(clean_data, sort_keys=True, indent=4)
    f.write(newData)
    f.close()
