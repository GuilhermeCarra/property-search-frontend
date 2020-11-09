// Domain URL
export const apiDomain = "http://localhost:3000/";

// Auth URIs
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
