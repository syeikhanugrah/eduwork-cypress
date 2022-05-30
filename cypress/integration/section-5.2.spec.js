describe("Mencoba mengetik dengan fungsi type() yang ada pada cypress", function () {
  it("Mengunjungi web example cypress dan mencoba mengetik sebuah email", function () {
    // Pertama kita kunjungi web example cypress
    cy.visit("https://example.cypress.io");

    // Lalu kita pergi ke halaman contoh untuk penggunaan fungsi type()
    // cari dahulu kata-kata yang mengandung "type" dan click link nya
    cy.contains("type").click();

    // Pastikan sekarang kita sudah berpindah ke halaman actions dengan mengecek
    // pada url-nya
    cy.url().should("include", "https://example.cypress.io/commands/actions");

    // Dan sekarang kita akan coba mengetik menggunakan fungsi type(), dan cek apakah
    // email yang kita tulis berhasil tertulis menggunakan assertion
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
