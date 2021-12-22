const baseURL = "https://api.themoviedb.org/3"
const myKey = "282103306c0f2d844dd322f8aea537a6"

const basicFetch = async (endpoint) => {
    try{
        const req = await fetch(`${baseURL}${endpoint}`);
        const json = await req.json();
        return json
    } catch {
        console.log('A resquisição falhou')
    }
}

const api = {
    getHomeList: async () => {
        return [
            {
                slug: 'toprated',
                title: 'Em destaque',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc`)
            },
    
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=35`)
            }
        ]
    }
}


export default api;