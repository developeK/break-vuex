import store from '@/store';

class StoreHandler {
  constructor(module) {
    if (!module) return console.error('The module is not defined');

    this.module = module; // book/author
  }

  get(command) {
    if (!command) return console.error('The command is not defined');
    console.log('store', store);
    return store.state[this.module][command];
  }

  getter(command) {
    if (!command) return console.error('The command is not defined');

    return store.getters[`${this.module}/${command}`];
  }

  set(command, payload) {
    if (!command) return console.error('The command is not defined');

    console.log('this.module', this.module, `${this.module}/${command}`, store);
    return store.dispatch(`${this.module}/${command}`, payload, { root: true });
  }
}

export default StoreHandler;
