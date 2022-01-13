async function serverDB() {
    const res = await fetch('http://localhost:4444/users')
    const json = await res.json()

    return json
}

export default serverDB;