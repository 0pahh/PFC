const playOneGame = require("./PFC");

test("Test victoire du joueur", async () => {
  await expect(playOneGame("Pierre", "Ciseaux")).resolves.toBe("Victoire");
  await expect(playOneGame("Papier", "Pierre")).resolves.toBe("Victoire");
  await expect(playOneGame("Ciseaux", "Papier")).resolves.toBe("Victoire");
});

test("Test défaite du joueur", async () => {
  await expect(playOneGame("Ciseaux", "Pierre")).resolves.toBe("Défaite");
  await expect(playOneGame("Pierre", "Papier")).resolves.toBe("Défaite");
  await expect(playOneGame("Papier", "Ciseaux")).resolves.toBe("Défaite");
});

test("Test égalité", async () => {
  await expect(playOneGame("Pierre", "Pierre")).resolves.toBe("Égalité");
  await expect(playOneGame("Papier", "Papier")).resolves.toBe("Égalité");
  await expect(playOneGame("Ciseaux", "Ciseaux")).resolves.toBe("Égalité");
});

test("Test mauvaise saisie", async () => {
  await expect(
    playOneGame("Cassoulet William Saurin", "Pierre")
  ).rejects.toThrow();
});
