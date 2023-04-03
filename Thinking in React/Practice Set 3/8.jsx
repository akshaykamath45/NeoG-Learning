const DonationData = [
  {
    id: 1,
    name: "Nitin",
    Donation: 7800,
  },
  {
    id: 2,
    name: "Mehak",
    Donation: 9500,
  },
  {
    id: 3,
    name: "Mehul",
    Donation: 65000,
  },
  {
    id: 4,
    name: "Nina",
    Donation: 560,
  },
];

function DonationCard({ data }) {
  let sum = 0;
  // data.map=(({})=>{

  // })
  const getTotalDonation = ({ Donation }, sum) => {
    return sum + Donation;
  };
  data.reduce(getTotalDonation, 0);
  return (
    <div>
      <ol>
        {data.map(({ Donation }) => (
          <li>Donation {Donation}</li>
        ))}
        Total Donation Collected : {sum}
      </ol>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DonationCard data={DonationData} />
    </div>
  );
}
