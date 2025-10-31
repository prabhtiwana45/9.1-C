import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="content-card">
          <h1>DEV@Deakin</h1>
          <p>This is my Task 9.1C app.</p>
        </div>
      </main>

      <footer className="footer">
        Developed by <strong>Prabhnoor Singh</strong> | Roll No: <strong>2410994860</strong>
      </footer>
    </div>
  );
}

export default App;
