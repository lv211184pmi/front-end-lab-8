var rootNode = document.getElementById("root");
console.log(rootNode.children[0]);

let createNode = (iconType, title) => {
    let liEl = document.createElement('li');
    let aEl = document.createElement('a');
    let iEl = document.createElement('i');
    let pEl = document.createElement('p');
    iEl.className = "material-icons";
    iEl.innerHTML = iconType;
    pEl.innerHTML = title;
    aEl.appendChild(iEl);
    aEl.appendChild(pEl);
    liEl.appendChild(aEl);
    aEl.addEventListener('click', toggleView);
    return liEl;
}

// rootNode.children[0].childNodes.className = "show";


let TreeView = (inArr) => {
    let ulNode = document.createElement("ul");
    ulNode.className = "show"; 
    inArr.forEach(element => {
        let liInner;
        if(element.folder) {
            liInner = createNode("folder", element.title);
        } else {
            liInner = createNode("library_books", element.title);
        }
        if(element.children) {
            let ulChild = document.createElement("ul");
            ulChild.className = "hide";
            ulChild.appendChild(TreeView(element.children));
            liInner.appendChild(ulChild);
        }
        ulNode.appendChild(liInner);
    });
    return ulNode;
}

let toggleView = () => {
    let parent = event.target.parentNode;
    let iToggle = parent.getElementsByTagName('i');
    if(iToggle[0].innerHTML === "folder" || "folder_open") {
        console.log(iToggle[0]);
        switchView(iToggle[0], parent.nextSibling);
    }
}

let switchView = (item, neighbour) => {
    if(item.innerHTML === "folder") {
        item.innerHTML = "folder_open";
        neighbour.style.display = "inline";
    } else if(item.innerHTML === "folder_open"){
        item.innerHTML = "folder";
        neighbour.style.display = "none";
    }
}

rootNode.appendChild(TreeView(structure));




