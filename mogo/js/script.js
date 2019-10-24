//Настройка табов на блоке Servise
let ServiseElements = {
    images: document.getElementsByClassName("Servise__StrelkaTabsOpen"),
    tabs: document.getElementsByClassName("Servise__SecondTextForTabs")
}

let serviseShagOpen = 0;

for(let i = 0; i < ServiseElements.images.length; i++){
    ServiseElements.images[i].addEventListener("click", function(event){

        function CloseTabsAll(){
            for(let i = 0; i < ServiseElements.tabs.length; i++){
                ServiseElements.tabs[i].style.display = "none";
            }
        }

        CloseTabsAll();

        if(event.target.id === "Servise__StrelkaTabsOpen__id1"){
            if(serviseShagOpen == 0){
                ServiseElements.tabs[0].style.display = "block";
                ServiseElements.images[0].src = "images/Servise/ARROW_DOWN.png";
                serviseShagOpen = 1;
            }else{
                ServiseElements.tabs[0].style.display = "none";
                ServiseElements.images[0].src = "images/Servise/ARROW_UP.png";
                serviseShagOpen = 0;
            }
        }

        if(event.target.id === "Servise__StrelkaTabsOpen__id2"){
            if(serviseShagOpen == 0){
                ServiseElements.tabs[1].style.display = "block";
                ServiseElements.images[1].src = "images/Servise/ARROW_DOWN.png";
                serviseShagOpen = 1;
            }else{
                ServiseElements.tabs[1].style.display = "none";
                ServiseElements.images[1].src = "images/Servise/ARROW_UP.png";
                serviseShagOpen = 0;
            }
        }

        if(event.target.id === "Servise__StrelkaTabsOpen__id3"){
            if(serviseShagOpen == 0){
                ServiseElements.tabs[2].style.display = "block";
                ServiseElements.images[2].src = "images/Servise/ARROW_DOWN.png";
                serviseShagOpen = 1;
            }else{
                ServiseElements.tabs[2].style.display = "none";
                ServiseElements.images[2].src = "images/Servise/ARROW_UP.png";
                serviseShagOpen = 0;
            }
        }
    });
}