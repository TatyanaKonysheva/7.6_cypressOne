import { expect } from "chai";
import { beforeEach } from "mocha";
import "cypress-file-upload";

beforeEach(() => {
  cy.visit("/");
});

describe("Test login", () => {
  it("Should successfully login", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Should not login empty email", () => {
    cy.login(null, "123");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("Should not login empty password", () => {
    cy.login("bropet@mail.ru", null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });
});

describe("Test book list", () => {
  it("Should add new book", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    cy.contains("Add new").click();
    cy.contains("Book description").should("be.visible");
    //title, description, fileCover, fileBook, authors
    cy.book(
      "Карлсон, который живет на крыше",
      "Сказки",
      "1005389620.jpg",
      "lindgren_malysh_i_karlsson.pdf",
      "Астрид Линдгрен"
    );
    cy.get("#favorite").click();
    cy.contains("Submit").click();
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Should dowload favorit book", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    cy.get("h4").contains("Favorites").click();
    cy.contains("Карлсон, который живет на крыше").click();
    cy.get("h2")
      .contains("Карлсон, который живет на крыше")
      .should("be.visible");
    cy.contains("Dowload book")
      .should("be.visible")
      .should("be.enabled")
      .click();
  });

  it("Should delete favorit book", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    cy.contains("Delete from favorite")
      .should("be.visible")
      .should("be.enabled")
      .click();
  });
});
