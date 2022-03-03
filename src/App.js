import React, { useState } from "react";

const App = () => {
  const [limitPlayer, setLimitPlayer] = useState(false);
  const [listPlayers] = useState([]);
  const [name, setName] = useState("");

  const onChangeform = (data) => {
    setName(data);
  };

  const onSubmitPlayers = () => {
    if (listPlayers.length < 4) {
      const dataNewPlayer = {
        name: name,
        score: 0,
      };

      listPlayers.push(dataNewPlayer);
      setName("");
    } else {
      alert("DEK MAEN REMI ATAU ARISAN OI !!!!!!");
      setLimitPlayer(true);
    }
  };

  console.log("list", name);

  return (
    <main className="App">
      {!limitPlayer && (
        <section id="input-form">
          <input
            placeholder="Input Your players"
            onChange={(e) => onChangeform(e.target.value)}
            value={name}
          ></input>
          <button onClick={() => onSubmitPlayers()}>submit</button>
        </section>
      )}
      <section id="list-players">
        <h1>list players</h1>
        <div className="box-list-players">
          {listPlayers.length === 0
            ? "Not Players"
            : listPlayers.map((data, i) => (
                <div key={i}>
                  <p>{data.name}</p>
                  <p>{data.score}</p>
                </div>
              ))}
        </div>
      </section>
    </main>
  );
};

export default App;
