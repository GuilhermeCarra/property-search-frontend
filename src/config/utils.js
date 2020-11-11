// prepare headers for ajax request
export const getHeader = function() {
    const token = localStorage.getItem("access_token");
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token
    };
    return headers;
};

// get token on localStorage
export const getUser = function() {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user);
    return null;
};

// query builder
export const buildURLQuery = function (obj) {
  return Object.entries(obj)
          .map(pair => pair.map(encodeURIComponent).join('='))
          .join('&');
}

// query string parser
export const queryParser = function (queryStr) {
  let query = queryStr.substring(1);
  let vars = query.split('&');
  let queryObj = {};
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    queryObj[pair[0]] = pair[1];
  }
  return queryObj;
}