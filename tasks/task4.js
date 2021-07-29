/* Task 1 */
function createObject(obj) {
  this.obj = obj;
  Object.keys(this.obj).forEach((el) => {
    if (typeof this.obj[el] === "function") {
      this.obj[el] = this.obj[el].bind(obj);
    }
  });
  return obj;
}

/* Task 2 */
function Collection(constructor) {
  this.list = [];

  this.readAll = function () {
    return this.list;
  };

  this.add = function (...args) {
    this.list.push(new constructor(...args));
  };

  this.get = function (fn) {
    const item = this.list.find(fn);
    const self = this;

    return {
      update(cb) {
        cb(Object.seal(item));
        return this;
      },
      read() {
        return item;
      },
      remove() {
        self.list.splice(self.list.indexOf(item), 1);
        return item;
      },
    };
  };

  this.getBy = function (fn) {
    const items = this.list.filter(fn);

    return {
      update(cb) {
        items.map((...args) => cb(...args));
        return this;
      },
      read() {
        return items;
      },
    };
  };
}

module.exports = {
  createObject,
  Collection,
};
