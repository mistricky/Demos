function find(queryString) {
  let ele = document.querySelector(queryString);

  if (!ele) return undefined;

  let events = {};
  let on = (event, cb) => {
    if (events[event]) {
      ele.removeEventListener(event, events[event]);
    }

    events[event] = cb;

    ele.addEventListener(event, cb);
  };

  return { ele, on };
}
