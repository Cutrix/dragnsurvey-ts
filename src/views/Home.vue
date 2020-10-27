<template>
  <div>
    <div id="app" class="d-flex flex-column" style="min-height:100vh;">
      <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
          <div class="logo_dns">
            <a class="svg" href="                        https://app.dragnsurvey.com
                        ">
                    <span class="logo">
                        <object data="https://app.dragnsurvey.com/img/logo.svg" type="image/svg+xml" width="100%">
                                        <img src="https://app.dragnsurvey.com/img/logo.png" alt="logo Drag'n Survey"/>
                        </object>
                    </span>
            </a>
          </div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->

            <ul class="navbar-nav mr-auto ml-5 d-flex justify-content-between">
              <li class="nav-link main-nav-link mr-3" ><a href="#"> Mes questionnaires</a></li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
              <!-- Authentication Links -->
              <li class="nav-link mr-3"><div class="upgradeHeaderBtn"> <a href="https://app.dragnsurvey.com/pricing" class="btn btn-dragnsurvey-upgrade">Mettre à niveau</a></div></li>
              <li class="nav-link mr-3"><div class="createSurveyLink">
                <!--<a href="https://app.dragnsurvey.com/survey/create">Nouveau questionnaire</a>-->
                <router-link to="/survey/create">Nouveau questionnaire</router-link>
              </div></li>
              <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                  <span class="userIconDpdwn mr-2"> <img src="https://app.dragnsurvey.com/img/user.svg" /> </span>
                  <span class="userName mr-2">cutrix</span>
                  <span class="caret"></span>
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="https://app.dragnsurvey.com/account">
                    Mon compte
                  </a>
                  <a class="dropdown-item" href="https://app.dragnsurvey.com/address-book">
                    Carnet d&#039;adresses
                  </a>
                  <a class="dropdown-item" href="https://app.dragnsurvey.com/help-center">
                    Centre d&#039;aide
                  </a>
                  <a class="dropdown-item" href="https://app.dragnsurvey.com/fr/logout"
                     onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                    Déconnexion
                  </a>

                  <form id="logout-form" action="https://app.dragnsurvey.com/fr/logout" method="POST"
                        style="display: none;">
                    <input type="hidden" name="_token" value="d1rSb2PXuMrcPMv3TiNM2UWUyptkmHdru8MLwA2Q">                                </form>
                </div>
              </li>


            </ul>
          </div>
        </div>
      </nav>

      <main class="py-4 mb-5">
        <div class="container">


          <div class="row">
            <div  class="col-sm-9">
              <div class="d-flex col-sm-12 surveyNavigation p-0 surveysMasterNav" >
                <a href="#" class="flex-fill step current" > Mes questionnaires</a>
                <a href="https://app.dragnsurvey.com/master" class="flex-fill step " > Gestion des utilisateurs</a>
              </div>
              <div id="dnsSurveysListContainer"></div>
            </div>
            <div id="dnsLogoContainer" class="col-sm-3"></div>
          </div>
        </div>
      </main>

      <footer class="mt-auto">
        <div class="container">
          <div class="row py-5">
            <div class="col-sm-12 row">
              <div class="col-sm-3">
                <div class="logo_dns">
                  <a class="svg" href="https://app.dragnsurvey.com">
                    <span class="logo">
                        <object data="https://app.dragnsurvey.com/img/logo.svg" type="image/svg+xml" width="100%">
                                        <img src="https://app.dragnsurvey.com/img/logo.png" alt="logo Drag'n Survey"/>
                        </object>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-sm-2">
                <p class="mt-3"> <a href="https://app.dragnsurvey.com/fr/contactez-nous">Contactez-nous</a></p>
              </div>
              <div class="col-sm-2">
                <p class="mt-3"> <a href="https://developer.dragnsurvey.com">API</a></p>
              </div>
              <div class="col-sm-2">
                <p class="mt-3"> <a href="https://app.dragnsurvey.com/fr/conditions-generales">Conditions générales</a></p>
              </div>
              <div class="col-sm-3">
                <p class="mt-3"> <a href="https://app.dragnsurvey.com/fr/politique-confidentialite">Politique de confidentialité</a></p>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
