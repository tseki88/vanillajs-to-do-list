!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=(()=>{const e=(e=>{const t={toDoList:[],title:e,idCounter:1};return{addToList:e=>{if(!e)return;const n=(e=>({title:e,isPriority:!1,isCompleted:!1}))(e);n.id=t.idCounter,t.idCounter++,t.toDoList.push(n)},removeFromList:e=>{const n=t.toDoList,r=n.findIndex(t=>t.id===parseInt(e));n.splice(r,1)},toggleComplete:e=>{const n=t.toDoList,r=n.findIndex(t=>t.id===parseInt(e));n[r].isCompleted=!n[r].isCompleted},togglePriority:e=>{const t=document.querySelector(e);t.isPriority=!t.isPriority},getList:()=>t.toDoList,getTitle:()=>t.title}})("Welcome"),t=(()=>{const e={currentProject:1,projectList:[],idCounter:1};return{addToProjectList:t=>{if(!t)return;const n={project:t};n.id=e.idCounter,e.idCounter++,e.projectList.push(n)},removeFromProjectList:t=>{const n=e.projectList,r=n.findIndex(e=>e.id===parseInt(t));n.splice(r,1)},getProjectList:()=>e.projectList,getCurrentProject:()=>e.currentProject}})();return t.addToProjectList(e),console.log(t.getProjectList()),{defaultProject:e,initProject:t}})();var o=()=>({displayItems:e=>{const t=document.getElementById("currentList");for(;t.firstChild;)t.removeChild(t.lastChild);e.forEach(e=>{const n=document.createElement("li");n.setAttribute("id",e.id);const r=document.createElement("input");r.setAttribute("class","toDoItem"),r.type="checkbox",r.checked=e.isCompleted,n.appendChild(r);const o=document.createElement("label");o.setAttribute("class","toDoText"),e.isCompleted&&o.classList.add("toDoComplete"),o.innerHTML=e.title,n.appendChild(o);const i=document.createElement("button");i.setAttribute("class","deleteButton"),i.innerHTML="delete",n.appendChild(i),t.appendChild(n)})},bindToggle:e=>{document.querySelectorAll(".toDoText").forEach(t=>{t.addEventListener("click",e)}),document.querySelectorAll(".toDoItem").forEach(t=>{t.addEventListener("change",e)})},bindDelete:e=>{document.querySelectorAll(".deleteButton").forEach(t=>{t.addEventListener("click",e)})}});var i=(()=>{const e=o(),t=()=>{e.displayItems(r.defaultProject.getList()),e.bindToggle(i),e.bindDelete(n)},n=e=>{const n=e.target.parentElement.id;r.defaultProject.removeFromList(n),t()},i=e=>{const n=e.target.parentElement.id;r.defaultProject.toggleComplete(n),t()};return{init:()=>{document.querySelector(".newItem").addEventListener("submit",e=>{e.preventDefault();const n=document.querySelector("#title").value;r.defaultProject.addToList(n),t(),e.target.reset()}),e.displayItems(r.defaultProject.getList()),(e=>{const t=document.getElementById("projectList");for(;t.firstChild;)t.removeChild(t.lastChild);e.forEach(e=>{const n=document.createElement("li");n.setAttribute("id",e.id);const r=document.createElement("label");r.setAttribute("class","toDoText"),r.innerHTML=e.project.getTitle(),n.appendChild(r),t.appendChild(n)})})(r.initProject.getProjectList()),e.bindToggle(i)}}})();const d=()=>{const e=document.createElement("main");return e.setAttribute("id","main"),e.appendChild((()=>{const e=document.createElement("form");e.setAttribute("class","newItem");const t=(t,n)=>{const r=document.createElement(t);for(let e in n)r.setAttribute(e,n[e]);e.appendChild(r)};return t("label",{for:"title"}),t("input",{type:"text",placeholder:"Add Note Here",id:"title"}),t("input",{type:"submit",value:"Add New Item"}),e})()),e.appendChild((()=>{const e=document.createElement("ul");return e.setAttribute("id","currentList"),e})()),e},c=document.getElementById("content");c.appendChild((()=>{const e=document.createElement("header"),t=document.createElement("h1");return t.innerHTML="To Do Project",e.appendChild(t),e})()),c.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","container"),e.appendChild((()=>{const e=document.createElement("aside");e.setAttribute("id","aside");const t=document.createElement("ul");return t.setAttribute("id","projectList"),e.appendChild(t),e})()),e.appendChild(d()),e})()),i.init()}]);