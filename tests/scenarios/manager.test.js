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

describe("Add Customer Test", () => {
  it("Add Customer", () => {
    element.click(loginPage.managerButtonLogin);
    element.click(managerPage.addCustomerButton);
    element.fillFilled(managerPage.firstName, data.VALID_CUSTOMER.firstname);
    element.fillFilled(managerPage.lastName, data.VALID_CUSTOMER.lastname);
    element.fillFilled(managerPage.postCode, data.VALID_CUSTOMER.postcode);
    element.click(loginPage.buttonSubmit);
    assert.shouldContainValue(managerPage.firstName, "");
  });
});
