<!-- =========================================================================================
    File Name: LoginDsoa.vue
    Description: Login Dsoa
    ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div> 

    <vs-alert :active="inputValid" :color="AlertColor" class="text-dark mt-5">{{mensajeLogin}}</vs-alert>

    <vs-input
      v-validate="'required|min:1'"
      data-vv-validate-on="blur"
      name="email"
      icon-no-border
      icon="icon icon-user"
      icon-pack="feather"
      label-placeholder="Usuario"
      v-model="username"
      class="w-full"
    />
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>
    <br />
    <vs-input
      data-vv-validate-on="blur"
      v-validate="'required|min:1|max:15'"
      type="password"
      name="password"
      icon-no-border
      icon="icon icon-lock"
      icon-pack="feather"
      label-placeholder="Contraseña"
      v-model="password"
      class="w-full"
      v-on:change="onchangeConsiguePass"
    />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
      <vs-button
        v-show="username"
        :disabled="!validateUsername"
        @click="inicioSesion('U')"
        color="rgb(11, 189, 135)"
        type="flat"
      >Olvidar Contraseña</vs-button>
    </div>

    <div class="flex flex-wrap justify-between mb-3">
      <center><vs-button type="border" @click="registerUser">Registrarse</vs-button>&nbsp;&nbsp;
      <vs-button :disabled="!validateForm" @click="inicioSesion('L')">Ingresar</vs-button></center>
    </div>
  </div>
</template>

<script>
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";
import router from "@/router";

export default {
  data() {
    return {
      username: "",
      password: "", // en B64  RrQK8n/T0OM=
      checkbox_remember_me: false,
      paramtxt: "",
      headertxt: "",
      AlertColor: "primary",
      mensajeLogin: "",
    };
  },

  created() {
    //BUSCA IP 
    
    this.$store.dispatch("dsoaLogin/acLoginGetip");
  },

  watch: {
    getProfile: function () {
      if (this.getProfile.Celular > "0")
        router.push("/pages/forgot-password").catch(() => {});
      else
        this.$vs.notify({
          title: "GoP informa",

          text: "Usuario No Existe o no Tiene Celular registrado ",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
        });
    },

    // SI HAY PROMPT
    getErrorLogin: function () {
      if (this.getErrorLogin != "0")
        if (this.getErrorLogin == "1002") {
          this.mensajeLogin =
            "Hay un proceso de Recuperacion de Clave Iniciado, Debe de Concluirlo ";

          this.$vs.notify({
            title: "GoP informa",
            text:
              "Hay un proceso de Recuperacion de Clave Iniciado, Debe de Concluirlo ",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "warning",
          });
        } else
          this.$vs.notify({
            title: "GoP informa",

            text: "Se ha producido un error en Login ",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "warning",
          });
    },
  },
  computed: {
    inputValid() {

      /*if (this.getErrorLogin > "0") {
        this.AlertColor = "danger";

        if (this.getErrorLogin == "1002")
          this.mensajeLogin ="Hay un proceso de Recuperacion de Clave Iniciado, Debe de Concluirlo ";
            
        else 
           this.mensajeLogin = "Error en el Ingreso Credenciales Invalidas";

        return true;

      } else   return false;
      */
     return true;

    },
    // recupera el profile
    getProfile() {
      return this.$store.state.dsoaLogin.profile;
    },
    // escucha si el login  respondio error
    getErrorLogin() {
      return this.$store.state.dsoaLogin.errorProfile;
    },

    validateForm() {
      return !this.errors.any() && this.email !== "" && this.password !== "";
    },
    validateUsername() {
      return !this.errors.any() && this.email !== "";
    },
    getPublicIp() {
      return this.$store.state.dsoaLogin.myPublicIP;
    },
    getEncripta() {
      return this.$store.state.dsoaLogin.respuestaEncriptado;
    },
  },
  methods: {
    onchangeConsiguePass() {
      //GO_SHOPMARCA
      this.$store.dispatch("dsoaLogin/acLoginEncripta", this.password);
    }, // METODO busca clave

    //función para iniciar sesión
    inicioSesion: function (indicadorTipoLogin) {
      var origenUrl = "O";

      var header = {
        MODO: "E",
        OBJECTID: "97",
        CREDENCIAL: "REPLACECREDENCIAL",
        USERNAME: this.username,
        REGISTROSXPAGINA: "",
        PAGINA: "",
        ORDERBY: "",
      };

      //crea SdtLogin
      var SdtLogin = {
        action: indicadorTipoLogin,
        username: this.username,
        password: this.getEncripta,
        direccionIP: this.getPublicIp,
        conexionADM: "security",
        credencial: "REPLACECREDENCIAL",
        celular: "",
        email: "",
        nombre: "",
        empresa: "100001",
        passwordOld: "",
        keySecurity: "",
      };

      var loginR = divilib.GetSdtLoginString(SdtLogin);

      //crea parametros
      var parametros = [];
      var parametro1 = {
        NOMBRE: "XML_SOLICITUD",
        OPERADOR: "=",
        VALOR1: loginR,
        VALOR2: "",
        CDATA: "1",
      };
      parametros.push(parametro1);

      //entrega arreglo de parametros recibe texto de parametros
      this.paramtxt = divilib.paramArraytoStrintg(parametros);
      this.headertxt = divilib.GetHeaderString(header);

      //Crea peticion
      var petTxt = {
        header: this.headertxt,
        parametros: this.paramtxt,
        filas: "",
      };

      this.$store.commit("dsoaLogin/MUTSETURL", "O");
      this.$store.commit("dsoaLogin/MUTSETPETICIONTXT", petTxt);
       this.$store.commit('MUT_RECARGAR', 1);

      //agregar usuario a la hora
      var horaNumerico = Date.now();
      console.log("The time elapsed in millisecond is: " + horaNumerico);

      //Crea pedido
      var pedido = {
        dml: "E",
        ObjectId: "97",
        credencial: horaNumerico,
        formatoenvio: "N",
        formatorecibe: "N",
        indicador: "6", //LOGIN
        origenUrl: origenUrl,
        tipoLogin: indicadorTipoLogin,
      };
      //llama action

      this.$store.dispatch("dsoaLogin/acLoginDsoa", pedido);
    },

    checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: "Login Attempt",
          text: "You are already logged in!",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
        });

        return false;
      }
      return true;
    },

    registerUser() {

      let url="http://bitweb.tavocr.com/#/pages/register";
       var win = window.open(url, '_blank');
       win.focus();
      
    },
  },
};
</script>

<style>
.disabled {
  pointer-events: none;
  opacity: 0.6;
}

 
</style>
