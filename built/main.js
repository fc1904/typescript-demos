/**
 * author: fcq
 * date: 2020/11/09 17:51:41
 * fileName: main.ts
 * description:
 **/
import { sayHello } from "./greet";
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}
showHello("greeting", "TypeScript");
