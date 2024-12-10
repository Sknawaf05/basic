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
      name:"Saad",
      img:"https://avatars.githubusercontent.com/u/182938196?v=4",
      disc:"I am learning MERN STACK",
      btn: "Open profile",
      btnbody :"https://github.com/shk-sam",
    },

    {
      name:"Prince",
      img:"https://avatars.githubusercontent.com/u/111479652?v=4",
      disc:"I am pariiii",
      btn: "Open profile",
      btnbody :"https://github.com/pri810",
    },

    {
      name:"Mohammad",
      img:"https://avatars.githubusercontent.com/u/185525438?v=4",
      disc:"I am vocab student",
      btn: "Open profile",
      btnbody :"https://github.com/gaghamohammad",
    },
    {
      name:"Basheer",
      img:"https://avatars.githubusercontent.com/u/182937907?v=4",
      disc:"I am vocab student",
      btn: "Open profile",
      btnbody :"https://github.com/Basheer107",
    },
    {
      name:"Tehseen",
      img:"https://avatars.githubusercontent.com/u/182941013?v=4",
      disc:"I am vocab student",
      btn: "Open profile",
      btnbody :"https://github.com/jiyashah26",
    },
    {
      name:"Rumana",
      img:"https://avatars.githubusercontent.com/u/185526264?v=4",
      disc:"I am vocab student",
      btn: "Open profile",
      btnbody :"https://github.com/rumanamotiwala",
    },
    {
      name:"Moin",
      img:"https://avatars.githubusercontent.com/u/186063909?v=4",
      disc:"I am vocab student",
      btn: "Open profile",
      btnbody :"https://github.com/moinuddin-4678",
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


