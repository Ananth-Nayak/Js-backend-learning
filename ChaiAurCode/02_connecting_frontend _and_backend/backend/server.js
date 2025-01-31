import express from 'express'

const app = express();

// app.get('/', (req,res) =>{
//   res.send("<h1>Welcome back</h1>")
// });

app.get('/api/jokes',(req,res) => {
  const jokes = [
    {
      id:1,
      title:'A joke',
      content:'this is a first joke',
    },
    {
      id:2,
      title:'second joke',
      content:'this is a second joke',        
    },
    {
      id:3,
      title:'third joke',
      content:'this is a third joke',
    },
    {
      id:4,
      title:'fourth joke',
      content:'this is a fourth joke',
    },
    {
      id:5,
      title:'fifth joke',
      content:'this is a fifth joke',      
    }];
  
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`server is listening on ${port} succesfuly`);
});