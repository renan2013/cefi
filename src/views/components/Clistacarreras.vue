<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md" >
      <div class="row justify-content-center" id="contenido2">
       <div class="col-lg-12" > 
             <div id="titulo3">Lista de nuestras carreras</div> 
          <div class="card-columns" id="sintesis">

            <div class="card" v-for="(item, index) in Noticias" :key="index">
              <img class="card-img-top" v-show="item.urlImgsl" :src="item.urlImgsl" alt="Card image cap" />
              <div class="card-body">
                
                <h5 class="card-title">{{item.titulo}}</h5>
                <p class="card-text">{{item.detalle}}</p>

                <router-link :to="item.link">
                  <base-button tag="a" type="primary" class="mt-4">Ver programa completo</base-button>
                </router-link>  

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cbotonwatsapp></Cbotonwatsapp>
  </section>
</template>
<script>
import { mapState } from "vuex";
import Cbotonwatsapp from "./components/Cbotonwatsapp";
 

export default { 
   created() {  
      //carga los publicaciones basicas
      let pedido= {
                    dml: "JU",
                    Credencial: this.getProfile.Credencial,
                    ObjectId: "8107E", 
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "3",
                    categoria:this.catNoticias
                };  
         //if (this.getSlider[0].titulo=="0")        
            this.$store.dispatch("acDsoaPublicaciones", pedido);  

  }, 
   data() {
        return { 
             prueba:""
            } 
   },
 computed: { 
     getProfile() {
            return this.$store.state.dsoaLogin.profile[0];
        },
       ...mapState([  
              "catNoticias",
              "Noticias" 
          ]), 
 },
 updated(){
   
 },

 beforeDestroy() {
   
 }, 

};
 </script>
<style>
#sintesis {
  font-size: 2rem;
  text-align: center;
}

#sintesis a:link {
  color: white;
}

#contenido2{
  margin-top:-60px;
 
 
  
}

#titulo3{
    color:white;
    font-size: 18px;
    border: solid 1px red;
}
</style>
