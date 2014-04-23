var ko = require('knockout');

var makeTemplateSource = ko.nativeTemplateEngine.prototype.makeTemplateSource;

var engine = Object.create(ko.nativeTemplateEngine.prototype);
engine.allowTemplateRewriting = false;
engine.makeTemplateSource = function(template, templateDocument) {
    if (typeof template === 'string') {
        return {
            text: function() {
                return template;
            }
        };
    } else {
        return makeTemplateSource.apply(this, arguments);
    }
};

module.exports = engine;