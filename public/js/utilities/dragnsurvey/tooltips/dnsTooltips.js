"use strict";

var DnsTooltips = function(){

    this.init();
};

DnsTooltips.prototype.init = function(){


  this.tooltips =  $('body').tooltip({
        selector: '[data-dns-tooltip]',
        html: true,
        delay: 800,
        title: function(){
            switch($(this).data('dnsTooltip')){
                case "toolbox_question_yesNo":
                   return tooltipsLocale.yesNoQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                   break;
                case "toolbox_question_choice":
                    return tooltipsLocale.choiceQuestion+ '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_dropdown":
                    return tooltipsLocale.dropdownQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_rate":
                    return tooltipsLocale.rateQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_cursor":
                    return tooltipsLocale.cursorQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_freeField":
                    return tooltipsLocale.freeFieldQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_percentage":
                    return tooltipsLocale.percentageQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_ranking":
                    return tooltipsLocale.rankingQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_image_choice":
                    return tooltipsLocale.imageChoiceQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_image_rate":
                    return tooltipsLocale.imageRateQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_spreadsheet_choice":
                    return tooltipsLocale.spreadsheetQuestion + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_spreadsheet_freeField":
                    return tooltipsLocale.spreadsheetFreefield + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_question_hidden":
                    return tooltipsLocale.hiddenField + '<div class="dragnsurvey-color">'+ tooltipsLocale.dragAndDropOnYourSurvey+'</div>';
                    break;
                case "toolbox_category_question":
                    return tooltipsLocale.toolboxQuestionCategory;
                    break;
                case "toolbox_page_layout":
                    return tooltipsLocale.toolboxPageLayout;
                    break;
                case "toolbox_pageBreak":
                    return tooltipsLocale.toolboxPageBreak + '<div class="dragnsurvey-color">' + tooltipsLocale.dragAndDropBetweenTwoQuestions+' </div>';
                    break;
                case "toolbox_textZone":
                    return tooltipsLocale.toolboxTextZone + '<div class="dragnsurvey-color">' + tooltipsLocale.dragAndDropOnYourSurvey+' </div>';
                    break;
                case "toolbox_addPage":
                    return tooltipsLocale.toolboxAddPage ;
                    break;
                case "toolbox_designSurvey":
                    return tooltipsLocale.toolboxDesignSurvey ;
                    break;
                case "toolbox_questionDatabase":
                    return tooltipsLocale.toolboxQuestionDatabase ;
                    break;
                case "questionRedirect":
                    return tooltipsLocale.pageRedirect ;
                    break;
                case "pageRedirect":
                    return tooltipsLocale.questionRedirect ;
                    break;
                case "copyQuestion":
                    return tooltipsLocale.copyQuestion ;
                    break;
                case "recycleQuestion":
                    return tooltipsLocale.recycleQuestion ;
                    break;
                case "deleteQuestion":
                    return tooltipsLocale.deleteQuestion ;
                    break;
                case "mandatoryQuestion":
                    return tooltipsLocale.mandatoryQuestion ;
                    break;
                case "displayAnswers":
                    return tooltipsLocale.displayAnswers ;
                    break;
                case "callbackAnswer":
                    return tooltipsLocale.callbackAnswer ;
                    break;
                case "questionRateLabels":
                    return tooltipsLocale.questionRateLabels ;
                    break;
                case "questionCalculator":
                    return tooltipsLocale.questionCalculator ;
                    break;
                case "questionCorrection":
                    return tooltipsLocale.questionCorrection ;
                    break;
                case "captionImage":
                    return tooltipsLocale.tagImage ;
                    break;
                case "addQuestionToDatabase":
                    return tooltipsLocale.addQuestionToDatabase ;
                    break;
                case "surveyBuilderPage":
                    return tooltipsLocale.surveyBuilderPage ;
                    break;
                case "saveRedirect":
                    return tooltipsLocale.saveRedirect ;
                    break;
                case "cancelRedirect":
                    return tooltipsLocale.cancelRedirect ;
                    break;
                case "deleteAnswer":
                    return tooltipsLocale.deleteAnswer ;
                    break;
                case "editSurveyTitle":
                    return tooltipsLocale.editSurveyTitle ;
                    break;
                case "testSurvey":
                    return tooltipsLocale.testSurvey ;
                    break;
                case "sendSurvey":
                    return tooltipsLocale.sendSurvey ;
                    break;
                case "textZoneConditionnalScoreDisplay":
                    return tooltipsLocale.textZoneConditionnalScoreDisplay ;
                    break;
                case "textZoneCalculatorResult":
                    return tooltipsLocale.textZoneCalculatorResult ;
                    break;
                case "textZoneCallbackAnswer":
                    return tooltipsLocale.textZoneCallbackAnswer ;
                    break;
                case "buildSurvey":
                    return tooltipsLocale.buildSurvey ;
                    break;
                case "collectDataSurvey":
                    return tooltipsLocale.collectDataSurvey ;
                    break;
                case "analyzeSurvey":
                    return tooltipsLocale.analyzeSurvey ;
                    break;
                case "deleteSurvey":
                    return tooltipsLocale.deleteSurvey ;
                    break;
                case "collectorLink":
                    return tooltipsLocale.collectorLink ;
                    break;
                case "collectorWidget":
                    return tooltipsLocale.collectorWidget ;
                    break;
                case "collectorQrCode":
                    return tooltipsLocale.collectorQrCode ;
                    break;
                case "collectorEmail":
                    return tooltipsLocale.collectorEmail ;
                    break;
                case "collectorPanel":
                    return tooltipsLocale.collectorPanel ;
                    break;
                case "editCollector":
                    return tooltipsLocale.editCollector ;
                    break;
                case "seeCollector":
                    return tooltipsLocale.seeCollector ;
                    break;
                case "alertCollector":
                    return tooltipsLocale.alertCollector ;
                    break;
                case "deleteCollector":
                    return tooltipsLocale.deleteCollector ;
                    break;
                case "captionHidden":
                    return tooltipsLocale.tagHidden;
                    break;




            }
        }
    });


};

DnsTooltips.prototype.close = function(){
    $('[data-dns-tooltip]').each(function(){
        $(this).tooltip('hide');
    })
};