"use strict";

var DnsSurveysList = function (userId, conf) {

    this.userId = userId;
    this.conf = this.initConf(conf);

    this.$container = $('#dnsSurveysListContainer');
    this.$elem = this.buildTable();

    this.$deleteModal = this.buildDeleteModal();
    this.init();
    this.installEvents();
    this.tooltips = new DnsTooltips();

};
DnsSurveysList.prototype.buildDeleteModal = function(){
    return $('<div class="modal fade" id="deleteSurveyModal" tabindex="-1" role="dialog" aria-labelledby="deleteSurveyModalLabel" aria-hidden="true">\n' +
        '  <div class="modal-dialog" role="document">\n' +
        '    <div class="modal-content dns-modal">\n' +
        '      <div class="modal-header">\n' +
        '        <h5 class="modal-title" id="deleteSurveyModalLabel">'+locale.DeleteThisSurvey+'</h5>\n' +
        '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
        '          <span aria-hidden="true">&times;</span>\n' +
        '        </button>\n' +
        '      </div>\n' +
        '      <div class="modal-body">' +
        '           <p>'+locale.DeletingThisSurveyWillDeleteAllDatasAssociated+'</p>'+
        '           <p>'+locale.ThisActionCannotBeUndoneAreYouSureYouWantToDeleteAllDatasAssociatedToThisSurvey+'</p>'+
        '      </div>\n' +
        '      <div class="modal-footer">\n' +
        '        <button type="button" class="btn btn-danger btn-danger-dragnsurvey" id="confirmDeleteSurveyBtn" data-survey-id="">'+locale.DeleteThisSurvey+'</button>' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>');
};
DnsSurveysList.prototype.initConf = function (conf) {

    if (conf === undefined) {
        return {actions: ['edit', 'send', 'analyze', 'delete'], hasTemplateColumn : false};
    }
    else {
        return conf;
    }
};
DnsSurveysList.prototype.buildTable = function () {

    var $table = $('<table class="table" id="dnsSurveysList">\n' +
        '            <thead>\n' +
        '            <tr>\n' +
        '                <th style="width:450px">'+locale.Title+'</th>\n' +
        '                <th>'+locale.CreatedAt+'</th>\n' +
        '                <th>'+locale.Answers+'</th>\n' +
        '                <th data-priority="1">'+locale.Actions+'</th>\n' +
        '            </tr>\n' +
        '            </thead>\n' +
        '            <tbody data-dns-surveys-table-body>\n ' +
        '            </tbody>\n' +
        '        </table>');

    if(this.conf.hasTemplateColumn){
        $table.find('thead tr').append('<th>'+locale.Template+'</th>');
    }

    return $table;
};

DnsSurveysList.prototype.init = function () {

    this.$container.html(this.$elem);
    this.$container.append(this.$deleteModal);

    $.ajax({
        url: routes.surveys.user + this.userId,
        dataType: 'json',
        success: this.onReceiveUserSurveys.bind(this)
    })

};
DnsSurveysList.prototype.installEvents = function(){

    this.$container.on('click', '[data-delete-survey]', this.onClickDeleteSurvey.bind(this) );
    this.$container.on('click', '#confirmDeleteSurveyBtn', this.onConfirmDeleteSurvey.bind(this) );

};

DnsSurveysList.prototype.onClickDeleteSurvey = function(event){
  $('#confirmDeleteSurveyBtn').data('surveyId',$(event.currentTarget).data('deleteSurvey'));
};
DnsSurveysList.prototype.onConfirmDeleteSurvey = function(event){
    var surveyId = $(event.currentTarget).data('surveyId');

    $.ajax({
        url : routes.survey.delete+surveyId,
        type: 'post',
        success: function(){
            this.$container.find('#dnsSurveysList').DataTable()
                .row( this.$elem.find('tr[data-dns-survey-id="'+surveyId+'"]') )
                .remove()
                .draw();
            this.$deleteModal.modal('hide');
        }.bind(this)
    })
};

DnsSurveysList.prototype.onReceiveUserSurveys = function (surveys) {
    this.surveys = surveys;
    var columns = [
        {
            data: function(row,type,val,meta){
                return this.showTitle(row,type,val,meta);
            }.bind(this)
        },
        {
            data: function(row,type,val,meta){
                return this.showCreatedAt(row,type,val,meta);
            }.bind(this)
        },
        {
            data: function(row,type,val,meta){
                return this.showAnswersCount(row,type,val,meta);
            }.bind(this)
        },
        {
            data: function(row,type,val,meta){
                return this.showActionsTable(row,type,val,meta);
            }.bind(this)
        },

    ];
    if(this.conf.hasTemplateColumn){
        columns.push(
            {
                data: function(row,type,val,meta){
                    return this.showTemplate(row,type,val,meta);
                }.bind(this)
            }
        );
    }
    $.fn.dataTable.moment( locale.surveyCreatedAtDisplayFormat);
    this.$container.find('#dnsSurveysList').DataTable({
        responsive: true,
        "order": [[1, 'desc']],
        "columnDefs": [
            {"orderable": false, "targets": 3}
        ],
        data: this.surveys,
        columns: columns,
        createdRow: function( row, data, dataIndex ) {
            $(row).attr('data-dns-survey-id', data._id);
        }.bind(this),
        language: dataTablesLocale
    });
};

DnsSurveysList.prototype.showTitle = function(survey,type,val,meta){
    return '<p class="font-weight-demi-bold"> ' + survey.title + '</p>';
};

DnsSurveysList.prototype.showCreatedAt = function(survey,type,val,meta){
    return moment(survey.created_at, 'YYYY-MM-DD').format(locale.surveyCreatedAtDisplayFormat);
};

DnsSurveysList.prototype.showAnswersCount = function(survey,type,val,meta){
    return survey.answers;
};

DnsSurveysList.prototype.showActionsTable = function(survey,type,val,meta){
    var actions = '';
    for (var j = 0; j < this.conf.actions.length; j++) {
        actions += '<td>';
        switch (this.conf.actions[j]) {
            case "edit":
                if(parseInt(this.userId) === parseInt(survey.user_id)) {
                    actions += '<a href="' + routes.survey.navigation.conception + survey._id + '" class="dnsSurveyActionIcon surveyEditColor" data-dns-tooltip="buildSurvey"><i class="fal fa-edit"></i></a>';
                }
                break;
            case "send":
                actions += '<a href="' + routes.survey.navigation.diffusion + survey._id + '" class="dnsSurveyActionIcon surveySendColor" data-dns-tooltip="collectDataSurvey"><i class="fal fa-share-alt"></i></a>';
                break;
            case "analyze":
                actions += '<a href="' + routes.survey.navigation.report + survey._id + '" class="dnsSurveyActionIcon surveyReportColor"  data-dns-tooltip="analyzeSurvey"><i class="fal fa-chart-pie"></i></a>';
                break;
            case "delete":
                if(parseInt(this.userId) === parseInt(survey.user_id)) {
                    actions += '<a href="#" class="dnsSurveyActionIcon" data-toggle="modal" data-target="#deleteSurveyModal" ' +
                        'data-delete-survey="'+survey._id+'" data-dns-tooltip="deleteSurvey"><i class="fas fa-trash"></i></a>';
                }
                break;
        }
        actions += '</td>';
    }
return '<table class="table dnsSurveysListActionTable">\n' +
    '      <tbody>\n' +
    '      <tr>\n' +
                actions +
    '      </tr>\n' +
    '      </tbody>\n' +
    '      </table>';

};
DnsSurveysList.prototype.showTemplate = function(survey,type,val,meta){
    if(this.conf.hasTemplateColumn){
        var checked ='';
        if(survey.isTemplate ){
            checked ='checked';
        }
        if(survey.user_id === this.userId) {
            return ('<label class="switch">\n' +
                '  <input data-dns-template-switch-status="" type="checkbox" name="templateStatus" ' + checked + '>\n' +
                '  <span class="slider round"></span>\n' +
                '</label>');
        }
        else{
            return "";
        }
    }
};