Cypress.Commands.add('escribir', (cuadro_de_texto, texto_a_escribir) => {
    cy.get(cuadro_de_texto).type(texto_a_escribir)
})

Cypress.Commands.add('rellenarformulario', () => {
    cy.fixture('./misdatos').then(datosdelformulario => {
        datosdelformulario.forEach((unsolorenglon) => {
            cy.escribir('#firstName', unsolorenglon.firstname)
            cy.escribir('#lastName', unsolorenglon.last_name)
            cy.escribir('#username', unsolorenglon.user_name)
            cy.escribir('#email', unsolorenglon.email)
            cy.escribir('#address', unsolorenglon.ip_address)
            cy.get('#country').select('United States')
            cy.get('#state').select('California')
            cy.escribir('#zip', unsolorenglon.zip)
            if(unsolorenglon.shipping === true){
                cy.get('#same-address').check()
            } else if (unsolorenglon.shipping === false){
                cy.get('#same-address').uncheck()
            }
            if (unsolorenglon.save_info === true) {
                cy.get('#save-info').check()
            } else if (unsolorenglon.save_info === false) {
                cy.get('#save-info').uncheck()
            }
            if (unsolorenglon.payment_method === "paypal") {
                cy.get('#paypal').click()
            } else if (unsolorenglon.payment_method === "credit_card"){
                cy.get('#credit').click()
            } else if (unsolorenglon.payment_method === "debit_card"){
                cy.get('#debit').click()
            }
            cy.escribir('#cc-name', unsolorenglon.namecard)
            cy.escribir('#cc-number', unsolorenglon.numbercard)
            cy.escribir('#cc-expiration', unsolorenglon.expirationcard)
            cy.escribir('#cc-cvv', unsolorenglon.cvvcard)
            cy.get('#continue').click()
            cy.get('body > h3').should('contain', 'correctamente')
            cy.get('#volver').click()
        });
    })
})