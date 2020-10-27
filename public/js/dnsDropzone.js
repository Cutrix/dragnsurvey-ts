const DnsDropzone=function(item){
    this.item=item;
    this.dzOptions=this.getDzOptions();

};
DnsDropzone.prototype.getDzOptions=function(){

   return {
        url: routes.question.upload.image,
        dictDefaultMessage: dropzoneLocale.DragAndDropYourImageHereOrClickToExploreYourDesktop
    }
};
DnsDropzone.prototype.emitImage=function(img){

    let mockFile = { name: img.title, size: img.size, dataURL: img.thumbnail};
    this.$dz.emit("addedfile", mockFile);

    if(img.thumbnail !== undefined) {
        this.$dz.createThumbnailFromUrl(mockFile, 120, undefined, 'contain', false, (base64data) => {
            $(mockFile.previewElement).find('img[data-dz-thumbnail]').attr('src', base64data);
        }, 'Anonymous');
    }

    this.$dz.emit("complete", mockFile);
    this.$dz.files.push(mockFile);

};
DnsDropzone.prototype.initDzEvents=function(){

    if(this.item.url !== undefined){
        if(this.item.url) {
            this.emitImage(this.item);
        }
    }
    this.$dz.on('success',this.onUploadSuccess.bind(this));
    this.$dz.on('addedfile',this.onAddedFile.bind(this))
};

DnsDropzone.prototype.onUploadSuccess=function(file,response){
    this.$dz.removeFile(file);
    this.item.url=response.url;
    this.item.size=response.size;
    this.item.title=response.title;
    this.item.thumbnail = response.thumbnail;
    this.item.question.serializeDatas();

    this.emitImage(this.item);
};

DnsDropzone.prototype.onAddedFile=function(file){

    if(this.$dz.files.length>1){
        this.$dz.removeFile(this.$dz.files[0]);
    }
};


