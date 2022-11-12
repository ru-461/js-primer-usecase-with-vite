export class EventEmitter {
  // Map
  #listeners = new Map();
  /**
   * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  addEventListener(type, listener) {
    // 関数登録
    if (!this.#listeners.has(type)) {
      this.#listeners.set(type, new Set());
    }

    const listenerSet = this.#listeners.get(type);
    listenerSet.add(listener);
  }

  /**
   * 指定したイベントをディスパッチする
   * @param {string} type イベント名
   */
  emit(type) {
    const listenerSet = this.#listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach((listener) => {
      listener.call(this);
    });
  }

  /**
   * 指定したイベントのイベントリスナーを解除する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  removeEventListener(type, listener) {
    const listenerSet = this.#listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach((ownlistener) => {
      if (ownlistener === listener) {
        listener.delete(listener);
      }
    });
  }
}
