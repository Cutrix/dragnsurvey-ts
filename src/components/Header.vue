<template>
  <div>
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
              <a href="https://app.dragnsurvey.com/home"> Mes questionnaires</a>
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
                <a href="https://app.dragnsurvey.com/survey/create"
                  >Nouveau questionnaire</a
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
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
