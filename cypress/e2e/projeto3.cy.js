Cypress.on('uncaught:exception', (err, runnable) => {
  return false

});

describe('Teste de interações no site da worten', () => {
  it('Deve testar scroll, ações do mouse e teclado', () => {
    
    
    //Deve acessar o site da worten
    cy.visit('https://www.worten.pt/')

    //Aguarde a página carregar completamente
    cy.wait(3000);

    //Scroll até final da página e voltar ao topo
    cy.scrollTo('bottom');
    cy.wait(2000)
    cy.scrollTo('top');
    cy.wait(4000)

    //Passar o mouse sobre a categoria "Preparação de alimentos"
    cy.xpath("//button[@data-href='/pequenos-eletrodomesticos/preparacao-de-alimentos']//img[@alt='#']").trigger('mouseover');
    cy.wait(4000)

    //Clicar na opção "Portáteis" dentro do menu
    cy.xpath("//button[@aria-label='Menu']").click()
    cy.wait(4000)
    cy.xpath("//ul[@class='is-active nav-tab__sub-categories --with-tabs']//li[5]").click()
    cy.wait(4000)
    cy.xpath("//img[@alt='Portáteis']").click()
    cy.wait(4000)

    //Scroll até um produto visivel na página
    cy.scrollTo(0,1000)

    //Digitar algo na barra de pesquisa e pressionar Enter
    cy.xpath("//input[@id='search']").type('LOQ Lenovo{enter}')
    cy.wait(5000)

    //Limpar a barra de pesquisa e refazer a pesquisa
    cy.xpath("//input[@id='search']").clear().type('Monitor 32 AOC{enter}')
    cy.wait(5000)



  })
})

