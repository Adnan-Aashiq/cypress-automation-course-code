/// <reference types="cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject  = {"key":"Adnan Aashiq","key2":"Rizwan Ashiq"}

        cy.log(exampleObject["key"])
        cy.log(exampleObject["key2"])
        cy.log(exampleObject.key2)


        const exampleArrayOfValues = ["Rana","Umer","Haroon"]

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])
        cy.log(exampleArrayOfValues[2])


        const user = {
            "firstName" : "Adnan",
            "lastName" : "Ashiq",
            "Age" : 30,
            "Students" : [
                {
                    "firstName" : "Hassan",
                    "lastName" : "Ashiq"
                },
                {
                    "firstName" : "Ali",
                    "lastName" : "Ashiq"
                }
            ]
        }


        cy.log(user.lastName)
        cy.log(user.Students[0].firstName)
        

        
    });
});