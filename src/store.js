// Importa reactive dalla libreria Vue
import {reactive} from "vue";
// Crea un oggetto reactive store che contiene le informazioni che devono essere condivise tra i vari componenti
export const store = reactive({
    movies: [],  // Array vuoto inizializzato per contenere i risultati delle ricerche sui film
    tvSeries: [],  // Array vuoto inizializzato per contenere i risultati delle ricerche sulle serie tv
    searchText: '', // Stringa vuota inizializzata per contenere il testo della ricerca effettuata
    navGen: ['Home', 'Serie TV', 'Film', 'Originali', 'Aggiunti di recente', 'La mia lista'],   // Array contenente i nomi dei generi che compaiono nella barra di navigazione
    
    // Oggetto che contiene informazioni di configurazione dell'applicazione
    config: {
        urlMovies: 'https://api.themoviedb.org/3/search/movie',
        urlSeries: 'https://api.themoviedb.org/3/search/tv',
        apiKey: 'api_key=5adcd134eb7fa6e79d60ffe6d8f08f2b'
    }
})