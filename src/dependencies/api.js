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
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=28`)
            },
            {
                slug: 'terror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=27`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10749`)
            },
            {
                slug: 'war',
                title: 'Guerra',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10752`)
            },
            {
                slug: 'sci-fi',
                title: 'Ficção Científica',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=878`)
            },
            {
                slug: 'fantasy',
                title: 'Fantasia',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=14`)
            },
            {
                slug: 'documentaty',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=99`)
            },
        ]
    }
}


export default api;