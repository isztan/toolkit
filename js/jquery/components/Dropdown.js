/**
 * @copyright   2010-2013, The Titon Project
 * @license     http://opensource.org/licenses/bsd-license.php
 * @link        http://titon.io
 */

(function($) {
    'use strict';

Toolkit.Dropdown = Toolkit.Component.create(function(nodes, options) {

    /** Custom options */
    this.options = this.setOptions(Toolkit.Dropdown.options, options);

    /** List of elements to active dropdown */
    this.nodes = $(nodes);

    /** Element to toggle */
    this.element = null;

    /** Currently active node */
    this.node = null;

    /** Is the component enabled? */
    this.enabled = true;

    /**
     * Initialize the component by fetching elements and binding events.
     */
    this.initialize = function() {
        $(window).on('click', this.hide.bind(this));
        $(this.options.context || document).on((this.options.mode === 'click' ? 'click' : 'mouseenter'), this.nodes.selector, this.__show.bind(this));

        this.fireEvent('init');
    };

    /**
     * Hide the opened element and remove active state.
     *
     * @returns {Toolkit.Dropdown}
     */
    this.hide = function() {
        if (this.element && this.element.is(':shown')) {
            this.element.conceal();
            this.node.removeClass(Toolkit.options.isPrefix + 'active');

            this.fireEvent('hide');
        }

        return this;
    };

    /**
     * Open the target element and apply active state.
     *
     * @param {jQuery} node
     * @returns {Toolkit.Dropdown}
     */
    this.show = function(node) {
        this.element.reveal();

        this.node = $(node);
        this.node.addClass(Toolkit.options.isPrefix + 'active');

        this.fireEvent('show');

        return this;
    };

    /**
     * When a node is clicked, grab the target from the attribute.
     * Validate the target element, then either display or hide.
     *
     * @private
     * @param {Event} e
     */
    this.__show = function(e) {
        e.preventDefault();

        if (!this.enabled) {
            return;
        }

        var node = $(e.target),
            target = this.readValue(node, this.options.getTarget);

        if (!target || target.substr(0, 1) !== '#') {
            return;
        }

        // Hide previous dropdowns
        if (this.options.hideOpened && this.node && !this.node.is(node)) {
            this.hide();
        }

        this.element = $(target);
        this.node = node;

        if (!this.element.is(':shown')) {
            this.show(node);
        } else {
            this.hide();
        }
    };

    this.initialize();
});

Toolkit.Dropdown.options = {
    mode: 'click',
    context: null,
    getTarget: 'data-dropdown',
    hideOpened: true
};

/**
 * Enable dropdowns on Elements collections by calling dropdown().
 * An object of options can be passed as the 1st argument.
 * The class instance will be cached and returned from this function.
 *
 * @example
 *     $('.js-dropdown').dropdown({
 *         hideOpened: true
 *     });
 *
 * @param {Object} [options]
 * @returns {jQuery}
 */
$.fn.dropdown = function(options) {
    var dropdown = new Toolkit.Dropdown(this, options);

    return this.each(function() {
        $(this).addData('toolkit.dropdown', dropdown);
    });
};

})(jQuery);