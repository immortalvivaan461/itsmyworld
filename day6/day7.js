async function fetchdata(){
    console.log("async function executed")
    const data = await fetch('https://jsonplaceholderd.typicode.com/users');
    console.log("async functon completed",data)

}