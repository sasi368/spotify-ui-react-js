//https://developer.spotify.com/

export const authEndpoint = "https://accounts.spotify.com/authorize";

//redirect to home page once auth

const redirectUri = "http://localhost:3000/";
const clientId = "298af95083b5460ea36fdb247526f637";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = ()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;