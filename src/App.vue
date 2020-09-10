<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
                {{}}
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>


import {mapState} from "vuex"; 

import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  },
  created() { 

      /*
      //carga los publicaciones basicas
      let pedido= {
                    dml: "JU",
                    Credencial: this.getProfile.Credencial,
                    ObjectId: "8107E",
                    ObjectId2:"8105C", // el de las publicaciones
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "3",
                    categoria:this.catImagenes
                }; 

      if (this.isImagenes)
        {
         pedido.categoria=this.catImagenes;
         this.$store.dispatch("acDsoaPublicaciones", pedido);

         }
  
      if (this.isVideos)
        {
         pedido.categoria=this.catVideos;
         this.$store.dispatch("acDsoaPublicaciones", pedido);

         }
      
       if (this.isNoticias)
          {
         pedido.categoria=this.catNoticias;
         this.$store.dispatch("acDsoaPublicaciones", pedido);

         }

      if (this.isSlider)
         {
         pedido.categoria=this.catSlider;
         pedido.ObjectId="8107E";
         this.$store.dispatch("acDsoaPublicaciones", pedido); 
         }

*/
  }, 
  
  computed: { 
           
        
        getProfile() {
            return this.$store.state.dsoaLogin.profile[0];
        },
        
    
     } 
};
</script>

<style scoped>

</style>
