export function shouldBeVisible(selector) {
  cy.get(selector).should("be.visible");
}

export function shouldNotBeVisible(selector) {
  cy.get(selector).should("not.be.visible");
}

export function shouldContainText(selector, value) {
  cy.get(selector).should("contain.text", value);
}

export function shouldContain(selector, ...args) {
  cy.get(selector).should("contain", ...args);
}

export function shouldContainValue(selector, value) {
  cy.get(selector).should("have.value", value);
}
