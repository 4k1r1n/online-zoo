export default function createDomNode(element, classNames) {
  const node = document.createElement(element);
  node.className = classNames;
  return node;
}
