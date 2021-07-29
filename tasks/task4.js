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
  this.constructor = constructor;
  this.base = [];

  this.readAll = function () {
    return this.base;
  };

  this.add = function (...args) {
    this.base.push(new constructor(...args));
  };

  this.get = function (fn) {
    this.item = this.base.find(fn);

    this.item.update = function (func) {
      func(Object.seal(this));
      return this;
    };

    this.item.read = function () {
      return this;
    };

    this.item.remove = () => {
      this.base.splice(this.base.indexOf(this.item), 1);
      return this.item;
    };

    return this.item;
  };

  this.getBy = function (fn) {
    this.items = this.base.filter(fn);

    this.items.update = function (func) {
      this.map((...args) => func(...args));
      return this;
    };

    this.items.read = function () {
      return this;
    };
    return this.items;
  };
}

module.exports = {
  createObject,
  Collection,
};
