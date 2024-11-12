import './App.css';

function App() {

  const promise1=Promise.resolve("Amreen");
  const promise2=42;
  const promise3=new Promise((resolve,reject)=>{resolve("Promise has resolved.")});
 

  const promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let error=false;
      if(!error){
        resolve({userName:"Amreen",passWord:"1234"})
      }
      else{
        reject("ERROR : Something went wrong")
      }
    },1000)
  })
  promise4.then((res)=>{
    console.log(res)
  })
  promise4.catch((err)=>{
    console.log(err)
  })


Promise.all([promise1,promise2,promise3]).then((res)=>{
  console.log(res)
})
.catch((err)=>{ console.log("ERROR : ",err)})

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
