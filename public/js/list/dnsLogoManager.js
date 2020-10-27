"use strict";

const DnsLogoManager = function(userLevel){
    this.userLevel = userLevel
    this.url;
    this.size;
    this.title;
    this.displayPosition;

    this.img;
    this.$elem = this.createElem();
    this.start();
};

DnsLogoManager.prototype.createElem = function () {
    return $('<div class="surveysListHeader">'+locale.MyLogo+'</div><div class="dnsLogoPanel"> ' +
        '<div class="dnsLogoManager dropzone"></div>' +
        '<div class="dnsLogoPositionSettings d-flex flex-row-reverse align-items-center mt-2 mb-2"></div> '+
        '<div class="dnsLogoDeleteContainer d-flex flex-row-reverse align-items-center"></div> '+
        '</div>');

};

DnsLogoManager.prototype.start = function(){
    if(this.userLevel < 1){
        this.displayLogoAdd();
    }
    else {
        this.getUserLogo();

        $(document).on('click', '[data-logo-position]', this.onChangeLogoPosition.bind(this));
        $(document).on('click', '[data-action="deleteLogo"]', this.onDeleteLogo.bind(this));
    }
};
DnsLogoManager.prototype.displayLogoAdd = function(){
    this.$elem = this.createElem();
    $(document).find('#dnsLogoContainer').empty();
    $(document).find('#dnsLogoContainer').append(this.$elem);
    this.$elem.find('.dnsLogoManager').addClass('logo-limit d-flex flex-column justify-content-center');
    this.$elem.find('.dnsLogoManager').append( '<img class="mb-3" src="'+routes.assets.img+'lists/star.svg" /> ' +
        '<p class="mb-3">' + locale.WithAPlusOrPremiumAccountDropYourLogoHereToDisplayItInAllYourSurveys+'</p>' +
        '<a href="'+routes.pricing+'" class="btn dnsSubscribeBtn">'+locale.Subscribe+'</a>');
},
DnsLogoManager.prototype.onDeleteLogo = function () {
  $.ajax({
      url: routes.user.logo.delete,
      type: 'post',
      success: function (response) {
          this.setLogo(response);
      }.bind(this)
  })
};
DnsLogoManager.prototype.onChangeLogoPosition = function (event) {

  this.$elem.find('[data-logo-position]').each(function(){
      $(this).removeClass('active');
  });

     $(event.currentTarget).addClass('active');
    this.position = $(event.currentTarget).data('logoPosition');

    $.ajax({
            url : routes.user.logo.position,
            type:'post',
            data: {position: this.position}
    })
};
DnsLogoManager.prototype.setDzLogoOptions = function () {

    this.dnsDropzone.getDzOptions = function () {

        return {  url: routes.user.logo.post ,
            dictDefaultMessage: dropzoneLocale.DragAndDropYourImageHereOrClickToExploreYourDesktopYourLogoWillBeDisplayedOnAllYourSurveys,
            thumbnailWidth: this.item.width,
        thumbnailHeight: this.item.height,
        thumbnailMethod: 'contain'};
    };

    this.dnsDropzone.onUploadSuccess=function(file,response){
        this.$dz.removeFile(file);

        this.item.setLogo(JSON.parse(response));
    }
};
DnsLogoManager.prototype.getUserLogo = function () {

    $.getJSON(routes.user.logo.get, this.setLogo.bind(this));
};

DnsLogoManager.prototype.setLogo = function(img){
    this.$elem = this.createElem();
    this.url = img.url;
    $(document).find('#dnsLogoContainer').empty();
    $(document).find('#dnsLogoContainer').append(this.$elem);
    if(img.url){

        this.size = img.size;
        this.title = img.title;
        this.width = img.width;
        this.height = img.height;
        this.thumbnail = img.thumbnail;
        this.position = img.position;
    }
    else{
        this.size = undefined;
        this.title = undefined;
        this.width = undefined;
        this.height = undefined;
        this.thumbnail = undefined;
        this.position = undefined;
    }
    this.dnsDropzone = new DnsDropzone(this);
    this.setDzLogoOptions();
    this.dnsDropzone.dzOptions = this.dnsDropzone.getDzOptions();
    this.dnsDropzone.$dz = new Dropzone('.dnsLogoManager', this.dnsDropzone.dzOptions);
    this.dnsDropzone.initDzEvents();

    if(img.url ){

        this.displayPositionSelector();
        this.displayDeleteLogo();
    }
};
DnsLogoManager.prototype.displayPositionSelector = function () {

    this.$elem.find('.dnsLogoPositionSettings').append('<div class="btn-group btn-group-lg" role="group" aria-label="position logo">\n' +
    '  <button type="button" data-logo-position="left" class="ml-2 dns-logo-position-button '+((this.position === "left")?"active":"")+'"><i class="fal fa-align-left"></i></button>\n' +
    '  <button type="button" data-logo-position="center" class="ml-2 dns-logo-position-button '+((this.position === "center")?"active":"")+'"><i class="fal fa-align-center"></i></button>\n' +
    '  <button type="button" data-logo-position="right" class="ml-2 dns-logo-position-button '+((this.position === "right")?"active":"")+'"><i class="fal fa-align-right"></i></button>\n' +
    '</div>' +
        '<span>'+locale.Position+' </span>');

};
DnsLogoManager.prototype.displayDeleteLogo = function () {
    this.$elem.find('.dnsLogoDeleteContainer').append('<button class="dns-logo-delete-button ml-2" data-action="deleteLogo"><i class="fas fa-trash"></i> </button> <span>'+locale.DeleteLogo+'</span>');
};