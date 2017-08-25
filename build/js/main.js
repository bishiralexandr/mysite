/* Main scripts file. */

window.project = {
    Behavior: {},
    Settings: {},
    Functions: {},
    runBehaviors: function () {
    }
};
jQuery.fn.extend({
    makeClass: function (className) {
        for (var i = 0, len = this.length; i < len; i++) {
            this.removeClass(className);
            this.addClass(className);
        }
    }
});

/**
 * Default (base) behavior
 */
project.Behavior.default = function (context) {
    jQuery('html').removeClass('no-js');
}

/**
 * Execute all Behaviors.
 */
project.runBehaviors = function (context) {
    if (typeof context == 'undefined') context = document;
    var behaviors = Object.keys(project.Behavior);
    for (var i = 0, len = behaviors.length; i < len; i++) {
        project.Behavior[behaviors[i]](context);
    }
}
/**
 * Run All behaviors on document ready.
 */
jQuery(document).ready(function () {
    project.runBehaviors(document);
});

/**
 * Copy input text to clipboard
 */
function select_all(obj) {
    var text_val = eval(obj);
    text_val.focus();
    text_val.select();
    if (!document.all) return; // IE only
    r = text_val.createTextRange();
    r.execCommand('copy');
}


function getWindowWidth() {
    var windowWidth = 0;
    if (typeof(window.innerWidth) == 'number') {
        windowWidth = window.innerWidth;
    } else {
        if (document.documentElement && document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            if (document.body && document.body.clientWidth) {
                windowWidth = document.body.clientWidth;
            }
        }
    }
    return windowWidth;
}

// Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    //$(document).foundation();
project.Behavior.iniSliderUi = function(context){
    $( "#slider" ).slider({
        animate: "slow",
        min: 0,
        max: 100,
        value: 52,
        change: function( event, ui ) {
            var packageselection = ui.value;
            if ( packageselection == 100 ){
                document.location.replace("/");
            }
            else if ( packageselection == 0 ){
                document.location.replace("/style-advisor.html");
            }
        }
    });
}