import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold font-redHat underline">
        Group Chat for Everyone
      </h1>
      <Button
        width={"193px"}
        text={"Download"}
        background={"bg-darkAqua"}
        hoverBgColor={"hover:bg-hoverAqua"}
        version={true}
        versionColor={"text-lightAqua"}
      ></Button>

      <Button
        width={"139px"}
        text={"What is it?"}
        background={"bg-darkPurple"}
        hoverBgColor={"hover:bg-hoverPurple"}
        version={false}
        versionColor={""}
      ></Button>
    </div>
  );
}

export default App;
