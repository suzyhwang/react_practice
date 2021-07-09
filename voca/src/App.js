import "./App.css";

function App() {
  const name = "Pizzahand";
  const naver = {
    name: "naver",
    url: "https://naver.com",
  };
  return (
    <div className="App">
      <h1 style={{ color: "blue", backgroundColor: "beige" }}>
        Hi, {name}! <p>{2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;

//불린 타입이나 객체는 표현하지 못합니다.
