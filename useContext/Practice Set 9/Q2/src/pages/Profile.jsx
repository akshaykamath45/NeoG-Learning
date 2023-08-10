import "./Profile.css";
export const Profile = ({ user }) => {
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <img src={user.img} alt="user-img" className="user-image"></img>
      <p>
        <b>Name: {user.name}</b>
      </p>
      <p>
        <b>Bio: </b>
        {user.bio}
      </p>
    </div>
  );
};
