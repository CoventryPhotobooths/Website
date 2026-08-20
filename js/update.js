fetch('update.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_update");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
