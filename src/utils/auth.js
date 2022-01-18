export default function isAuthenticated() {
    const values = JSON.parse(localStorage.getItem('cine-js-auth'))
    if (values === null) return false
    if (values.token === '0xj4h0vi4') return true
    else return false
}