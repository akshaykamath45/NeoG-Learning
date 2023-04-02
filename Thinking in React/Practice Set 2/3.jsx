const userData = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
  }
  
function UserProfile({userInfo}){
    const {name,age,email}=userInfo;
    return(
      <div>
        Name : {name} <br/>
        Age : {age} <br/>
        E-Mail : {email} <br/>
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
        <UserProfile userInfo={userData}/>
      </div>
    );
  }
  