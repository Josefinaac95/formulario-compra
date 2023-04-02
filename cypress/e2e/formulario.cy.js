/// <reference types="Cypress" />

/// El comando RELLENARFORMULARIO se encuentra en el archivo commands y realiza todas las acciones para completar el formulario

describe("Test de Checkout compra", () => {

    before("Abrir la página a testear", () => {
        cy.visit("https://institutoweb.com.ar/test/test2/checkout/")  
    })

    it('Me conecto al archivo json para la automatización de varios datos', () => {
        cy.viewport(1300, 800)
        cy.rellenarformulario()
    });
})