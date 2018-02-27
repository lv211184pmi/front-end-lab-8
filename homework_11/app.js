var rootNode = document.getElementById("root");

let createNode = (iconType, title) => {
    let liEl = document.createElement('li');
    liEl.className = "show";
    let iEl = document.createElement('i');
    iEl.className = "material-icons";
    iEl.innerHTML = iconType;
    let pEl = document.createElement('p');
    pEl.innerHTML = title;
    liEl.appendChild(iEl);
    liEl.appendChild(pEl);
    return liEl;
}

let TreeView = (inArr) => {
    let ulNode = document.createElement("ul");
    inArr.forEach(element => {
        let liInner;
        if(element.folder) {
            liInner = createNode("folder", element.title);
        } else {
            liInner = createNode("library_books", element.title);
        }
        if(element.children) {
            let ulChild = document.createElement("ul");
            ulChild.appendChild(convert(element.children));
            liInner.appendChild(ulChild);
        }
        ulNode.appendChild(liInner);
    });
    return ulNode;
}

rootNode.appendChild(TreeView(structure));




