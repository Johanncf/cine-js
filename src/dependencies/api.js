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
                title: 'Filmes mais populares do Cine JS',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc`)
            },
            {
                slug: 'toprated',
                title: 'Séries mais vistas no Cine JS',
                items: await basicFetch(`/discover/tv?api_key=${myKey}&language=pt-br&sort_by=popularity.desc`)
            },
            {
                slug: 'romance',
                title: 'Filmes românticos',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10749&include_adult=false`)
            },
            {
                slug: 'fantasy',
                title: 'Filmes de ficção fantástica',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=14&include_adult=false`)
            },
            {
                slug: 'documentaty',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=99`)
            },

        ]
    },
    getMovieList: async () => {
        return [
            {
                slug: 'toprated',
                title: 'Filmes em destaque',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&include_adult=false`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10749&include_adult=false`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=28&include_adult=false`)
            },
            {
                slug: 'terror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=27&include_adult=false`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10749&include_adult=false`)
            },
            {
                slug: 'war',
                title: 'Guerra',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10752&include_adult=false`)
            },
            {
                slug: 'sci-fi',
                title: 'Ficção Científica',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=878&include_adult=false`)
            },
            {
                slug: 'fantasy',
                title: 'Fantasia',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=14&include_adult=false`)
            },
            {
                slug: 'documentaty',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=99`)
            },
        ]
    },
    getSerieList: async () => {
        return [
            {
                slug: 'toprated',
                title: 'Séries em destaque',
                items: await basicFetch(`/discover/tv?api_key=${myKey}&language=pt-br&sort_by=popularity.desc`)
            },
            {
                slug: 'comedy',
                title: 'Séries de comédia',
                items: await basicFetch(`/discover/tv?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=35`)
            },
            {
                slug: 'Action & Adventure',
                title: 'Ação',
                items: await basicFetch(`/discover/tv?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10759`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/tv?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10749`)
            },
            {
                slug: 'war',
                title: 'Guerra',
                items: await basicFetch(`/discover/tv?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10752`)
            },
            {
                slug: 'Sci-Fi & Fantasy',
                title: 'Ficção Científica',
                items: await basicFetch(`/discover/tv?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=10765`)
            },
            {
                slug: 'documentaty',
                title: 'Documentários',
                items: await basicFetch(`/discover/tv?api_key=${myKey}&language=pt-br&sort_by=popularity.desc&with_genres=99`)
            },
        ]
    }

}


export default api;