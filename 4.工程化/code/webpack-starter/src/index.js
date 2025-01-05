import "./style/index.css";
import "./style/header.css";
import "./style/footer.less";
const getName = () => `webpack-starter ${Math.floor(Math.random())}`;
console.log(`Hello from ${getName()}!`);

document.body.innerHTML = `<h1>Hello from ${getName()}!</h1>`;

if (Math.random() > 0.1) {
  // 异步加载
  import("./footer").then(({ getFooterDemo }) => {
    getFooterDemo();
  });
}
