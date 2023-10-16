function updateClock()
{
    const c1=document.getElementById("clock")
    const time=new Date().toLocaleTimeString()
    c1.textContent=time;
}
setInterval(updateClock,1000);