import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);



export default new Vuex.Store({
    state: {

        publicaciones: [{
                "img": "img/slides/slide1.jpg",
                "titulo": "Excel",
                "sintesis": "Descubre la potencia del cálculo",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo"
            },
            {
                "img": "img/slides/slide2.jpg",
                "titulo": "Ofimatica",
                "sintesis": "Descubre la potencia del cálculo",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo"
            },
            {
                "img": "img/slides/slide3.jpg",
                "titulo": "Redes",
                "sintesis": "Descubre la potencia del cálculo",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo"
            }
        ],
        sintesis: [{
                "img": "https://camo.githubusercontent.com/ff0e7a7a7fd515a4099b0cf5c1fd1c251c6c19d7/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f637265617469766574696d5f6275636b65742f70726f64756374732f39362f6f726967696e616c2f6f70745f61645f7468756d626e61696c2e6a7067",
                "titulo": "Excel...",
                "sintesis": "Descubre la potencia del cálculo.....",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            },
            {
                "img": "https://mundocontact.com/wp-content/uploads/2018/12/oracle-escenario.jpg",
                "titulo": "Ofimatica...",
                "sintesis": "Descubre la potencia del cálculo...",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            },
            {
                "img": "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/sintaxis-en-javascript-t1.jpg",
                "titulo": "Redes...",
                "sintesis": "Descubre la potencia del cálculo...",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            },
            {
                "img": "https://mundocontact.com/wp-content/uploads/2018/12/oracle-escenario.jpg",
                "titulo": "Ofimatica...",
                "sintesis": "Descubre la potencia del cálculo...",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            },
            {
                "img": "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/sintaxis-en-javascript-t1.jpg",
                "titulo": "Redes...",
                "sintesis": "Descubre la potencia del cálculo...",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            },
            {
                "img": "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/sintaxis-en-javascript-t1.jpg",
                "titulo": "Redes...",
                "sintesis": "Descubre la potencia del cálculo...",
                "link": "/vdesarrollo",
                "titulo_link": "Ver programa completo",
                "desarrollo": "Aqui va toda la data del desarrollo de la publicacion, la cual puede ser del tamaño que sea necesario, conteniendo todo tipo de informacion"
            },
        ],

        desarrollo: {
            "src": "https://corpusdigital.com/wp-content/uploads/2018/11/Scope-of-Graphic-Designing-in-Future-870x432.jpg",
            "titulo": "Técnico en Diseño Gráfico",
            "sintesis": "Descubre la potencia del cálculo.....",
            "link": "/vdesarrollo",
            "autor":"Ing. Renán Galván",
            "titulo_link": "Ver programa completo",
            "desarrollo": "Este programa es una propuesta técnica en el mundo del diseño gráfico digital, siendo las nuevas tecnologías las que dirigen la dirección de las comunicaciones. La duración de este técnico es de 3 cuatrimestres en un total de 6 cursos cada módulo con el objetivo de conocer y  adquirir destrezas de las herramientas de diseño gráfico digital."
        } ,
        
    },
    mutations: {

    },


});