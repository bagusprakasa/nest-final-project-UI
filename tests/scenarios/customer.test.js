/// <reference types="cypress" />

import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as transactionPage from "@tests/pages/transaction.page";
import * as assert from "@helpers/assert";
import * as data from "@tests/data/customer.data";
beforeEach(() => {
  route.visit(ROUTES.login);
});
describe("Login test", () => {
  it("Customer login", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, data.VALID_CUSTOMER.id);
    element.click(loginPage.buttonSubmit);
    assert.shouldContainText(loginPage.nameHome, data.VALID_CUSTOMER.name);
  });
});

describe("Transaction test", () => {
  it("Customer deposit", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, data.VALID_CUSTOMER.id);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.deposit);
    element.fillFilled(transactionPage.depositInput, data.VALID_CUSTOMER.deposit);
    element.click(transactionPage.buttonSubmit);
    assert.shouldContainText(transactionPage.messageSuccess, "Deposit Successful");
  });
  it("Customer withdrawal", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, data.VALID_CUSTOMER.id);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.withdrawl);
    element.fillFilled(transactionPage.withdrawlInput, data.VALID_CUSTOMER.withdraw);
    element.click(transactionPage.buttonSubmit);
    assert.shouldContainText(transactionPage.messageSuccess, "Transaction successful");
  });
  it("Customer withdrawal with withdraw amount more than the balance", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, data.VALID_CUSTOMER.id);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.withdrawl);
    element.fillFilled(transactionPage.withdrawlInput, data.INVALID_CUSTOMER.withdraw);
    element.click(transactionPage.buttonSubmit);
    assert.shouldContainText(
      transactionPage.messageSuccess,
      "Transaction Failed. You can not withdraw amount more than the balance."
    );
  });
  it("Customer Transaction", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, data.VALID_CUSTOMER.id);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.transaction);
    element.fillFilled(transactionPage.dateStart, data.FILTER_DATE.start);
    element.fillFilled(transactionPage.dateEnd, data.FILTER_DATE.end);
    assert.shouldContainValue(transactionPage.dateStart, data.FILTER_DATE.start);
    assert.shouldContainValue(transactionPage.dateEnd, data.FILTER_DATE.end);
  });
  it("Reset Transaction", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, data.VALID_CUSTOMER.id);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.transaction);
    element.click(transactionPage.resetTransaction);
    assert.shouldNotBeVisible(transactionPage.tableTbody);
  });
});

describe("Logout test", () => {
  it("Customer Logout", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, data.VALID_CUSTOMER.id);
    element.click(loginPage.buttonSubmit);
    element.click(loginPage.buttonLogout);
    element.click(loginPage.buttonHome);
    assert.shouldContainText(loginPage.customerButtonLogin, "Customer Login");
  });
});
