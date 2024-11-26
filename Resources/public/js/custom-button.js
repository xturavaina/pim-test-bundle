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
    
        // Obtenim directament les dades del formulari
        const productData = this.getFormData();
        console.log('Dades del producte:', productData);
        // Si cal, crida la funció per actualitzar a Magento
        // this.updateProductToMagento(productData);
    
        return this;
    }
  });
});