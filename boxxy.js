/**
 * Boxxy jQueryUI widget.
 *
 * Attach this bad boy to a div full of content and make a
 * clickable header that is the shiznit.
 *
 * @author James Huston
 * @since 2012-10-22
 */
$.widget("custom.boxxy", {
    options: {
        headerText: "Click Me",
        effect: "blind"
    },

    /**
     * The constructor. Make it so.
     * @return {Object} The element we are attached to.
     */
    _create: function() {
        this.state = 'hidden';

        var self = this;

        /*
         * This make me feel dirty. For a short period of time we
         * have 2 copies of our content in memory. Doesn't seem good
         * if we have a lot of content coupled with lots of boxxy
         * blocks. Fixme. Pretty Please.
         */
        var blockBody = this.element.html();
        this.element.html('');

        /*
         * Add our header to the wrapper div that is already in
         * the body. Yo.
         */
        this.header = $("<div>", {
            text: this.options.headerText,
            class: "boxxy-header"
        }).appendTo(this.element);

        /*
         * Put an indicator area inside of our header to show
         * if we are visible or not.
         */
        this.indicator = $("<span>", {
            class: "boxxy-indicator",
            html: "+"
        }).appendTo(this.header);

        /*
         * Put our content in it's own div inside of our wrapper
         * and under our header.
         */
        this.content = $(
            "<div>"
            ,{
                class: "boxxy-content",
                html: blockBody
            }
        ).appendTo(this.element);

        /*
         * Get rid of that ugly 2nd copy of our content. Eww.
         */
        delete blockBody;

        /*
         * Put our wrapper class on the original div that contains
         * pretty much our world at this point.
         */
        this.element.addClass('boxxy-wrapper');

        /*
         * Put our content in a hidden state so it's out of our
         * site and out of our mind.
         */
        this.content.hide();

        /*
         * Put a click event on our header so that we can toggle
         * the visibility of our content.
         */
        this.header.click(function() {
            self.toggle(self.options.effect);
        });

        /*
         * Return our wrapper element so that we can chain some stuff.
         */
        return this.element;
    },

    /**
     * Toggle our visible/hidden.
     * @param  {Object} An object of option params.
     * @return {Object} The element we are attached to. Chain it.
     */
    toggle: function(effect) {
        this.content.toggle(effect);

        if (this.state === 'hidden') {
            this.state = 'visible';
        } else {
            this.state = 'hidden';
        }

        /*
         * Make sure our indicator reflects our current content
         * visibility state.
         */
        this.toggleIndicator();

        /*
         * Return our wrapper element so that we can chain some stuff. Yo.
         */
        return this.element;
    },

    /**
     * Toggle our indicator from the inside of the header.
     * @return {Object} The element we are attached to. Chain it.
     */
    toggleIndicator: function() {
        if (this.isVisible()) {
            this.indicator.html('--');
        } else {
            this.indicator.html('+');
        }
    },

    /**
     * Find out if our content is hidden.
     * @return {Boolean} True if content is hidden, else false.
     */
    isHidden: function() {
        if (this.state === 'hidden') {
            return true;
        }

        return false;
    },

    /**
     * Find out if our content is visible.
     * @return {Boolean} True if visible, else hidden.
     */
    isVisible: function() {
        return !this.isHidden();
    }
});
