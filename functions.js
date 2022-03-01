
window.onload = async () =>
{
    var b1 = document.getElementById('b1')
    b1.addEventListener('click',pintarNodo,true)
    
    function pintarNodo()
    {
    canvas.addEventListener('click', (e) => {
    let x = e.clientX - canvas.offsetLeft;
    let y = e.clientY - canvas.offsetTop;
    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    }
    );
    }
}