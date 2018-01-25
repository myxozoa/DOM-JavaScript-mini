
class TabItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
    this.items = element.querySelectorAll('.Tabs__item');
    this.items = Array.from(this.items).map((link) => {
      return new TabLink(link, this);
    });
    this.activeLink = this.items[0];
    this.init();
  }

  select() {
    // should use classList
    this.items.classList.add('Tabs__item-selected');

  }

  deselect() {
    // should use classList
    this.items.classList.remove('Tabs__item-selected');

  }
}

class TabLink {
  constructor(element, parent) {
    this.element = element; // attach dom element to object
    // this.links = element.querySelectorAll(".Tabs__link");
    this.tabs = parent; // attach parent to object
    this.tabItem = this.tabs.getTab(); // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabItem to be a new instance of TabItem, passing it this.tabItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    this.element.classList.add('Tabs__link-selected');
    // select the associated tab
    this.tabs.classList.add('');
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = this.element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    // select the first link and tab upon ititialization

  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
