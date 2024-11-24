'use strict';

define([
  'jquery',
  'underscore',
  'oro/translator',
  'pim/form',
  'routing'
], function ($, _, __, BaseForm, Routing) {
  return BaseForm.extend({
      className: 'AknTitleContainer-rightButton',

      /**
       * {@inheritdoc}
       */
      initialize: function (config) {
        // No cal assignar this.config, ja que Akeneo assigna config.options a this.options
        BaseForm.prototype.initialize.apply(this, arguments);
        console.log('Options:', this.options);
    },  

      /**
       * {@inheritdoc}
       */
      render: function () {
        const options = this.options.options || {};
    
        this.$el.html(`
            <button class="${options.className} ${options.iconName}">
                ${options.label}
            </button>
        `);
    
        this.$el.off('click').on('click', () => {
            console.log('Custom button clicked!');
            // Lògica quan es fa clic
        });
    
        return this;
    }
  });
});