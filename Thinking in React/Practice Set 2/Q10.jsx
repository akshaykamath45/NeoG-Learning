const todoItems = [
    {
      id: 1,
      title: 'Complete practice set',
      description: 'Practice set 1 of React',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Attend revision session',
      description: 'Revision session of React',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Watch recording',
      description: 'Live session recording of React',
      isCompleted: true,
    },
    {
      id: 4,
      title: 'Attend DSH',
      description: 'Doubt Solving Hours of React',
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Complete practice set',
      description: 'Practice set 2 of React',
      isCompleted: false,
    },
  ]
  

function Todo(){
    return(
      <div>
      <ul>
        {
          todoItems.map(({id,title,description,isCompleted})=>
          <li key={id} style={{color:isCompleted ? "green" :"red"}}>
            <h1>{title}</h1>
            <p>{description}</p>
          </li>
          )
        } 
      </ul> 
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
        <Todo/>
      </div>
    );
  }
  