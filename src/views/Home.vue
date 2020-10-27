<template>
  <div data-app>
    <div id="app" class="d-flex flex-column" style="min-height:100vh;">
      <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
          <div class="logo_dns">
            <a
              class="svg"
              href="                        https://app.dragnsurvey.com
                        "
            >
              <span class="logo">
                <object
                  data="https://app.dragnsurvey.com/img/logo.svg"
                  type="image/svg+xml"
                  width="100%"
                >
                  <img
                    src="https://app.dragnsurvey.com/img/logo.png"
                    alt="logo Drag'n Survey"
                  />
                </object>
              </span>
            </a>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->

            <ul class="navbar-nav mr-auto ml-5 d-flex justify-content-between">
              <li class="nav-link main-nav-link mr-3">
                <a href="#"> Mes questionnaires</a>
              </li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
              <!-- Authentication Links -->
              <li class="nav-link mr-3">
                <div class="upgradeHeaderBtn">
                  <a
                    href="https://app.dragnsurvey.com/pricing"
                    class="btn btn-dragnsurvey-upgrade"
                    >Mettre à niveau</a
                  >
                </div>
              </li>
              <li class="nav-link mr-3">
                <div class="createSurveyLink">
                  <!--<a href="https://app.dragnsurvey.com/survey/create">Nouveau questionnaire</a>-->
                  <router-link to="/survey/create"
                    >Nouveau questionnaire</router-link
                  >
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  id="navbarDropdown"
                  class="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-pre
                >
                  <span class="userIconDpdwn mr-2">
                    <img src="https://app.dragnsurvey.com/img/user.svg" />
                  </span>
                  <span class="userName mr-2">cutrix</span>
                  <span class="caret"></span>
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    class="dropdown-item"
                    href="https://app.dragnsurvey.com/account"
                  >
                    Mon compte
                  </a>
                  <a
                    class="dropdown-item"
                    href="https://app.dragnsurvey.com/address-book"
                  >
                    Carnet d&#039;adresses
                  </a>
                  <a
                    class="dropdown-item"
                    href="https://app.dragnsurvey.com/help-center"
                  >
                    Centre d&#039;aide
                  </a>
                  <a
                    class="dropdown-item"
                    href="https://app.dragnsurvey.com/fr/logout"
                    onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"
                  >
                    Déconnexion
                  </a>

                  <form
                    id="logout-form"
                    action="https://app.dragnsurvey.com/fr/logout"
                    method="POST"
                    style="display: none;"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="d1rSb2PXuMrcPMv3TiNM2UWUyptkmHdru8MLwA2Q"
                    />
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main class="py-4 mb-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <div
                class="d-flex col-sm-12 surveyNavigation p-0 surveysMasterNav"
              >
                <a href="#" class="flex-fill step current">
                  Mes questionnaires</a
                >
                <a
                  href="https://app.dragnsurvey.com/master"
                  class="flex-fill step "
                >
                  Gestion des utilisateurs</a
                >
              </div>
              <v-data-table
                :headers="headers"
                :items="items"
                item-key="name"
                class="elevation-1"
                :search="search"
                :custom-filter="filterOnlyCapsText"
              >
                <!--<template v-slot:top>
                  <v-text-field
                    v-model="search"
                    label="Search (UPPER CASE ONLY)"
                    class="mx-4"
                  ></v-text-field>
                </template>-->
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)" style="color: #139C6E">
                    mdi-pencil
                  </v-icon>
                  <v-icon small class="mr-2" @click="shareItem(item)" style="color: #139C6E">
                    mdi-share-variant
                  </v-icon>
                  <v-icon small class="mr-2" @click="chartItem(item)" style="color: #139C6E">
                    mdi-chart-arc
                  </v-icon>
                  <v-icon small @click="deleteItem(item)" style="color: #139C6E">
                    mdi-delete
                  </v-icon>
                </template>
              </v-data-table>
              <!--<div id="dnsSurveysListContainer">
                <table class="table" id="dnsSurveysList">
                  <thead>
                    <tr>
                      <th style="width:450px">Titre</th>
                      <th>Créé le</th>
                      <th>Réponses</th>
                      <th data-priority="1">Actions</th>
                    </tr>
                  </thead>
                  <tbody data-dns-surveys-table-body=""></tbody>
                </table>
              </div>-->
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
                      <object
                        data="https://app.dragnsurvey.com/img/logo.svg"
                        type="image/svg+xml"
                        width="100%"
                      >
                        <img
                          src="https://app.dragnsurvey.com/img/logo.png"
                          alt="logo Drag'n Survey"
                        />
                      </object>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-sm-2">
                <p class="mt-3">
                  <a href="https://app.dragnsurvey.com/fr/contactez-nous"
                    >Contactez-nous</a
                  >
                </p>
              </div>
              <div class="col-sm-2">
                <p class="mt-3">
                  <a href="https://developer.dragnsurvey.com">API</a>
                </p>
              </div>
              <div class="col-sm-2">
                <p class="mt-3">
                  <a href="https://app.dragnsurvey.com/fr/conditions-generales"
                    >Conditions générales</a
                  >
                </p>
              </div>
              <div class="col-sm-3">
                <p class="mt-3">
                  <a
                    href="https://app.dragnsurvey.com/fr/politique-confidentialite"
                    >Politique de confidentialité</a
                  >
                </p>
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
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component
export default class Home extends Vue {
  private search = "";
  private calories = "";
  private desserts: object = [
    {
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: "1%"
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: "1%"
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: "7%"
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: "8%"
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: "16%"
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: "0%"
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: "2%"
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: "45%"
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: "22%"
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: "6%"
    }
  ];
  private items: object = [];

  public created() {
    axios.get("data.json").then(s => {
      //console.log(JSON.stringify(s));
      this.items = s.data;
    });
  }

  public filterOnlyCapsText(value: string, search: string, item: any) {
    return (
      value != null &&
      search != null &&
      true &&
      value
        .toString()
        .toLocaleUpperCase()
        .indexOf(search) !== -1
    );
  }

  public editItem(item: object) {
    return null;
  }

  public deleteItem(item: object) {
    return null;
  }

  public shareItem(item: object) {
    return null;
  }

  public chartItem(item: object) {
    return null;
  }

  get headers() {
    return [
      {
        text: "Titre",
        align: "start",
        sortable: "titre",
        value: "titre"
      },
      {
        text: "Créé le",
        value: "createdAt"
      },
      {
        text: "Réponses",
        value: "reponses"
      },
      { text: "Actions", value: "actions", sortable: false }
    ];
  }
}
</script>
<style>
.v-data-table-header {
  background-color: #139c6e;
  color: #fff;
}

.v-data-table-header th {
  color: white;
}
</style>
