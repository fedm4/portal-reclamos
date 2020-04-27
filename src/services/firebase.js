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
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.database = app.database();
        this.storage = app.storage();
    }

    async generarReclamo (reclamo) {
        delete reclamo.id;
        try {
            await this.subirImagen(reclamo.imagen);
            const ret = this.database.ref('/reclamos/')
                .push(reclamo);
            return ret.key;
        } catch (err) {
            //TODO: Remover imagen de storage
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
        const fileRef = this.storage
            .ref()
            .child(`images/${imagen.name}`);
        try {
            await fileRef.put(imagen);
        }catch(err) {
            throw err;
        }
    }
}

export default Firebase;