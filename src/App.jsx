import ListGroup from "./components/ListGroup";
import MyClassComponent from "./components/class";



function App() {

  let list = ["Kolathur", "Adyar", "Maduravoyal", "Velachery"];

  const handleSelectItem = (item) => {
    console.log(item);
  }



  return (
    <div>
      <ListGroup items={list} heading='Areas' onSelectItem={handleSelectItem} /><br/>
      <MyClassComponent />
    </div>
  );
};

export default App;