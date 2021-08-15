const cityIDMap = new Map();

// Weather data for a city can be obtained from the weather API using that cities' ID.
// The cityIDMap maps city names to the ID that the weather API uses.
cityIDMap.set('chicago', 4887398)
cityIDMap.set('fortmyers', 4155995)
cityIDMap.set('siouxfalls', 5231851)

module.exports = cityIDMap