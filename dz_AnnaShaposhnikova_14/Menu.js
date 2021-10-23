class Menu {
  static BURGER = "btn-burger";
  static NAV = "nav"; 
  static SHOW = "show";
  static HIDDEN = "hidden";

  constructor(el) {
    this.el = el;
    this.setClasses(el);
    const burger = el.querySelector('.btn-burger');
    const nav = el.querySelector('.nav');
    burger.addEventListener("click", this.handleClickOnBurger.bind(this));
    nav.addEventListener("click", this.handleClickOnNav.bind(this));
    
  }

  handleClickOnBurger = (e) => {
    const element = e.target;  
    
    const nav = this.el.querySelector('.nav');

    nav.classList.toggle(`${Menu.HIDDEN}`);
    nav.classList.toggle(`${Menu.SHOW}`);
  };

  handleClickOnNav = (e)  => {
    const a = e.target;
    const nav = this.el.querySelector('.nav');
    nav.classList.toggle(`${Menu.HIDDEN}`);
  }

  

  setClasses = (el) => {
    const [burger,nav] = el.children;   
    burger.classList.add(`${Menu.BURGER}`);    
    nav.classList.add(`${Menu.HIDDEN}`,`${Menu.NAV}`);
  
  } 
}
