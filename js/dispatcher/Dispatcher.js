

class Dispatcher {
  constructor() {
    this._callbacks = [];
    this._promises = [];
  }
  register(callback) {
    this._callbacks.push(callback);
    return this._callbacks.length - 1;
  }

  dspatch(payload) {
    var resolves = [];
    var rejects = [];
    this._promises = this._callbacks.map((_, i) =>
      new Promise(function(resolve, reject) {
        resolves[i] = resolve;
        rejects[i] = reject;
      });
    );

    this._callbacks.forEach(function(callback, i) {
      // Callback can return an obj, to resolve, or a promise, to chain.
      // See waitFor() for why this might be useful.
      Promise.resolve(callback(payload)).then(function() {
        resolves[i](payload);
      }, function() {
        rejects[i](new Error('Dispatcher callback unsuccessful'));
      });
    });
    this._promises = [];

  }
};

module.exports = Dispatcher;
