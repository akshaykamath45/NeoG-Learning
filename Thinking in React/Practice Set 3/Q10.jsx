const studentData = [
    {
      id: 1,
      name: 'Nitin',
      marks: 78,
    },
    {
      id: 2,
      name: 'Mehak',
      marks: 95,
    },
    {
      id: 3,
      name: 'Mehul',
      marks: 65,
    },
    {
      id: 4,
      name: 'Nina',
      marks: 56,
    },
  ]
  
  function CertificateApprovalCard({data}){
    return(
      <div>
        {
            data.reduce((acc,{marks})=>acc+marks,0)/data.length>80? <h2>Certification Approved</h2>:<h2>Certification Not Aproved</h2>
        }
      </div>
    )
  }
  
  export default function App() {
    return (
      <div className="App">
        <CertificateApprovalCard data={studentData}/>
      </div>
    );
  }
  