function newButton(){
    let btn=document.createElement("button");
    //btn.className="button-56"
    btn.className="div1 button-55"
    btn.innerHTML = "This is a new button"
    btn.addEventListener("click", function(){
        newButton();
    });
    document.body.appendChild(btn);
}