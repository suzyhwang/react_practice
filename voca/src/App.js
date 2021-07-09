import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <DayList />
      <Day />
    </div>
  );
}

export default App;

//불린 타입이나 객체는 표현하지 못합니다.
