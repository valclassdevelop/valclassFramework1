let propertiesAnimations=["v-animation-none","v-animation-spin","v-animation-ping","v-animation-pulse","v-animation-bounce","v-animation-typing-text"],valuesAnimations=["animation: none;","animation: spin 1s linear infinite;","animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; ","animation: pulse 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;","animation: bounce 2s infinite ease-in;","white-space: nowrap;\n     animation: typing 10s steps(70, end) infinite;\n    "],animations=["","\n    @keyframes spin {\n        from {\n          transform: rotate(0deg);\n        }\n        to {\n          transform: rotate(360deg);\n        }\n      }\n    ","@keyframes ping {\n        75%, 100% {\n         transform: scale(2);\n         opacity: 0;\n        }\n      }","@keyframes pulse {\n        0%, 100% {\n           opacity: 1;\n        }\n        50% {\n            opacity: 0.5;\n        }\n     }","@keyframes bounce { \n        0%, 20%, 50%, 80%, 100% {\n            transform: translateY(0);\n        } \n        40% {\n            transform: translateY(-30px);\n        } \n        60% {\n            transform: translateY(-15px);\n        } \n    }","@keyframes typing {\n        0% {\n           width: 0%;\n        }\n        100% {\n           width: 100%;\n        }\n      }"];for(var i=0;i<propertiesAnimations.length;i++)if(document.querySelector("body").classList.contains(propertiesAnimations[i])&&!document.querySelector("style").innerText.includes(propertiesAnimations[i])){let e=` \n                .${propertiesAnimations[i]} { \n                    ${valuesAnimations[i]}\n                }\n                ${animations[i]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}setTimeout(()=>{if(document.querySelector("div"))for(var e=0;e<propertiesAnimations.length;e++)for(var n=0;n<document.querySelectorAll("div").length;n++)if(document.querySelectorAll("div")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("h1"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("h1").length;n++)if(document.querySelectorAll("h1")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("h2"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("h2").length;n++)if(document.querySelectorAll("h2")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                            ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("h3"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("h3").length;n++)if(document.querySelectorAll("h3")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("h4"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("h4").length;n++)if(document.querySelectorAll("h4")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("h5"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("h5").length;n++)if(document.querySelectorAll("h5")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("h6"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("h6").length;n++)if(document.querySelectorAll("h6")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("span"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("span").length;n++)if(document.querySelectorAll("span")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("p"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("p").length;n++)if(document.querySelectorAll("p")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("small"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("small").length;n++)if(document.querySelectorAll("small")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("input"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("input").length;n++)if(document.querySelectorAll("input")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("textarea"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("textarea").length;n++)if(document.querySelectorAll("textarea")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("select"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("select").length;n++)if(document.querySelectorAll("select")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("button"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("button").length;n++)if(document.querySelectorAll("button")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("sup"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("sup").length;n++)if(document.querySelectorAll("sup")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("sub"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("sub").length;n++)if(document.querySelectorAll("sub")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("mark"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("mark").length;n++)if(document.querySelectorAll("mark")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("code"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("code").length;n++)if(document.querySelectorAll("code")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("pre"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("pre").length;n++)if(document.querySelectorAll("pre")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("blockquote"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("blockquote").length;n++)if(document.querySelectorAll("blockquote")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("a"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("a").length;n++)if(document.querySelectorAll("a")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n                    .${propertiesAnimations[e]} { \n                        ${valuesAnimations[e]}\n                    }\n                    ${animations[e]}`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("ul"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("ul").length;n++)if(document.querySelectorAll("ul")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n            .${propertiesAnimations[e]} { \n                ${valuesAnimations[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}if(document.querySelector("li"))for(e=0;e<propertiesAnimations.length;e++)for(n=0;n<document.querySelectorAll("li").length;n++)if(document.querySelectorAll("li")[n].classList.contains(propertiesAnimations[e])&&!document.querySelector("style").innerText.includes(propertiesAnimations[e])){let n=` \n            .${propertiesAnimations[e]} { \n                ${valuesAnimations[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(n))}},300);