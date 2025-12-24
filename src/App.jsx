import "./App.css";
import Header from "./Header";
import Post from "./post";
import SideMENU from "./sideMenu";

function App() {
  const tasks = [
    { id: 1, postName: "doing my homeworks", postBody: "It is nessasary" },
    { id: 2, postName: "reading a book", postBody: "It is nessasry" },
    { id: 3, postName: "studying", postBody: "It is not nessasry" },
    { id: 4, postName: "cleaning my room", postBody: "It is not nessasry" },
  ];
  const mytaskList = tasks.map((task) => {
    return (
      <Post key={task.id} postName={task.postName} postBody={task.postBody} />
    );
  });

  return (
    <>
      <div className="App">
        <Header />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* post &side menu */}
          <div style={{ display: "flex" }}>
            {/* post container */}
            <div style={{ width: "70%" }}>{mytaskList}</div>
            {/* ==post container ==*/}
            {/* side menu container */}
            <div style={{ width: "30%" }}>
              <SideMENU></SideMENU>
            </div>
            {/* ==side menu container== */}
          </div>
          {/* ==post &side container ==*/}
        </div>
      </div>
    </>
  );
}

export default App;
