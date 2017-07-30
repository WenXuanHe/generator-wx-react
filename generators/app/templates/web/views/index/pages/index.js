module.exports = function(templateParams) {
    var _cssList = ['common', 'index-index'];
    var webAssetsHelp = require('../../../webAssetsHelp.js')(templateParams, _cssList);
    var _html = "{% extends '../../common/pages/layout.html' %} " +
        "{% block title %}[[title]]{% endblock %}" +
        "{% block styles %} " +
        webAssetsHelp.styles +
        "{% endblock %}" +
        '{% block content %}' +
        '{% include "../../../widget/course/course.html" %} ' +
        '{% endblock %}' +
        '{% block script%}' +
        webAssetsHelp.scripts +
        '{% endblock%}';
    return _html;
};