class Tab {
  static CONTAINER_CLASS = "tab-container";
  static LABEL_CLASS = "tab-label";
  static CONTENT_CLASS = "tab-content";
  static ACTIVE = "tab-active";
  static CONTENT_ACTIVE = "content-active";
  static CONTENT_HIDDEN = "content-hidden";

  constructor(el) {
    this.el = el;
    el.addEventListener("click", this.handleClick.bind(this));

    this.setClasses(el);
  }

  handleClick = (e) => {
    const element = e.target;
    if (!element.classList.contains(`${Tab.LABEL_CLASS}`)) {
      return;
    }

    // console.log(element);
    const label = element.closest(".label");
    const content = label.nextElementSibling;

    Array.prototype.forEach.call(label.children, (child) => {
      child.classList.remove(`${Tab.ACTIVE}`);
    });
    element.classList.toggle(`${Tab.ACTIVE}`);

    const arrOfLabels = [...label.children];
    const arrOfContents = [...content.children];

    const index = this.getIndexOfActiveTab(arrOfLabels);
    Array.prototype.forEach.call(content.children, (child) => {
      child.classList.remove(`${Tab.CONTENT_ACTIVE}`);
      child.classList.add(`${Tab.CONTENT_HIDDEN}`);
    });
    
    arrOfContents[index].classList.add(`${Tab.CONTENT_ACTIVE}`);
    arrOfContents[index].classList.toggle(`${Tab.CONTENT_HIDDEN}`);  
  };

  setClasses(el) {
    const [label, content] = el.children;
    el.classList.add(`${Tab.CONTAINER_CLASS}`);
    Array.prototype.forEach.call(label.children, (element) => {
      element.classList.add(`${Tab.LABEL_CLASS}`);
    });
    Array.prototype.forEach.call(content.children, (element) => {
      element.classList.add(`${Tab.CONTENT_CLASS}`);
      element.classList.add(`${Tab.CONTENT_HIDDEN}`);
    });
  }

  getIndexOfActiveTab(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains(`${Tab.ACTIVE}`)) {
        return i;
      }
    }
  }
}
