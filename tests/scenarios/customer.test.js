import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as transactionPage from "@tests/pages/transaction.page";
import * as assert from "@helpers/assert";
beforeEach(() => {
  route.visit(ROUTES.login);
});
describe("Login test", () => {
  it("Customer login", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, 1);
    element.click(loginPage.buttonSubmit);
    assert.shouldContainText(loginPage.nameHome, "Hermoine Granger");
  });
});

describe("Transaction test", () => {
  it("Customer deposit", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, 1);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.deposit);
    element.fillFilled(transactionPage.depositInput, 25000);
    element.click(transactionPage.buttonSubmit);
    assert.shouldContainText(transactionPage.messageSuccess, "Deposit Successful");
  });
  it("Customer withdrawal", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, 1);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.withdrawl);
    element.fillFilled(transactionPage.withdrawlInput, 200);
    element.click(transactionPage.buttonSubmit);
    assert.shouldContainText(transactionPage.messageSuccess, "Transaction successful");
  });
  it("Customer Transaction", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, 1);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.transaction);
    element.fillFilled(transactionPage.dateStart, "2023-07-01T08:30");
    element.fillFilled(transactionPage.dateEnd, "2023-07-10T08:30");
  });
  it("Reset Transaction", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, 1);
    element.click(loginPage.buttonSubmit);
    element.click(transactionPage.transaction);
    element.click(transactionPage.resetTransaction);
  });
});

describe("Logout test", () => {
  it.only("Customer Logout", () => {
    element.click(loginPage.customerButtonLogin);
    element.fillSelect(loginPage.customerSelect, 1);
    element.click(loginPage.buttonSubmit);
    element.click(loginPage.buttonLogout);
  });
});
