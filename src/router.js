import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Vingreso from "./views/Vingreso.vue";
import Vclasevirtual from "./views/Vclasevirtual.vue";
import Vlistacarreras from "./views/Vlistacarreras.vue";
import Vquienessomos from "./views/Vquienessomos.vue";
import Vdesarrollo from "./views/Vdesarrollo.vue";
import Voferta from "./views/Voferta.vue";
import Vcarousel from "./views/Vcarousel.vue";
import Vcontacto from "./views/Vcontacto.vue";
import Vpreguntas from "./views/Vpreguntas.vue";
import VpreRegistroVirtual from "./views/VpreRegistroVirtual.vue";


Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
        //aqui van las paginas nuevas del site
        {
            path: "/voferta",
            name: "Voferta",
            components: {
                header: AppHeader,
                default: Voferta,
                footer: AppFooter
            }
        },

        {
            path: "/vcontacto",
            name: "Vcontacto",
            components: {
                header: AppHeader,
                default: Vcontacto,
                footer: AppFooter
            }
        },

        {
            path: "/vpreguntas",
            name: "Vpreguntas",
            components: {
                header: AppHeader,
                default: Vpreguntas,
                footer: AppFooter
            }
        },

        {
            path: "/vcarousel",
            name: "Vcarousel",
            components: {
                header: AppHeader,
                default: Vcarousel,
                footer: AppFooter
            }
        },
        {
            path: "/vingreso",
            name: "Vingreso",
            components: {
                header: AppHeader,
                default: Vingreso,
                footer: AppFooter
            }
        },

        {
            path: "/vdesarrollo/:publicacion",
            name: "Vdesarrollo",
            components: {
                header: AppHeader,
                default: Vdesarrollo,
                footer: AppFooter
            }
        },
        {
            path: "/vquienessomos",
            name: "Vquienessomos",
            components: {
                header: AppHeader,
                default: Vquienessomos,
                footer: AppFooter
            }
        },
        {
            path: "/vlistacarreras",
            name: "Vlistacarreras",
            components: {
                header: AppHeader,
                default: Vlistacarreras,
                footer: AppFooter
            }
        },

        {
            path: "/vclasevirtual",
            name: "Vclasevirtual",
            components: {
                header: AppHeader,
                default: Vclasevirtual,
                footer: AppFooter
            }
        },

        {
            path: "/vpreregistrovirtual",
            name: "VpreRegistroVirtual",
            components: {
                header: AppHeader,
                default: VpreRegistroVirtual,
                footer: AppFooter
            }
        },

        //fin de las vistas personalizadas
        {
            path: "/",
            name: "components",
            components: {
                header: AppHeader,
                default: Components,
                footer: AppFooter
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: {
                header: AppHeader,
                default: Landing,
                footer: AppFooter
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {
                selector: to.hash
            };
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
});