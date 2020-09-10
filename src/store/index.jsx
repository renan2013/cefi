import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);



export default new Vuex.Store({
    state: {

        publicaciones: [{
                "img": "img/slides/slide1.jpg",
                "titulo": "",
                "sintesis": "",
                "link": "/vdesarrollo",
                "titulo_link": "Solicitar Viaje"
            },
            {
                "img": "img/slides/slide2.jpg",
                "titulo": "",
                "sintesis": "",
                "link": "/vdesarrollo",
                "titulo_link": "Registro de Mensajería"
            },
            {
                "img": "img/slides/slide3.jpg",
                "titulo": "",
                "sintesis": "",
                "link": "/vdesarrollo",
                "titulo_link": "Servicios"
            }
        ],
        sintesis: [{
                "img": "img/cards/card1.jpg",
                "titulo": "Somos una empresa responsable",
                "sintesis": "Tavo Mensajería le ofrece rapidez y seguridad en la entrega de sus paquetes",
                "link": "/vdesarrollo",
                "titulo_link": "Ver más",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            },
            {
                "img": "https://us.123rf.com/450wm/comzeal/comzeal1602/comzeal160200173/52450552-mano-de-la-mujer-aceptar-una-entrega-de-cajas-de-repartidor.jpg?ver=6",
                "titulo": "Entrega a la puerta de su casa",
                "sintesis": "Nos aseguramos que su encargo llegue siempre a tiempo",
                "link": "/vdesarrollo",
                "titulo_link": "Ver más",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            },
            {
                "img": "https://www.suncoastmarketing.com/wp-content/uploads/2016/03/document_security.jpg",
                "titulo": "Entrega de documentos",
                "sintesis": "Hacemos trámites y entrega de documentos donde lo solicite",
                "link": "/vdesarrollo",
                "titulo_link": "Ver más",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            }

        ],

        desarrollo: {
            "src": "https://us.123rf.com/450wm/comzeal/comzeal1602/comzeal160200173/52450552-mano-de-la-mujer-aceptar-una-entrega-de-cajas-de-repartidor.jpg?ver=6",
            "titulo": "Llegamos a la puerta de su casa",
            "sintesis": "",
            "link": "/vdesarrollo",
            "autor": "Gustavo Mendez",
            "titulo_link": "Ver programa completo",
            "desarrollo": "Nos aseguramos que su encargo llegue siempre a tiempo.Mantenemos las más estrictas normas de higiene para que su producto llegue completamente limpio"
        },

    },
    mutations: {

    },


});