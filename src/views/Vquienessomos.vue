<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section  id="contenido4">
      <div class="container"  >
        <card shadow class="card-profile mt--300"  no-body>
          <div class="px-4">
            <div class="row justify-content-center" >
              <div class="col-lg-3 order-lg-2" >
                <div class="card-profile-image"  >
                  <a href="/">
                    <img
                      v-lazy="'img/logo_cefi_blanco.jpg'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
               
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">120</span>
                    <span class="description">Cursos</span>
                  </div>
                  <div>
                    <span class="heading">10</span>
                    <span class="description">Carreras Técnicas</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>
                CEFI
                <span class="font-weight-light">, Centro de Formación Integral</span>
              </h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>San José, Costa Rica, Centroamérica
              </div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <h3>Misión</h3>
                  <p>
                    Centralizar el conocimiento del Centro de enseñanza y
                    formación integral al servicio de la sociedad.
                    <br />Emprender y construir soluciones de formación académica con
                    responsabilidad y valores.
                    <br />Fortalecer y potencializar a los educandos con el fin de
                    desarrollar liderazgos positivos.
                    <br />Identificar y maximizar el desarrollo familiar.
                  </p>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <h3>Visión</h3>
                  <p>
                    Colocar al Centro de enseñanza y formación integral
                    (CEFI)
                    <br />con un referente global y educación académica.
                    <br />Establecerlo como el mejor Centro de enseñanza de cada
                    Región
                    <br />para incrementar valores éticos y morales.
                    <br />Fomentar perspectivas de innovación con vinculación a la
                    sociedad formando técnicos, asistentes, auxiliares de alta
                    calidad, desempeño y discernimiento creativo.
                    <br />Incrementar el bienestar personal y familiar en cada
                    individuo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
     <Cbotonwatsapp></Cbotonwatsapp>
  </div>
</template>



<script>
import Cbotonwatsapp from "./components/Cbotonwatsapp";
export default {
  components: {
    Cbotonwatsapp
  }
};
</script>
<style>
#contenido4 {
  
  
  margin-top: -430px;
  
}

#logo{
  background-color: white;
  
}




</style>
