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
export const getToken = function() {
    const token = localStorage.getItem("access_token");
    if (token) return token;
    return null;
};

// email validation
export const validateEmail = function(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}