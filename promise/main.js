function isFunction(target) {
  return Object.prototype.toString.call(target) === "[object Function]";
}

class _Promise {
  constructor(executor) {
    this.status = "pending";
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];

    let handlerGenerator = status => data => {
      this.data = data;
      this.status = status;

      let dict = {
        resolve: "onResolveCallbacks",
        reject: "onRejectCallbacks"
      };

      executeCallback(this[dict[status]]);
    };

    let executeCallback = cbs => {
      for (let cb of cbs) {
        cb(this.data);
      }
    };

    let resolve = handlerGenerator("resolve").bind(this);
    let reject = handlerGenerator("reject").bind(this);

    executor(resolve, reject);
  }

  _funcPoly(data) {
    return data;
  }

  _PromiseGenerator(onResolved, onRejected) {
    let self = this;

    return new _Promise((resolve, reject) => {
      let body = () => {
        let status = self.status;

        try {
          let result =
            status === "resolve"
              ? onResolved(self.data)
              : status === "reject"
              ? onRejected(self.data)
              : undefined;

          if (result instanceof _Promise) {
            return resolvedResult.then(resolve, reject);
          }

          if (status === "resolve") {
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      };

      if (self.status === "pending") {
        self.onResolveCallbacks.push(body);
        self.onRejectCallbacks.push(body);
      } else {
        body(status);
      }
    });
  }

  then(onResolved = this._funcPoly, onRejected = this._funcPoly) {
    return this._PromiseGenerator(onResolved, onRejected);
  }

  catch(onRejected) {
    this.then(null, onRejected);
  }
}
