const setAttribute = (element, attributes) => {
  const keys = Object.keys(attributes);
  keys.forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
};

export default setAttribute;
