"use strict";

var DnsCookies = function(lang){
    this.iframeUrl = "https://www.dragnsurvey.com/cookies/iframe";
    this.iframe;
    this.locales = this.getLocales(lang);
    this.cookies;
    this.$banner = this.createBanner();
    this.$detailsBanner = this.createDetailsBanner();

    this.start();
};

DnsCookies.prototype.installEvents = function(){
    window.onmessage = this.onWindowReceiveMessage.bind(this);
    $('body').on('click', '[data-manage-cookies]', this.onClickManageCookies.bind(this));
    $('body').on('click', '[data-accept-cookies]', this.onClickAcceptCookies.bind(this));
    $('body').on('click', '#statistics_cookies', this.onClickStatisticsCookies.bind(this));
    $('body').on('click', '#cookies_management_link', this.onClickManageCookiesLink.bind(this));

};

DnsCookies.prototype.onWindowReceiveMessage = function(e){
    if(e.origin === "https://www.dragnsurvey.com"){
        var data = JSON.parse(e.data);
        if(data === null){
            this.cookies = { choice : undefined ,analytics : false };
        }
        else if(data.choice !== undefined && data.analytics !== undefined && data.date !== undefined) {
            this.cookies = {choice: data.choice, analytics: data.analytics, date : data.date };
        }
        else{
            this.cookies = { choice : undefined ,analytics : false };
        }

        if(this.cookies.choice === undefined || this.isTimeElapsed()){
            this.showBanner();
        }
        else{
            if(this.cookies.analytics){
                this.setGoogletags();
            }
        }
    }
};

DnsCookies.prototype.isTimeElapsed = function(){
    var current = new Date();

    var time = current.getTime() - new Date(this.cookies.date).getTime();

    var daysPassed = time / (1000 * 3600 * 24);

    return (daysPassed > 180);
};

DnsCookies.prototype.onClickAcceptCookies = function(){
    this.cookies.choice = true;
    this.cookies.analytics = true;
    this.saveCookieStatus();
    this.$banner.modal('hide');
    this.setGoogletags();
};

DnsCookies.prototype.onClickManageCookiesLink = function(){
    this.cookies.choice = true;
    this.saveCookieStatus();
    this.showDetailsBanner();
};

DnsCookies.prototype.showDetailsBanner = function(){
    this.$detailsBanner.modal('show');

    this.$detailsBanner.find('#statistics_cookies').removeAttr('checked');
    if(this.cookies.analytics){
        this.$detailsBanner.find('#statistics_cookies').prop('checked', true);
    }
};

DnsCookies.prototype.onClickManageCookies = function(){
    this.cookies.choice = true;
    this.saveCookieStatus();
    this.$banner.modal('hide');
    this.showDetailsBanner();
};

DnsCookies.prototype.onClickStatisticsCookies = function(event){
    this.cookies.analytics = $(event.currentTarget).prop('checked');
    this.cookies.choice = true;
    this.saveCookieStatus();

    if(this.cookies.analytics){
        this.setGoogletags();
    }
    else{
        this.removeGoogleTags();
    }
};

DnsCookies.prototype.saveCookieStatus = function(){
    this.cookies.date = new Date();
    this.iframe.postMessage(JSON.stringify({key: 'dragnsurveyCookies', method: "set", data: this.cookies}), "*");
};

DnsCookies.prototype.getLocales = function(lang){
    var locales = {
        fr: {
            WeUseCookies: "Nous utilisons des cookies",
            cookiesBannerBody: "Si vous l’acceptez, nous utiliserons des cookies pour réaliser des statistiques de visites et faciliter votre navigation sur notre site internet.  Vous pouvez changer d’avis et modifier vos choix à tout moment.",
            manageCookies: "Gérer les cookies",
            Accept: "Accepter",
            StatisticalCookies: "Cookies statistiques",
            StatisticalCookiesAllowOurWebsiteToUnderstandHowUsersUseOurWebsiteAndToMeasureItsAudience: "Les cookies statistiques permettent à notre site Web de comprendre comment les utilisateurs utilisent notre site Web et pour en mesurer l’audience.",
            CookieName: "Nom du cookie",
            ResponsibleForProcessing: "Responsable du traitement",
            PurposeOfTheCookie: "Finalité du cookie",
            ExpirationTime: "Durée de vie",
            Acceptation: "Acceptation" ,
            UsedToDistinguishUsers: "Utilisé pour différencier les utilisateurs de manière anonyme",
            years: "ans",
            hours: "heures",
            NecessaryCookies: "Cookies nécessaires",
            NecessaryCookiesHelpMakeAWebsiteUsableByEnablingBasicFunctionsSuchAsPageNavigationAndAccessToSecureAreasOfTheWebsiteTheWebsiteCannotFunctionProperlyWithoutTheseCookies: "Les cookies nécessaires contribuent à rendre un site Web utilisable en activant des fonctions de base comme la navigation de page et l'accès aux zones sécurisées du site Web. Le site Web ne peut pas fonctionner correctement sans ces cookies.",
            privacyPolicyLink: "fr/politique-confidentialite",
            UsedToValidateIntegrityOfUserSession: "Utilisé pour valider l'intégrité de la session de l'utilisateur",
            UsedToValidateIntegrityOfLocaleSession: "Utilisé pour valider l'intégrité de la session locale",
            Close: "Fermer"

        },
        en: {
            WeUseCookies: "We use cookies",
            cookiesBannerBody: "If you agree, we will use cookies to compile visit statistics and facilitate your navigation on our website. You can change your mind and change your choices at any time.",
            manageCookies: "Manage cookies",
            Accept: "Accept",
            StatisticalCookies: "Statistical cookies",
            StatisticalCookiesAllowOurWebsiteToUnderstandHowUsersUseOurWebsiteAndToMeasureItsAudience: "Statistical cookies allow our website to understand how users use our website and to measure its audience.",
            CookieName: "Cookie name",
            ResponsibleForProcessing: "Responsible for processing",
            PurposeOfTheCookie: "Purpose of the cookie",
            ExpirationTime: "Expiration time",
            Acceptation: "Acceptation" ,
            UsedToDistinguishUsers: "Used to distinguish users",
            years: "years",
            hours: "hours",
            NecessaryCookies: "Necessary cookies",
            NecessaryCookiesHelpMakeAWebsiteUsableByEnablingBasicFunctionsSuchAsPageNavigationAndAccessToSecureAreasOfTheWebsiteTheWebsiteCannotFunctionProperlyWithoutTheseCookies: "Necessary cookies help make a website usable by enabling basic functions such as page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
            privacyPolicyLink: "en/privacy-policy",
            UsedToValidateIntegrityOfUserSession: "Used to validate the integrity of user session",
            UsedToValidateIntegrityOfLocaleSession: "Used to validate integrity of locale session",
            Close: "Close"
        },
        pl: {
            WeUseCookies: "U&#380;ywamy plik&#243;w cookie",
            cookiesBannerBody: "Je&#347;li wyrazisz zgod&#281;, b&#281;dziemy u&#380;ywa&#263; plikó&#243;w cookie do tworzenia statystyk odwiedzin i u&#322;atwiania nawigacji na naszej stronie. W ka&#380;dej chwili mo&#380;esz zmieni&#263; zdanie i dokona&#263; wyboru.",
            manageCookies: "zarz&#261;dza&#263; plikami cookies",
            Accept: "Zaakceptowa&#263;",
            StatisticalCookies: "Statystyczne pliki cookie",
            StatisticalCookiesAllowOurWebsiteToUnderstandHowUsersUseOurWebsiteAndToMeasureItsAudience: "Statystyczne pliki cookie pozwalaj&#261; naszej stronie zrozumie&#263;, w jaki sposób u&#380;ytkownicy korzystaj&#261; z naszej strone, i mierzy&#263; jej ogl&#261;dalno&#347;&#263;.",
            CookieName: "Nazwa pliku cookie",
            ResponsibleForProcessing: "Odpowiedzialny za przetwarzanie",
            PurposeOfTheCookie: "Cel pliku cookie",
            ExpirationTime: "Data wa&#380;no&#347;ci",
            Acceptation: "Akceptacja" ,
            UsedToDistinguishUsers: "S&#322;u&#380;y do rozró&#380;niania u&#380;ytkowników",
            years: "lata",
            hours: "godzien",
            NecessaryCookies: "Niezb&#281;dne pliki cookie",
            NecessaryCookiesHelpMakeAWebsiteUsableByEnablingBasicFunctionsSuchAsPageNavigationAndAccessToSecureAreasOfTheWebsiteTheWebsiteCannotFunctionProperlyWithoutTheseCookies: "\n" +
                "Niezb&#281;dne pliki cookie pomagaj&#261; w korzystaniu ze strone internetowej, umo&#380;liwiaj&#261;c podstawowe funkcje, takie jak nawigacja po stronie i dost&#281;p do bezpiecznych obszarów strone. Strona internetowa nie mo&#380;e dzia&#322;a&#263; poprawnie bez tych plików cookie.",
            privacyPolicyLink: "en/privacy-policy",
            UsedToValidateIntegrityOfUserSession: "S&#322;u&#380;y do sprawdzania integralno&#347;ci sesji u&#380;ytkownika",
            UsedToValidateIntegrityOfLocaleSession: "S&#322;u&#380;y do sprawdzania integralno&#347;ci sesji ustawie&#324; regionalnych",
            Close: "Blisko"
        }
    };
    return locales[lang];
};
DnsCookies.prototype.getDnsCookies = function(){

    setTimeout(function(){
        this.iframe.postMessage(JSON.stringify({key: 'dragnsurveyCookies', method: "get"}), "*");
    }.bind(this), 1000);

};

DnsCookies.prototype.createBanner = function () {
    return $('<div class="modal dns-modal" tabindex="-1">\n' +
        '  <div class="modal-dialog">\n' +
        '    <div class="modal-content">\n' +
        '      <div class="modal-header">\n' +
        '        <h5 class="modal-title">'+this.locales.WeUseCookies+'</h5>\n' +
        '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '          <span aria-hidden="true">&times;</span>\n' +
        '        </button>\n' +
        '      </div>\n' +
        '      <div class="modal-body">\n' +
        '        <p>'+this.locales.cookiesBannerBody+'</p>\n' +
        '      </div>\n' +
        '      <div class="modal-footer">\n' +
        '        <button type="button" class="btn btn-secondary" data-manage-cookies >'+this.locales.manageCookies+'</button>\n' +
        '        <button type="button" class="btn dns-btn btn-dragnsurvey" data-accept-cookies>'+this.locales.Accept+'</button>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>');
};
DnsCookies.prototype.createDetailsBanner = function(){

    return $('<div class="modal dns-modal" tabindex="-1">\n' +
        '  <div class="modal-dialog modal-lg">\n' +
        '    <div class="modal-content">\n' +
        '      <div class="modal-header">\n' +
        '        <h5 class="modal-title text-capitalize">'+this.locales.manageCookies+'</h5>\n' +
        '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '          <span aria-hidden="true">&times;</span>\n' +
        '        </button>\n' +
        '      </div>\n' +
        '      <div class="modal-body">' +
        '        <p class="h5">'+this.locales.NecessaryCookies+'</p>' +
        '        <p>'+this.locales.NecessaryCookiesHelpMakeAWebsiteUsableByEnablingBasicFunctionsSuchAsPageNavigationAndAccessToSecureAreasOfTheWebsiteTheWebsiteCannotFunctionProperlyWithoutTheseCookies+'</p>' +
        '        <table class="table">' +
        '           <thead>' +
        '               <tr>' +
        '                   <th>'+this.locales.CookieName+'</th>' +
        '                   <th>'+this.locales.ResponsibleForProcessing+'</th>' +
        '                   <th>'+this.locales.PurposeOfTheCookie+'</th>' +
        '                   <th>'+this.locales.ExpirationTime+'</th>' +
        '                   <th>'+this.locales.Acceptation+'</th>' +
        '               </tr>' +
        '           </thead>' +
        '           <tbody>' +
        '               <tr>' +
        '                   <td>dragnsurvey</td>' +
        '                   <td><a href="https://app.dragnsurvey.com/'+this.locales.privacyPolicyLink+'">Drag\'n Survey</a></td>' +
        '                   <td>'+this.locales.UsedToValidateIntegrityOfUserSession+'</td>' +
        '                   <td>2 '+this.locales.years+'</td>' +
        '                   <td rowspan="2" style="vertical-align : middle;text-align:center;">' +
        '                       <div class="custom-control custom-switch">\n' +
        '                           <input type="checkbox" class="custom-control-input" checked disabled id="necessary_cookies">\n' +
        '                           <label class="custom-control-label" for="necessary_cookies"></label>\n' +
        '                       </div>' +
        '                   </td>' +
        '               </tr>' +
        '               <tr>' +
        '                   <td>locale</td>' +
        '                   <td><a href="https://app.dragnsurvey.com/'+this.locales.privacyPolicyLink+'">Drag\'n Survey</a></td>' +
        '                   <td>'+this.locales.UsedToValidateIntegrityOfLocaleSession+'</td>' +
        '                   <td>5 '+this.locales.years+'</td>' +
        '               </tr>' +
        '           </tbody>' +
        '        </table>' +
        '        <p class="h5">'+this.locales.StatisticalCookies+'</p>' +
        '        <p>'+this.locales.StatisticalCookiesAllowOurWebsiteToUnderstandHowUsersUseOurWebsiteAndToMeasureItsAudience+'</p>' +
        '        <table class="table">' +
        '           <thead>' +
        '               <tr>' +
        '                   <th>'+this.locales.CookieName+'</th>' +
        '                   <th>'+this.locales.ResponsibleForProcessing+'</th>' +
        '                   <th>'+this.locales.PurposeOfTheCookie+'</th>' +
        '                   <th>'+this.locales.ExpirationTime+'</th>' +
        '                   <th>'+this.locales.Acceptation+'</th>' +
        '               </tr>' +
        '           </thead>' +
        '           <tbody>' +
        '               <tr>' +
        '                   <td>_ga</td>' +
        '                   <td><a href="https://support.google.com/analytics/answer/6004245" target="_blank">Google Analytics</a></td>' +
        '                   <td>'+this.locales.UsedToDistinguishUsers+'</td>' +
        '                   <td>2 '+this.locales.years+'</td>' +
        '                   <td rowspan="2" style="vertical-align : middle;text-align:center;">' +
        '                       <div class="custom-control custom-switch">\n' +
        '                           <input type="checkbox" class="custom-control-input" id="statistics_cookies" >' +
        '                           <label class="custom-control-label" for="statistics_cookies"></label>\n' +
        '                       </div>' +
        '                   </td>' +
        '               </tr>' +
        '               <tr>' +
        '                   <td>_gid</td>' +
        '                   <td><a href="https://support.google.com/analytics/answer/6004245" target="_blank">Google Analytics</a></td>' +
        '                   <td>'+this.locales.UsedToDistinguishUsers+'</td>' +
        '                   <td>24 '+this.locales.hours+'</td>' +
        '               </tr>' +
        '           </tbody>' +
        '        </table>'+
        '      </div>\n' +
        '      <div class="modal-footer">\n' +
        '        <button type="button" class="btn btn-secondary" data-dismiss="modal">'+this.locales.Close+'</button>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>');
};
DnsCookies.prototype.start = function(){

    if(window.location.href === this.iframeUrl){
        this.setUpFrameContent();
    }
    else{
        this.loadIframe();
        this.installEvents();
        this.getDnsCookies();
    }



};

DnsCookies.prototype.loadIframe = function(){
    $('body').append('<iframe data-dns-type="cookies_iframe" src="'+this.iframeUrl+'" style="display:none;"></iframe>');
    var iframe = $('[data-dns-type="cookies_iframe"]')[0];
    this.iframe = iframe.contentWindow? iframe.contentWindow : iframe.contentDocument.defaultView;
};

DnsCookies.prototype.setUpFrameContent = function(){

    window.onmessage = function(e) {
        var payload = JSON.parse(e.data);
        switch(payload.method) {
            case 'set':
                localStorage.setItem(payload.key, JSON.stringify(payload.data));
                break;
            case 'get':
                var parent = window.parent;
                var data = localStorage.getItem(payload.key);
                parent.postMessage(data, "*");
                break;
            case 'remove':
                localStorage.removeItem(payload.key);
                break;
        }
    };

};

DnsCookies.prototype.showBanner = function(){
    this.$banner.modal('show');
};

DnsCookies.prototype.setGoogletags = function(){
    this.removeGoogleTags();
    $('html').append("<noscript class='dragnsurvey-google-tags'><iframe src=\"//www.googletagmanager.com/ns.html?id=GTM-MPNHHB\"\n" +
        "                      height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n" +
        "    <script class='dragnsurvey-google-tags'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
        "                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
        "            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
        "            '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
        "        })(window,document,'script','dataLayer','GTM-MPNHHB');</script>\n")
};

DnsCookies.prototype.removeGoogleTags = function(){
    $('html').find('.dragnsurvey-google-tags').each(function(){
        $(this).remove();
    });
};