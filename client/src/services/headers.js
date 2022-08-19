export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        const headers = { token: 'Bearer ' + user.accessToken }
        return headers;
    } else {
        return {};
    }
}