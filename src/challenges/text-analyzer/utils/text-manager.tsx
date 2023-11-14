export class TextManager {
  private text: string;
  constructor(text: string) {
    this.text = text;
  }

  getWordsQuantity(): string {
    return this.text.split(" ").length.toString();
  }

  getCharactersQuantity(): string {
    return this.text.split("").length.toString();
  }

  getSentencesQuantity(): string {
    return this.text.split(".").length.toString();
  }

  getParagraphsQuantity(): string {
    return this.text
      .split("\n")
      .filter((item) => item !== "")
      .length.toString();
  }

  getPronounsQuantity(): string {
    const pronouns = [
      "i",
      "we",
      "you",
      "he",
      "she",
      "it",
      "they",
      "me",
      "us",
      "her",
      "him",
      "them",
      "mine",
      "ours",
      "yours",
      "hers",
      "his",
      "theirs",
      "myself",
      "yourself",
      "herself",
      "himself",
      "itself",
      "ourselves",
      "yourselves",
      "themselves",
    ];
    const regex = new RegExp(`\\b(${pronouns.join("|")})\\b`, "gi");
    const matches = this.text.match(regex);
    return matches ? matches.length.toString() : "0";
  }
}
