export class ArcadiaHeader extends HTMLElement {
  constructor() {
    super();
  }

  underlineActiveIndex(link) {
    const currentPath = window.location.pathname.slice("1");

    const hrefArray = link.href.split("/");
    const thisPath = hrefArray[hrefArray.length - 1];

    console.log(`Current Path: ${currentPath} || This Path: ${thisPath}`);

    if (currentPath === thisPath) {
      link.classList.add("active");
    }
  }

  connectedCallback() {
    // Create shadow root
    const shadow = this.attachShadow({ mode: "open" });

    const nav = document.createElement("nav");
    nav.setAttribute("class", "c-header");

    const unorderedList = document.createElement("ul");

    const logo = document.createElement("img");
    logo.setAttribute("class", "c-header-logo");
    logo.setAttribute("src", "./static/img/placeholder_logo.png");
    logo.setAttribute("alt", "");

    // Append Li to Lu
    for (let i = 0; i <= 2; i++) {
      const listItem = document.createElement("li");

      switch (i) {
        case 0: {
          // Home Page
          const link = document.createElement("a");
          link.setAttribute("class", "c-header-logo");
          link.setAttribute("href", "./index.html");
          console.log(link);
          link.appendChild(logo);
          listItem.appendChild(link);
          unorderedList.appendChild(listItem);

          this.underlineActiveIndex(link);
          break;
        }
        case 1: {
          // Heroes Page
          const link = document.createElement("a");
          link.setAttribute("class", "c-header-link");
          link.setAttribute("href", "./heroes.html");
          link.innerText = "CHARACTERS";
          listItem.appendChild(link);
          unorderedList.appendChild(listItem);

          this.underlineActiveIndex(link);
          break;
        }
        case 2: {
          // DevLog Pag
          const link = document.createElement("a");
          link.setAttribute("class", "c-header-link");
          link.innerText = "DEVLOG";
          listItem.appendChild(link);
          unorderedList.appendChild(listItem);
          break;
        }
      }
    }
    // Append Child to Nav
    nav.appendChild(unorderedList);

    // Apply scss styles
    const styles = document.createElement("link");
    styles.setAttribute("rel", "stylesheet");
    styles.setAttribute("href", "./src/scss/dist/css/header.min.css");

    // Attach elements to shadow dom
    shadow.appendChild(styles);
    shadow.appendChild(nav);
  }
}
