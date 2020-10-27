"use strict";

$('#app main').append('<div class="dns-loading-gif d-none ">\n' +
    '        <div class="spinner-grow text-success" role="status">\n' +
    '  <span class="sr-only">Loading...</span>\n' +
    '</div>\n' +
    '    </div>');

$(document).on({
    ajaxStart: function() { $('.dns-loading-gif').removeClass('d-none');    },
    ajaxStop: function() { $('.dns-loading-gif').addClass('d-none'); }
});