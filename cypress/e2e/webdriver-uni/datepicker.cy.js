/// <reference types="cypress" />

describe("Test datepicker via datepicker", () => {
    it("Select date from date picker", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#datepicker').click()
        let date = new Date()
        date.setDate(date.getDate()) //get current date
        cy.log(date.getDate())
        date.setDate(date.getDate()+40)// if today date is 10 then it will print 15
        cy.log(date.getDate())

        
        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleDateString("default",{month:"long"})
        var futureDay = date.getDate()

        cy.log("Future year to select " + futureYear)
        cy.log("Future Month to select " + futureMonth)
        cy.log("Future Day to select " + futureDay)

        function selectMonthAndYear(){
            
            cy.get('.datepicker-orient-top').find('.datepicker-switch').then(currentDate=>{
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click()
                    cy.wait(1000)
                    selectMonthAndYear()
                }
            }).then(()=>{
                cy.get('.datepicker-orient-top').find('.datepicker-switch').then(currentDate=>{
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        cy.wait(1000)
                        selectMonthAndYear()
                    }
                })
            })
        }
        function selectFutureDay(){
            cy.get("[class='day']").contains(futureDay).click();
        }
        selectMonthAndYear()
        selectFutureDay()
    })
});