import logoImg from "../../../assets/logo.png";

export const headerLogo = {
  render() {
    const element = document.createElement("h1");
    element.innerHTML = /*html */ `
      <img src="${logoImg}" alt="MovieList 로고" />
    `;
    return element;
  },
};