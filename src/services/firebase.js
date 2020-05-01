import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config ={
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
/**
 * Clase Firebase, para centralizar
 * la lógica del servicio de firebase
 * en base de datos y storage
 */
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.database = app.database();
        this.storage = app.storage();
        this.reclamos = [];
    }

    getFileRef (imagenRef) {
        try {
            const fileRef = this.storage
                .ref()
                .child(`images/${imagenRef}`);
            return fileRef;
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * Genero nuevo reclamo guardando archivo
     * en storage.
     * @param {Reclamo} reclamo 
     * @param {File} imagen 
     */
    async generarReclamo (reclamo, imagen) {
        delete reclamo.id;
        try {
            if(imagen) await this.subirImagen(imagen);
            const ret = this.database.ref('/reclamos/')
                .push(reclamo);
            return ret.key;
        } catch (err) {
            if(imagen) this.borrarImagen(imagen);
            //TODO: Tirar error 
        }
    }
    /**
     * Recibe una referencia de la imagen, crea
     * una referencia en storage, y la sube.
     * 
     * @param {File} imagen 
     */
    async subirImagen (imagen) {
        const fileRef = this.getFileRef(imagen.name);
        try {
            await fileRef.put(imagen);
        }catch(err) {
            console.log(err);
        }
    }

    /**
     * Borra la imagen del storage. 
     * Utilizado en caso de error generando 
     * reclamo.
     * @param {File} imagen 
     */
    async borrarImagen (imagen) {
        try{
            const fileRef = this.getFileRef(imagen.name);
            await fileRef.delete();
        }catch (err) {
            console.log(err);
        }
    }

    /**
     * 
     */
    async getImage (imageName) {
        if(!imageName) return null;
        try {
            const fileRef = this.getFileRef(imageName);
            return await fileRef.getDownloadURL();
        }catch(err) {
            console.log(err);
        }
    }
    /**
     * 
     */
    async getReclamos (setReclamos) {
        try{
            const dataRef = await this.database.ref('/reclamos/');
            dataRef.on('value', snapshot => setReclamos(snapshot.val()));
        }catch(err) {
            console.log(err);
        }
    }
}

export default Firebase;