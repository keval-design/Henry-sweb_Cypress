class Cart {
    cart() {
    
      



       cy.get('#tab-item-content-tab__1-0 > .ms-product-collection > .msc-ss-carousel > .msc-ss-carousel-strip > .msc-ss-carousel-slide > :nth-child(1) > .msc-product > .msc-product__image > picture > .msc-main_image').click()

      cy.get('.ms-buybox__actions-container > .ms-buybox__add-to-cart-container > .msc-add-to-cart').click()

       cy.get('.ms-buybox__actions-container > .ms-buybox__add-to-cart-container > .msc-add-to-cart').click()

          cy.get('.ms-buybox__actions-container > .ms-buybox__add-to-cart-container > .msc-add-to-cart').click()


       cy.get('.msc-cart-icon').click()  




    }
}

export default Cart;
