
function Oblicz()
{
    let E = document.getElementById("E").value;
    let p = document.getElementById("p").value;
    let c = document.getElementById("c").value;
let a = document.getElementById("t");
a.innerHTML = (Math.pow(E,2)-(Math.pow(p,2)*Math.pow(c,2)));
}
