let styles=" \n.v-dark-mode {\n    background-color: rgb(44, 44, 44);\n    border: none;\n    width: 100px;\n    outline: none;\n    height: max-content;\n    border-radius: 40px;\n    padding: 5px;\n    text-align: center;\n    font-weight: 500;\n }\n \n .v-dark-mode-on {\n    background-color: rgb(160, 160, 160);\n    border: none;\n    width: 100px;\n    outline: none;\n    height: max-content;\n    border-radius: 40px;\n    padding: 5px;\n    text-align: center;\n    font-weight: 500;\n }\n \n .v-dark-mode .toggle-mode {\n    position: relative;\n    width: 35px;\n    height: 35px;\n    left: 0;\n    cursor: pointer;\n    border-radius: 90px;\n    background-color: #fff;\n    transition: 0.3s;\n }\n \n .toggle-mode:hover {\n    opacity: 0.8;\n    transform: scale(0.97);\n    transition: 0.3s;\n }\n \n .modeDarks {\n    position: relative;\n    margin-left: 65px;\n    transition: 0.3s;\n    background-color: rgb(44, 44, 44);\n }\n \n .darkModes { \n    background-color: #313131;\n    color: white;\n }\n \n .lightModes {\n    background-color: white;\n    color: #313131;\n }";document.querySelector("div.v-dark-mode")&&!document.querySelector("style").innerText.includes(styles)&&(document.getElementsByTagName("style")[0].appendChild(document.createTextNode(styles)),s=0,document.querySelector("div.toggle-mode").addEventListener("click",()=>{if(s+=1,s%2==0)for(var e=0;e<document.querySelectorAll("div.v-template-dark-mode").length;e++)document.querySelector(".toggle-mode").classList.remove("modeDarks"),document.querySelector(".v-dark-mode").classList.remove("v-dark-mode-on"),document.querySelectorAll(".v-template-dark-mode")[e].classList.remove("darkModes");else for(e=0;e<document.querySelectorAll("div.v-template-dark-mode").length;e++)document.querySelector(".toggle-mode").classList.add("modeDarks"),document.querySelector(".v-dark-mode").classList.add("v-dark-mode-on"),document.querySelectorAll(".v-template-dark-mode")[e].classList.add("darkModes")})),document.querySelector("div.v-dark-mode")&&!document.querySelector("style").innerText.includes(propertiesDirections[i])&&(document.getElementsByTagName("style")[0].appendChild(document.createTextNode(styles)),d=0,document.querySelector("div.toggle-mode").addEventListener("click",()=>{if(d+=1,d%2==0)for(var e=0;e<document.querySelectorAll("div.v-template-light-mode").length;e++)document.querySelector(".toggle-mode").classList.remove("modeDarks"),document.querySelector(".v-dark-mode").classList.remove("v-dark-mode-on"),document.querySelectorAll(".v-template-light-mode")[e].classList.remove("lightModes");else for(e=0;e<document.querySelectorAll("div.v-template-light-mode").length;e++)document.querySelector(".toggle-mode").classList.add("modeDarks"),document.querySelector(".v-dark-mode").classList.add("v-dark-mode-on"),document.querySelectorAll(".v-template-light-mode")[e].classList.add("lightModes")}));