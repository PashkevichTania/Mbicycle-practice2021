console.log('start')

setTimeout(()=>{
    console.log('timeout1 1000')
    setTimeout(()=>{
        console.log('timeout2 0')
    }, 0)
}, 1000)


let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('promise')
        let data = {
            data: 'some data'
        }
            resolve(data)
    }, 1000)
})

p.then((data)=>{
    console.log('promise resoled, data: ' + data.data)
})


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

async function fetchTODO(){
    await setTimeout(function (){
        console.log('timeout 2000')
    }, 2000)
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    const data = await res.json()
    console.log('data' + JSON.stringify(data))
}
fetchTODO().then(r => console.log('fetched'))

console.log('end')