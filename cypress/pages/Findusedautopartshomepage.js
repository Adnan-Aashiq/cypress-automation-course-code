export class FindUsedAutoPartsHomepage {
    item_Locator1 = "li[id='main_ad_2321951'] button[class*='add-cart-item']";
    item_Locator2 = "li[id='main_ad_2168817'] button[class*='add-cart-item']";
    cart_Locator = '#cart-url > .fa';

    TypeInSearch(searchKeyword) {
        cy.get('#search_key').type(searchKeyword);
    }
    ClickOnSearch() {
        cy.get("#ad-listings-search-btn").click();
    }

    ClickOnAddToCart(parts) {
        cy.get('.classified-listing').each(($el, index, $list) => {
            // array to verify total price
            //parts = ["HORN - MERCEDES SOUND - E-280+ in Lahore","Karsa Army Horn ","MOMO Horn Kit","HORN - PORSCHE SOUND- E-240+", "HORN - HONDA / TOYOTA SOUND- C-180"];
            //array to verify shipping price
            //parts = []
            const cycars = cy.wrap(parts);
            const text = $el.find('.ad-detail-path > h3').text()
            //cy.log(text);
            cycars.each((partname) => {
                if (text.includes(partname)) {
                    cy.wrap($el.find('.add-cart-item')).click()
                    cy.wait(1000)
                }
            })

        })
        cy.wait(2000);
    }
    ClickOnCart() {
        cy.get('#cart-url > .fa').click({ force: true });
    }
    changingQuantity(){

    }
    verifyShippingPrice(){
        let totalship = 0
        cy.get("table[class*='mb0'] tbody tr:last-child").find("span[class*='dealer_id']").each(($product, index, $list) => {
            const shippingPrice = $product.text();
            //let stringWithoutCommas = shippingPrice.replace(/,/g, '');
            totalship += Number(shippingPrice)
            
        }).then(() => {
            cy.get('#shipping_charges').then(function ($elem) {
                const itemsTotal = $elem.text();
                //var itemsTotalWithoutCommas = itemsTotal.replace(/,/g, '');
                expect(Number(itemsTotal)).to.equal(totalship)
                cy.wrap(totalship).as('totalShipment')
                
            })
        })
    }
    verifyTotalPrice() {
        let total = 0
        cy.get("td>input").each(($product, index, $list) => {
            const productPrice = $product.attr('value');
            let stringWithoutCommas = productPrice.replace(/,/g, '');
            total = total + Number(stringWithoutCommas)
            
        }).then(() => {
            cy.get('#item-net-total').then(function ($elem) {
                const itemsTotal = $elem.text();
                var itemsTotalWithoutCommas = itemsTotal.replace(/,/g, '');
                expect(Number(itemsTotalWithoutCommas)).to.equal(total)
                cy.wrap(total).as('totalAmount')
            })
        })
    }
    verifyGrandTotal(){
        cy.get('#net-total-with-shipping').then(function($tag){
            var grandTotal = $tag.text();
            var grandTotalWithoutComa = grandTotal.replace(/,/g, '')
            cy.log(grandTotalWithoutComa)
            cy.get('@totalShipment').then(totalShipmentCost=>{
                cy.get('@totalAmount').then(totalAmount=>{
                    var GrandTotalByF = totalShipmentCost+totalAmount;

                    expect(Number(grandTotalWithoutComa)).to.equal(GrandTotalByF)
                })
            })
        })
    }
    ClickOnShippingButton() {
        cy.get("td[class='checkout-footer'] button[class='btn btn-primary pull-right']").click()
    }
    FillingShippingInfo() {
        cy.get('#order_name').clear()
        cy.get('#order_name').type('Test Order')
        cy.get('#order_phone').type('03915134567')
        cy.get('#order_comments').type('Testing order')
        cy.get('#recent-address > :nth-child(1)').click()
        cy.get('.well > .checkout-footer > .btn').click()
    }

}