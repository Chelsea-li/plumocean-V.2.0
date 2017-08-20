//app.js
(function ($) {

    var app = $.sammy('#app', function () {
        this.use('Template');
        /*
                this.around(function (callback) {
                    var context = this;
                    this.load('data/articles.json')
                        .then(function (items) {
                            context.items = items;
                        })
                        .then(callback);
                });*/

        this.get('#/', function (context) {
            context.app.swap('');
            context.render('templates/home.template', {})
                .appendTo(context.$element());
        });

        this.get('#/projects', function (context) {
            context.app.swap('');
            context.render('templates/projects.template', {})
                .appendTo(context.$element());
        });

        this.get('#/resume', function (context) {
            context.app.swap('');
            context.render('templates/resume.template', {})
                .appendTo(context.$element());
        });

        this.get('#/contact', function (context) {
            context.app.swap('');
            context.render('templates/contact.template', {})
                .appendTo(context.$element());
        });

        this.before('.*', function () {

            var hash = document.location.hash;
            $("nav").find("a").removeClass("current");
            $("nav").find("a[href='" + hash + "']").addClass("current");
        });

    });

    $(function () {
        app.run('#/');
    });

})(jQuery);
