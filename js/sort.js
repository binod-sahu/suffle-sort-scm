const getShuffledArr = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const suffleNode = (event) => {
    const list = document.getElementById("nodeList");
    let i = 0;
    const id = event.target.id;
    let nodes = list.children;
    if (id === 'suffle') {
        nodes = Array.prototype.slice.call(nodes);
        nodes = getShuffledArr(nodes);
    } 
    if (id === 'reset') {
        nodes = Array.prototype.slice.call(nodes);
        nodes = nodes.sort(function(a, b){return a.innerText-b.innerText});
    }
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
} 