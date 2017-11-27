const config = {
    apiKey: "AIzaSyBM6MoTIg9JO_1q29gKLpr6xELk7uxFy8U",
    authDomain: "mercadodev-e3d0c.firebaseapp.com",
    databaseURL: "https://mercadodev-e3d0c.firebaseio.com",
    projectId: "mercadodev-e3d0c",
    storageBucket: "gs://mercadodev-e3d0c.appspot.com",
    messagingSenderId: "769756043457"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')  
require('firebase/storage')


const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()
export default base