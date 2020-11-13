// domain URL
export const apiDomain = "https://property-search-engine-api.herokuapp.com/";

// auth URIs
export const loginRequest = function({password, email}) {
    return {
        method: 'post',
        url: apiDomain + "login",
        data: {
            password: password,
            email: email
        }
    }
};

export const registerRequest = function({password, email, name}) {
    return {
        method: 'post',
        url: apiDomain + "register",
        data: {
            name: name,
            email: email,
            password: password
        }
    }
};

// data requests

// City List
export const locationsRequest = function() {
    return [
      {name: 'West Dustin', id: 1},
      {name: 'South Amya', id: 2},
      {name: 'Langoshside', id: 3},
      {name: 'Lake Leachester', id: 4},
      {name: 'Balistrerichester', id: 5},
      {name: 'Paucekport', id: 6},
      {name: 'Lake Seanshire', id: 7},
      {name: 'New Leatha', id: 8},
      {name: 'Weimannville', id: 9},
      {name: 'Hillsstad', id: 10},
    ];
};

// property search request
export const searchRequest = function(queryString) {
    return {
        method: 'get',
        url: apiDomain + "properties" + queryString,
    }
};

// get a property by id
export const propertyById = function(id) {
    return {
        method: 'get',
        url: apiDomain + "properties/" + id,
    }
};
