let loadVideo = (()=>{
    // parte privada
    let loadPrivate = (id, url)=>{
        document.getElementById(id).setAttribute('src',url);
    };
    return {
        // parte pública
        showAll: (id, url)=>{
            loadPrivate(id, url);
        }
    }
})();

// se crea clase
class Multimedia{
    #url
    constructor(url){
        this.#url = url;
    }
    getUrl(){
        return this.#url;
    }

    setStart (){
        return 'Este método es para realizar un cambio en la URL del video.'
    }
}


class Reproductor extends Multimedia{
    constructor(id, url){
        super(url);
        this.id = id;
    }

    playMultimedia(){
        loadVideo.showAll(this.id, this.getUrl())
    }

    setStartRep(seconds){
        let newUrl = this.getUrl() + `?start=${seconds}`;
        loadVideo.showAll(this.id, newUrl)
    }

}

let pelicula = new Reproductor('peliculas','https://www.youtube.com/embed/rkdlMDHY2wg');
pelicula.playMultimedia();
pelicula.setStart()

let musica = new Reproductor('musica','https://www.youtube.com/embed/rkdlMDHY2wg');
musica.setStartRep(10);

let serie = new Reproductor('series','https://www.youtube.com/embed/rkdlMDHY2wg');
serie.playMultimedia();


