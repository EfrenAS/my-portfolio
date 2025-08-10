export const getHtmlElement = ({element = ""}) => {
  const htmlElement = document.querySelector(element);

  if (!htmlElement) throw new Error(`Cannot find ${element}`);

  return htmlElement;
}

export const getAllHtmlElements = ({element = ""}) => {
  const htmlElements = document.querySelectorAll(element);

  if (!htmlElements) throw new Error(`Cannot find ${element}`);

  return htmlElements;
}
