<!-- =========================================================================================
    File Name: 
    Description: Login Page
    ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
      </div>
    </section>
    <div class="container pt-lg-md" id="login" >
            <div class="row justify-content-center">
                <div class="col-lg-5" >
                    <card >
                        <template>
                           <center><img
                          src="@/assets/imagenes/page/logo_bitweb.png"
                          alt="login"
                          width="55%"
                          class="mx-auto"
                        /></center>
                            
                        </template>
                        
                        <template>
                        <div class="row justify-content-center" id="datos">
                            <LoginDsoa></LoginDsoa>
                        </div>
                            
                        </template>
                    </card>
                    
                </div>
            </div>
        </div>

    
  </div>
</template>


<script>
import LoginDsoa from "./LoginDsoa.vue";

export default {
  components: {
    LoginDsoa,
  },
};
</script>

<style lang="scss">
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}

#login{
  margin-top: -520px;
 
  
}

.formulario{
  // border:solid 1px red;
  width: 100%;
  
}

.formulario input{
  
}

#datos{
  margin-top: -25px;
}


/* Smartphones (portrait & landscape) */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
  
    #login{
      margin-top: -280px;
      
      
    }
    
   
  

}
</style>
