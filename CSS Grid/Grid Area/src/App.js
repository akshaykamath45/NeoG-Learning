import "./styles.css";

export default function App() {
  return (
    <div className="layout">
      <div className="navigation">home | about</div>
      <div className="main">
        <div className="card">Main Content</div>
        <div className="card">Main Content</div>
        <div className="card">Main Content</div>
      </div>
      <div className="side">
        <div className="card">Side Content</div>
        <div className="card">Side Content</div>
        <div className="card">Side Content</div>
      </div>
      <div className="footer">LinkedIn | Github | Twitter</div>
    </div>
  );
}
