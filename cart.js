let items=JSON.parse(localStorage.getItem('cart'))
let tbd=document.getElementById("tbd")
tbd.innerHTML = ""
for(let item of  items){
    tbd.innerHTML += `<tr>
    <td > ${item[0]}</td><td>Yes</td><td class="red">${item[1]}</td></tr>`;
}

