function lowerCaseDrivers(drivers){
    return drivers.map(
        function(dr){
            return dr.toLowerCase()
        }
    )
};

function nameToAttributes(drivers){
    return drivers.map(
        function(dr){
            const spaceIndex = dr.indexOf(" ")
            return { firstName: dr.slice(0, spaceIndex), lastName: dr.slice(spaceIndex+1) }
        }
    )
};

function attributesToPhrase(drivers){
    return drivers.map(
        function(dr){
            return `${dr.name} is from ${dr.hometown}`
        }
    )
};