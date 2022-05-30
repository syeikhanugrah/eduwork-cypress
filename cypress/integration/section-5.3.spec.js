describe("Mencoba lebih banyak pengecekan dengan assertion", function () {
  it("Mengunjungi web example cypress dan mencoba mengetik sebuah email", function () {
    // Pertama kita kunjungi web example cypress
    cy.visit("https://example.cypress.io");

    // Lalu kita pergi ke halaman contoh untuk penggunaan fungsi type()
    // cari dahulu kata-kata yang mengandung "type" dan click link nya
    cy.contains("type").click();

    // Pastikan sekarang kita sudah berpindah ke halaman actions dengan mengecek
    // pada url-nya
    cy.url().should("include", "https://example.cypress.io/commands/actions");

    // Pastikan di halaman action terdapat judul halaman "Actions"
    cy.get("h1").should("have.text", "Actions");

    // Pastikan di halaman action terdapat sub judul ".type()"
    cy.get("h4#type").should("have.text", ".type()");

    // Dan sekarang kita akan coba mengetik menggunakan fungsi type(), dan cek apakah
    // email yang kita tulis berhasil tertulis menggunakan assertion
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
