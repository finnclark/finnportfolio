var Parallax = {
  init(el, displace)  {
    this.animateItem(el, displace);
  },
  setPosition() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
  },
  animateItem(el, displace) {
    if (typeof window.orientation !== 'undefined') { return; }
    var scrollPosition = this.setPosition();
    el.style.transform = "translate3d(0px, "+(scrollPosition / displace)+"px, 0px)";
  }
}

// export default Parallax;
