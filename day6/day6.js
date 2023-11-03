function fetchdata(){
    console.log("fetch data called")

    let d = null;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data){
        console.log("promise success",data);
        return data.json()
})
.then(function(data){
    console.log("final data[0].username",data[0].username);
   let para=document.getElementById('username') 
   for(let i = 0; i < data.length; i++){
    let eachuser = document.createElement('h6');
    eachuser.innerHTML  = " welcome " + data[i].username

    para.appendChild(eachuser)
   }
   //para.innerHTML = "Welcome" + data[0].username
   para.style.color="blue"
   para.style.backgroundColor="yellow"
   para.style.margin="20px"
   para.style.border="10px solid black"
   para.style.borderRadius="5px"
   para.style.fontSize="25px"
   para.style.scrollPadding="10px"
   para.style.height="auto"
    d = data;
})
.catch(function(err){
    console.log("promise failed")
});
console.log(d)
}

//time bomb
 let timerInSeconds=20;   //seconds
 let interval;

 function updateTimer(){
    if(timerInSeconds<=0){
        clearInterval(interval); //stop the timer
         alert('bom!!!')
     }
     else{
    const minutes = Math.floor(timerInSeconds/60);
    const seconds = timerInSeconds % 60;
    const formattedTime = (minutes + ":" + seconds);
    document.getElementById('timebomb').innerHTML = formattedTime;
    timerInSeconds=timerInSeconds-1;
     }
     
    
 }
interval 
 setInterval(updateTimer,1000);