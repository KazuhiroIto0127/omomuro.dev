export class User {
    readonly id: number;
    readonly emoji: string;
    readonly name: string;
    readonly old: number;

    constructor(id: number, emoji: string, name: string, old: number) {
      this.id = id;
      this.emoji = emoji;
      this.name = name;
      this.old = old;
    }

    greeting():string {
      return `こんにちは！私は${this.name}`;
    }
}
