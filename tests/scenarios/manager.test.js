/// <reference types="cypress" />

import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as managerPage from "@tests/pages/manager.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/manager.data";
beforeEach(() => {
  route.visit(ROUTES.login);
});

describe("Login test", () => {
  it("Manager login", () => {
    element.click(loginPage.managerButtonLogin);
    assert.shouldContainText(managerPage.addCustomerButton, "Add Customer");
    assert.shouldContainText(managerPage.openAccountButton, "Open Account");
    assert.shouldContainText(managerPage.customerButton, "Customer");
  });
});

describe("Customer Test", () => {
  it("Add Customer", () => {
    element.click(loginPage.managerButtonLogin);
    element.click(managerPage.addCustomerButton);
    element.fillFilled(managerPage.firstName, data.VALID_ADD_CUSTOMER.firstname);
    element.fillFilled(managerPage.lastName, data.VALID_ADD_CUSTOMER.lastname);
    element.fillFilled(managerPage.postCode, data.VALID_ADD_CUSTOMER.postcode);
    element.click(loginPage.buttonSubmit);
    assert.shouldContainValue(managerPage.firstName, "");
  });

  it("Open Account Customer", () => {
    element.click(loginPage.managerButtonLogin);
    element.click(managerPage.openAccountButton);
    element.fillSelect(managerPage.userSelect, data.VALID_OPEN_CUSTOMER.id);
    element.fillSelect(managerPage.currencySelect, data.VALID_OPEN_CUSTOMER.currency);
    element.click(loginPage.buttonSubmit);
    assert.shouldContainValue(managerPage.userSelect, "");
  });
  it.only("Filter Customer", () => {
    element.click(loginPage.managerButtonLogin);
    element.click(managerPage.customerButton);
    element.fillFilled(managerPage.searchCustomer, data.VALID_FILTER_CUSTOMER.firstname);
    assert.shouldContainText(managerPage.tbodyFirstName, data.VALID_FILTER_CUSTOMER.firstname);
  });
});
