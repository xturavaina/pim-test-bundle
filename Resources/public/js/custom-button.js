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

        // Capturar clic al botó
        this.$el.off('click').on('click', () => {
            const productData = this.getFormData();
            const productId = productData.identifier || productData.uuid;

            console.log('Enviant ID del producte al backend per recuperar el nom:', productId);

            // Fer la crida al backend per recuperar el nom
            this.getProductNameFromBackend(productId);
        });

        return this;
    },

      /**
       * Enviar l'identificador del producte al backend i mostrar el nom retornat
       */
      getProductNameFromBackend: function (productId) {
        fetch('/custom-button/get-product-name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(__('El nom del producte és: ') + data.productName);
            } else {
                alert(__('Hi ha hagut un error: ') + data.message);
            }
        })
        .catch(error => {
            console.error('Error al comunicar-se amb el backend:', error);
            alert(__('Hi ha hagut un error en la comunicació amb el backend.'));
        });
      }
  });
});
