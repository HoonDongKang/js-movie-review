import { headerLogo, headerSearchBar } from "./index";

export const Header = {
  render() {
    const element = document.createElement("header");

    const logo = headerLogo.render();
    const searchBar = headerSearchBar.render();

    element.append(logo, searchBar);

    return element;
  },
};
