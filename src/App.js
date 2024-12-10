import './App.css';
import Profile from './component/Profile';
import'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const profiles = [
    {
      name:"Nawaf",
      img:"https://avatars.githubusercontent.com/u/182943003?v=4",
      disc:"I am learning MERN STACK",
      btn: "Open profile",
      btnbody :"https://github.com/Sknawaf05",
    },

    {
      name:"Prince",
      img:"https://avatars.githubusercontent.com/u/111479652?v=4",
      disc:"I am studying in BSCIT",
      btn: "Open profile",
      btnbody :"https://github.com/pri810",
    },

    {
      name:"Saad",
      img:"https://avatars.githubusercontent.com/u/182938196?v=4",
      disc:"I am studying in BCA...",
      btn: "Open profile",
      btnbody :"https://github.com/shk-sam",
    }
  ]

  return (
    <div className='container'>
      <h1>WELCOME</h1>
      <div class='row'>


        {
          profiles.map((profile)=>{
            return < Profile profile={profile}/>
          })
        }
    
         
      </div>
      {/* <Btn name="Sign Up" /> */}
    </div>
  );
}

export default App;


