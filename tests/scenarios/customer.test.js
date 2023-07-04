import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
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
