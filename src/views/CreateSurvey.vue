<template>
  <div>
    <div id="app" class="d-flex flex-column" style="min-height:100vh;">
      <haut />

      <main class="py-4 mb-5" style="color: red">
        <v-carousel hide-delimiters :show-arrows="true" ref="carousel">
          <div class="container createSurveyContainer">
            <div
              id="carouselCreateSurvey"
              class="carousel slide"
            >
              <v-carousel-item>
                <div class="carousel-item active">
                  <div class="surveyCreateTitle py-2">
                    Choisir une manière de créer votre questionnaire
                  </div>

                  <div
                    class="col-sm-12 col-md-10 offset-md-1 row d-flex align-items-stretch justify-content-center"
                  >
                    <div
                      class="p-5 col-sm-4  d-flex align-items-stretch position-relative"
                    >
                      <div
                        class="surveyCreationType p-5 d-flex align-content-end flex-column"
                      >
                        <p class="w-50 m-auto mb-3">
                          Créer un questionnaire en partant de zéro.
                        </p>
                        <img src="/img/dragon/create_survey.svg" />
                        <div class="mt-3">
                          <button
                            class="btn btn-outline-success outline-dragnsurvey text-uppercase createSurveyBtn"
                            data-create="self"
                          >
                            Créer un questionnaire
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      class=" p-5 col-sm-4 d-flex align-items-stretch position-relative"
                    >
                      <div
                        class="surveyCreationType p-5 d-flex align-content-end flex-column"
                      >
                        <p class="w-50 m-auto mb-3">
                          Dupliquer un de vos questionnaires.
                        </p>

                        <img src="/img/dragon/copy_survey.svg" />

                        <div class="mt-3">
                          <button
                            class="btn btn-outline-success outline-dragnsurvey text-uppercase createSurveyBtn"
                            data-create="copy"
                          >
                            Copier un questionnaire
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      class=" p-5 col-sm-4 d-flex align-items-stretch position-relative"
                    >
                      <div
                        class="surveyCreationType p-5 d-flex align-content-end flex-column"
                      >
                        <p class="w-50 m-auto mb-3">
                          Créer à partir d&#039;un modèle Drag&#039;n Survey
                        </p>
                        <img
                          src="https://app.dragnsurvey.com/img/dragon/choose_template.svg"
                        />
                        <div class="mt-3">
                          <button
                            class="btn btn-outline-success outline-dragnsurvey text-uppercase createSurveyBtn"
                            data-create="model"
                          >
                            Choisir un modèle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
            </div>
          </div>

          <div class="container createSurveyContainer">
            <div id="carouselCreateSurvey2" class="carousel slide">
              <v-carousel-item>
                <div class="p-5 h-100">
                  <div class="d-flex flex-row-reverse">
                    <span data-dismiss="form" class="dismissCreateForm"
                      ><i class="fal fa-times"></i
                    ></span>
                  </div>
                  <div class="surveyCreateTitle">
                    Créez votre questionnaire
                  </div>
                  <form
                    class="needs-validation"
                    novalidate
                    action="https://app.dragnsurvey.com/survey/add"
                    method="post"
                    id="createSurveyForm"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="d1rSb2PXuMrcPMv3TiNM2UWUyptkmHdru8MLwA2Q"
                    />
                    <input type="hidden" name="type" />
                    <div class="form-group">
                      <label for="title">Titre du questionnaire</label>
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        aria-describedby="titleHelp"
                        placeholder="Titre du questionnaire"
                        value=""
                        required
                      />
                      <small id="titleHelp" class="form-text text-muted"
                        >Le titre de votre questionnaire doit être unique</small
                      >
                      <div class="invalid-feedback">
                        Vous devez renseigner un titre pour votre questionnaire
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="surveys_list d-none col-sm-4">
                        <label for="">Choisir un questionnaire à copier</label>
                        <select
                          class="form-control"
                          name="copyId"
                          id="copySurveySelect"
                        >
                        </select>
                        <div
                          class="btn btn-dragnsurvey w-100 d-block mt-5 surveyCopyOrModelCreateBtn"
                          data-action="submit"
                        >
                          Créer un questionnaire
                        </div>
                      </div>

                      <div class="col-sm-4 d-none categories_list">
                        <label for="">Choisir la catégorie du modèle</label>
                        <select
                          class="form-control mb-3"
                          name="modelCategorySelect"
                          id="modelCategorySelect"
                        >
                        </select>

                        <input type="hidden" name="modelId" />
                        <label>Choisir un modèle</label>
                        <div class="chooseModelsByCategoryWrapper"></div>

                        <div
                          class="btn btn-dragnsurvey w-100 d-block mt-5 surveyCopyOrModelCreateBtn"
                          data-action="submit"
                        >
                          Créer un questionnaire
                        </div>
                        <div class="createDragonContainer"></div>
                      </div>

                      <div class="col-sm-8 surveyCreatePrevieWrapper d-none">
                        <div id="dnsSurveyCreatePreview" class="h-100"></div>
                      </div>
                    </div>

                    <div class="d-flex align-content-start flex-wrap">
                      <div
                        class="btn btn-dragnsurvey w-50 mx-auto d-none mt-5 surveySelfCreateBtn"
                        data-action="submit"
                      >
                        Créer un questionnaire
                      </div>
                    </div>
                  </form>
                </div>
              </v-carousel-item>
            </div>
          </div>
        </v-carousel>
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
import { Vue, Component } from "vue-property-decorator";
import Haut from "@/components/Header.vue";

@Component({
  components: {
    Haut
  }
})
export default class CreateSurvey extends Vue {}
</script>

<style scoped></style>
