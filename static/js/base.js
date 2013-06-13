/**
 * User: Nafiul Islam
 * Date: 6/13/13
 * Time: 10:27 PM
 */

$(document).ready(function() {
    var dir = $.url(document.URL).attr('directory');
    console.log(dir);
    var list = $(".nav li a");
    for (var i = 0; i < list.length; i++) {
        var obj = $(list[i]);
        if(dir == obj.attr('href')){
            //noinspection JSCheckFunctionSignatures
            obj.parent().addClass('active');
        }
    }
});