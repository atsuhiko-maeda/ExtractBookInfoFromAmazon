let results = "";
let title = document.getElementById("productTitle").innerText;
let author = document.getElementsByClassName("author")[0].innerText;
results=title+"\n"+author+"\n";
let list = document.getElementsByClassName("a-list-item");
for (let i=0 ; i<list.length ; i++){
    let inner = list[i].innerText;
    if (inner.includes("ISBN") || inner.includes("出版社"))
    results+=inner+"\n";
}
prompt(results,results);
