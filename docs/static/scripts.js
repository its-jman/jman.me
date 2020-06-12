const VISIBLE_CLASS = "visible";
let isOpen = false;
let xIcon = document.querySelector(".mobile-menu-icon .icon-x");
let menuIcon = document.querySelector(".mobile-menu-icon .icon-menu");
let menu = document.querySelector(".global-nav");

function syncMobileMenuVisibility() {
  if (isOpen) {
    xIcon?.classList.add(VISIBLE_CLASS);
    menuIcon?.classList.remove(VISIBLE_CLASS);
    menu?.classList.add(VISIBLE_CLASS);
  } else {
    xIcon?.classList.remove(VISIBLE_CLASS);
    menuIcon?.classList.add(VISIBLE_CLASS);
    menu?.classList.remove(VISIBLE_CLASS);
  }
}

function toggleMobileMenu() {
  isOpen = !isOpen;
  syncMobileMenuVisibility();
}

syncMobileMenuVisibility();
const params = new URLSearchParams(window.location.search);
const source = params.get("s");
if (source) {
  // I know this is exposed, feel free to send me a message! :)
  fetch(
    "https://lxob278pq5.execute-api.us-east-1.amazonaws.com/email-handler",
    {
      method: "POST",
      body: JSON.stringify({
        subject: "Homepage viewed with tag!",
        content: `Source: ${atob(source)}<br>Raw Source: ${source}`,
      }),
    }
  ).catch(() => {});
}
