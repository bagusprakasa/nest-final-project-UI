export function get(selector) {
  return cy.get(selector);
}

export function fillFilled(selector, value) {
  return cy.get(selector).type(value).should("have.value", value);
}

export function fillSelect(selector, value) {
  return cy.get(selector).select(value).should("have.value", value);
}

export function click(selector, ...args) {
  return cy.get(selector).click(...args);
}
