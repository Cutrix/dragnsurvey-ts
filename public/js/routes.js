var routes = {
    pricing: baseUrl + 'pricing',
    assets: {
        img: baseUrl + 'img/'
    },
    addressBook: baseUrl + 'address-book',
    user:{
        account : baseUrl + 'account',
        delete: baseUrl + 'account/delete',
        language: baseUrl + 'user/change_preferred_language',
      logo: {
          get: baseUrl + 'user/getLogo',
          post: baseUrl + 'user/setLogo',
          position: baseUrl + 'user/changeLogoPosition',
          delete: baseUrl +'user/deleteLogo'
      },
        transfert:{
            getStatus: baseUrl + 'user/getTransfertProgress',
            start: baseUrl + 'transfert/membre'
        },
        email:{
          sendValidationLink : baseUrl + 'user/email/sendValidationLink',
          deliveryMode : baseUrl + 'user/email/deliveryMode',
          validateDKIM : baseUrl + 'user/email/validateDKIM',
            senderName: baseUrl + 'user/email/setSenderName',
            modify: baseUrl + 'user/email/modify',
            template:{
              save: baseUrl + 'user/email/template/save',
              get: baseUrl + 'user/email/template/get',
              delete: baseUrl + 'user/email/template/delete'
            }
        },
        contacts:{
          get: baseUrl + 'user/contacts',
          add: baseUrl + 'user/contacts/add',
          delete: baseUrl + 'user/contacts/delete',
          deleteAll: baseUrl +'user/contacts/deleteAll',
          group:{
              create: baseUrl +'user/contacts/createGroup',
              get: baseUrl + 'user/contacts/getGroupContacts/',
              addContacts: baseUrl + 'user/contacts/addToGroup',
              removeContacts: baseUrl + 'user/contacts/removeFromGroup',
              editName: baseUrl + 'user/contacts/editGroupName',
              delete: baseUrl + 'user/contacts/deleteGroup'
          },
          upload: {
           spreadsheet: baseUrl + 'user/contacts/uploadSpreadsheet'
          }
        },
        contact:{
          update: 'user/contact/update'
        },
        billing:{
          get: baseUrl + 'user/billing',
            update: baseUrl + 'user/updateBillingDetails',
            updateVat: baseUrl + 'user/billing/updateVat'
        },
        bill : baseUrl + 'user/bill/'

    },
    users:{
      name: {
          get: baseUrl + 'users/getName'
      }
    },
    survey: {
        create:{
            getCopySurveys: baseUrl + 'survey/create/get_copy_survey',
            getModels: baseUrl + 'survey/create/get_models'
        },
        get: baseUrl + 'survey/get/',
        delete: baseUrl + 'survey/delete/',
        full: {
            get: surveyUrl + 'survey/full'
        },
        collectors: {
            get: baseUrl + 'survey/collectors/'
        },
        test: surveyUrl + 'survey/test/',
        preview: baseUrl + 'survey/preview/',
        questions: {
            order: baseUrl + 'survey/orderQuestions'
        },
        save: surveyUrl + 'survey/save',
        options: baseUrl + 'survey/options',
        title:{
          edit: baseUrl +'survey/editTitle'
        },
        report: baseUrl + 'survey/report/',
        complete: surveyUrl + 'survey/complete',
        access: {
            link: surveyUrl + 'survey/r/'
        },
        navigation: {
            conception: baseUrl + 'survey/conception/',
            diffusion: baseUrl + 'survey/diffusion/',
            report: baseUrl + 'survey/report/'
        },
        template:{
            status: baseUrl + 'survey/templateStatus'
        },
        getCollectorFromRespondent: baseUrl + 'survey/getCollectorFromRespondent/',
        panel:{
            screenout: baseUrl + 'cint/screenout_survey/',
            statistics: baseUrl + 'collectors/getPanelStatistics/'
        }
    },
    question: {
        add: baseUrl + 'question/add',
        addDatabase: baseUrl + 'question/addDatabaseQuestion',
        copy: baseUrl + 'question/copy',
        recycle: baseUrl + 'question/recycle',
        save: baseUrl + 'question/save',
        delete: baseUrl + 'question/delete',
        movePage: baseUrl + 'question/movePage',
        upload: {
            image: baseUrl + 'question/uploadImage'
        },
        variables: {
            get: baseUrl + 'question/getAvailableVariables'
        },
        redirects: {
            get: baseUrl + 'question/getAvailableRedirections'
        },
        responses: baseUrl + 'report/calculateQuestion/'
    },
    questions: {
        get: baseUrl + 'questions/get',
        page: {
            get: baseUrl + 'questions/page'
        },
        database: {
            categories: {
                get: baseUrl + 'questions/database',
                questions: {
                    get: baseUrl + 'questions/database/category_questions/'
                }
            },
            add: baseUrl + 'questions/database/add',
            delete: baseUrl + 'questions/database/delete'
        }
    },
    page: {
        cut: baseUrl + 'page/cut',
        delete: baseUrl + 'page/delete',
        add: baseUrl + 'page/add',
        get: baseUrl + 'page/',
        settings: baseUrl + 'page/settings'
    },
    pages: {
        order: baseUrl + 'pages/order'
    },
    report: {
        get: baseUrl + 'report/get/',
        getHistoryRespondents: baseUrl + 'report/get_respondents_history/',
        create: baseUrl + 'report/create',
        addFilter: baseUrl + 'report/addFilter',
        deleteFilter: baseUrl + 'report/deleteFilter',
        changeFilterLinkType: baseUrl + 'report/changeFilterLinkType',
        export: {
            excel: baseUrl + 'report/export/excel',
            pdf: baseUrl + 'report/export/pdf'
        },
        share:{
            access: baseUrl + 'report/share/',
            password: {
                save: baseUrl + 'report/share/password/save'
            }
        },
        changeChartType: baseUrl + 'report/changeQuestionChartType',
        toggleQuestionVisibility: baseUrl + 'report/toggleQuestionVisibility',
        delete: baseUrl + 'report/delete'
    },
    respondent : {
      delete : baseUrl + 'report/respondent/delete',
      print : baseUrl + 'report/respondent/print/'
    },
    respondents: {
        responses: baseUrl + 'report/respondent/',
        getFromIndex: baseUrl + 'report/respondent/getFromIndex/'
    },
    collectors: {
        create: baseUrl + 'collectors/create',
        delete: baseUrl + 'collectors/delete',
        edit: baseUrl + 'collectors/edit',
        updateStatus: baseUrl + 'collectors/updateStatus',
        emails:{
            send: baseUrl + 'collectors/sendEmailsCampaign',
            getCampaign : baseUrl+ 'collectors/getEmailsCampaignActivity/',
            reminder: baseUrl + 'collectors/sendReminderCampaign',
            reminderComplete: baseUrl + 'collectors/completeReminderCampaign',
            batch: baseUrl + 'collectors/sendEmailsBatch'
        },
        panel:{
            cintInformations: baseUrl + 'collectors/panel/getCintInformations',
            getPricing: baseUrl + 'collectors/panel/getPricing',
            create: baseUrl + 'collectors/panel/create'
        }
    },
    storage: {
        qrCode: baseUrl + 'storage/qrcode/'
    },
    surveys: {
        user: baseUrl + 'surveys/user/'
    },
    master: {
        users: {
            get: baseUrl + 'master/users',
            create: baseUrl + 'master/createAndLinkUser',
            add: baseUrl + 'master/addUser',
            unlink: baseUrl + 'master/users/unlink'
        }
    },
    themes:{
        get: baseUrl + 'themes/get',
        pexel: baseUrl + 'themes/pexel',
        save: baseUrl + 'themes/save',
        set: baseUrl +'themes/set',
        setDefault: baseUrl +'themes/setDefault',
        delete: baseUrl +'themes/delete',
        upload: {
            img: baseUrl + 'themes/uploadBckgImg'
        }
    },
    img: baseUrl + 'img/',
    order: baseUrl + 'order',
    subscription:{
        cancel : baseUrl + 'subscription/cancel',
        getPricing: baseUrl+ 'subscription/getPricing'
    },
    alert:{
        create : baseUrl + 'alerts/create',
        delete: baseUrl + 'alerts/delete'
    }

};