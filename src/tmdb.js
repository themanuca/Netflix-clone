const API_KEY = 'f4f5997a1cd0647242fd61b4f546ee93';
const API_BASE = 'https://api.themoviedb.org/3';

// Originaos da netflix
//RECOMENDADOS
//EM ALTA
//AÇÃO
//COMEDIA
//TERROR
//ROMANCE
//DOCUMENTARIO
//ANIME 


const basficFetch =async(endpoint)=> {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {

    getHomeList: async ()=>{
        return [
            {
                slug:'originals',
                title:'Originais do Netflix',
                items:await basficFetch(`/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title: 'Recomendados para você',
                items: await basficFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
            },
        
            {
                slug:'toprated',
                title: 'Em Alta',
                items:await basficFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
            },

            {
                slug:'action',
                title: 'Ação',
                items:await basficFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`),
            },
            
            {
                slug:'comedy',
                title: 'Comédia',
                items:await basficFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`),
            },
        
            {
                slug:'horror',
                title: 'Terror',
                items:await basficFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`),
            },

            {
                slug:'romance',
                title: 'Romance',
                items:await basficFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`),
            },

            {
                slug:'anime',
                title: 'anime',
                items:await basficFetch(`/discover/movie?with_genres=6721&language=pt-br&api_key=${API_KEY}`),
            },

        
        
        
        
        ];
    },


    getfilmeInfo: async(filmeId, type)=>{
        let info = {}; 
    
        if(filmeId){
            switch(type){
                case 'movie':
                    info = await basficFetch(`/movie/${filmeId}?language=pt-br&api_key=${API_KEY}`);
            
                break;
                
                case 'tv':
                    info = await basficFetch(`/tv/${filmeId}?language=pt-br&api_key=${API_KEY}`);

                break;
                default:
                    info=null;

                break;
            
            }
        }
        return info;
    
    }


}