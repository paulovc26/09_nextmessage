export default class Id {
  static get novo(): string {
    return Math.random().toString(36).slice(2, 11);
  }
}
