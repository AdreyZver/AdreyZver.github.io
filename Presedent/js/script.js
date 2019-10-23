//Досрочное присвоение марджина блоку о себе
AboutUsMarginTop();
AboutUsAnimationSettings();

//События изменения ширины экрана
window.addEventListener("resize", function(){
    AboutUsMarginTop();
    AboutUsAnimationSettings();
});

//Настройка отступа от шапки для блока About Us
function AboutUsMarginTop(){
    let HeaderBlock = this.document.getElementsByClassName("header")[0];
    let AboutUsBlock = this.document.getElementsByClassName("aboutme__maintext")[0];

    AboutUsBlock.style.marginTop = HeaderBlock.offsetHeight + 20 + "px";
}


//Настройка анимации блока О СЕБЕ
function AboutUsAnimationSettings(){
    let Image = document.getElementsByClassName("aboutme__Image")[0];
    let Text = document.getElementsByClassName("aboutme__Text")[0];

    let Image2 = document.getElementsByClassName("WhyMe__Image")[0];
    let Text2 = document.getElementsByClassName("WhyMe__Text")[0];

    let Image3 = document.getElementsByClassName("MyObes__image")[0];
    let Text3 = document.getElementsByClassName("MyObes__Text")[0];

    if(window.innerWidth <= 547){
        Image.style.transform = "none";
        Text.style.transform = "none";
        Image2.style.transform = "none";
        Text2.style.transform = "none";
        Image3.style.transform = "none";
        Text3.style.transform = "none";
    }else{
        Image.style.removeProperty("transform");
        Text.style.removeProperty("transform");
        Image2.style.removeProperty("transform");
        Text2.style.removeProperty("transform");
        Image3.style.removeProperty("transform");
        Text3.style.removeProperty("transform");
    }
}