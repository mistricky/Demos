const Observe = data => {
  let dep = new Dep();

  return new Proxy(data, {
    set(target, prop, value, receive) {
      console.info("bbb");
      dep.notify();
      return Reflect.set(target, prop, value, receive);
    },
    get(target, prop, receive) {
      console.info("aaa");
      dep.addWatcher();
      return Reflect.get(target, prop, receive);
    }
  });
};

class Dep {
  constructor() {
    Dep.target = null;
    this.subs = [];
  }

  addWatcher() {
    Dep.target && this.subs.push(Dep.target);
  }

  notify() {
    this.subs.forEach(watcher => watcher.update());
  }
}

class Watcher {
  constructor(render) {
    Dep.target = this;
    this.render = render;

    render();
    Dep.target = null;
  }

  update() {
    console.info("watcher update");
    this.render(); // 绑定 watcher
  }
}

class Vue {
  constructor(options) {
    this.$data = options.data && options.data.apply(this);
    this.$data = Observe(this.$data);
  }

  mount() {
    new Watcher(this.render.bind(this));
  }

  render() {
    // 模拟访问 data
    this.$data;
  }
}

const vue = new Vue({
  data() {
    return {
      name: "Jon"
    };
  }
});

vue.mount();
vue.$data.name = "aa";
