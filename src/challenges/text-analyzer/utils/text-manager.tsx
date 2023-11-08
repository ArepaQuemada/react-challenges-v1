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
    return this.text.split("\n").length.toString();
  }

  getPronounsQuantity(): string {
    return (
      this.text
        .match(/(he|she|it|they|them|her|him|his)/gi)
        ?.length?.toString() ?? "0"
    );
  }
}
