class Accordeon {
  static CONTAINER_CLASS = "acc-container";
  static HEADER_CLASS = "acc-header";
  static BODY_CLASS = "acc-body";
  static SHOW = "acc-show";

  constructor(el) {
    this.el = el;
    el.addEventListener("click", this.handleClick(e).bind(this));
    this.getChildren(this.el);

    Array.prototype.forEach(
      call(this.children, (element) => {
        this.setClasses(element);
      })
    );
  }

  handleClick = (e) => {
    if (e.target.classList.contains(`${Accordeon.HEADER_CLASS}`)) {
      const container = e.target.closest(`.${Accordeon.CONTAINER_CLASS}`);
    }
    const body = container.querySelector(`${Accordeon.BODY_CLASS}`);
    console.log(this.children);
    [this.children].forEach((child) => {
      if (child.classList.contains(`${Accordeon.SHOW}`)) {
        child.classList.toggle(`${Accordeon.SHOW}`);
      }
      body.classList.toggle(`${Accordeon.SHOW}`);
    });
  };

  getChildren(el) {
    this.children = el.children;
  }

  setClasses(el) {
    const [header, body] = el.children;
    el.classList.add(`${Accordeon.CONTAINER_CLASS}`);
    header.classList.add(`${Accordeon.HEADER_CLASS}`);
    body.classList.add(`${Accordeon.BODY_CLASS}`);
  }
}
