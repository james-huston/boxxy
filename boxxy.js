/**
 * Boxxy jQueryUI widget.
 *
 * @author James Huston
 * @since 2012-10-22
 */

$.widget("custom.boxxy", {
    options: {
        headerText: "Click Me",
        effect: "blind"
    },

    _create: function() {
        var self = this;

        var contentHtml = this.element.html();
        this.element.html('');

        this.header = $("<div>", {
            text: this.options.headerText,
            class: "boxxy-header"
        }).appendTo(this.element);

        this.content = $("<div>", {
            class: "boxxy-content",
            html: contentHtml
        }).appendTo(this.element);

        delete contentHtml;

        this.element.addClass('boxxy-wrapper');

        this.content.hide();

        this.header.click(function() {
            self.toggle(self.options.effect);
        });
    },

    toggle: function(effect) {
        this.content.toggle(effect);
    }
});
