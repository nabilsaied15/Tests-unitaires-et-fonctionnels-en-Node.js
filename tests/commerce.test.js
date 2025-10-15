const { Basket, addToBasket, removeFromBasket ,testAddRemove ,transactionAllowed ,payBasket ,testAppEcommerce} = require('../src/ecommerce');

test('ajout d’un produit met à jour le prix total', () => {
  const basket = new Basket();
  const item = { name: 'Carte mère', price: 100 };
  addToBasket(basket, item);
  expect(basket.totalPrice).toBe(100);
});

test('suppression d’un produit remet le total à zéro', () => {
  const basket = new Basket();
  const item = { name: 'Carte mère', price: 100 };
  addToBasket(basket, item);
  removeFromBasket(basket, item);
  expect(basket.totalPrice).toBe(0);
});

test('test factorisé: ajout puis suppression d un produit ', () => {
 expect(testAddRemove()).toBe(true);
 });
 
 test ('transcation Allowed valide avec les tous  les cas demandées ', () => {
 const user ={name :'Perceval' , balance:500};
 expect(transactionAllowed(user,400)).toBe(true);
 expect(transactionAllowed(user,600)).toBe(false);
 });

 
test('test pour le paiement au panier ', () => {
  const user = { name: 'Perceval', balance: 500 };
  const basket = new Basket();
  const item = { name: 'Carte graphique', price: 300 };
  addToBasket(basket, item);
  const premier_paiement = payBasket(user, basket);
  expect(premier_paiement).toBe(true);       
  expect(user.balance).toBe(200);        
  const paiement2 = payBasket(user, basket);
  expect(paiement2).toBe(false);     
  expect(user.balance).toBe(200);        
});


test('fonction principale',()=>{
    testAppEcommerce();
});