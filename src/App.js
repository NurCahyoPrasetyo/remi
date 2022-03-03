import React, { useState } from "react";

const App = () => {
  const [limitPlayer, setLimitPlayer] = useState(false);
  const [listPlayers] = useState([]);
  const [activeForm, setActiveForm] = useState("");
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  console.log("list", listPlayers);

  const onChangeform = (data) => {
    setName(data);
  };

  const onSubmitPlayers = () => {
    if (listPlayers.length < 4) {
      const dataNewPlayer = {
        id: listPlayers.length,
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

  const onInputScore = (data) => {
    setScore(data);
  };

  const onChangeTarget = (data, i, type) => {
    const newData = {
      id: data.id,
      name: data.name,
      score: type === 'plus' ? parseInt(data.score) + parseInt(score) : parseInt(data.score) - parseInt(score),
    };

    listPlayers[i] = newData
    setActiveForm("")
    setScore("")
  };


  return (
    <main className="App">
      {!limitPlayer && (
        <section id="input-form">
          <input
            type="text"
            placeholder="Input Your players"
            onChange={(e) => onChangeform(e.target.value)}
            value={name}
          />
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
                  {activeForm === data.id ? (
                    <div>
                      <input
                        type="number"
                        value={score}
                        onChange={(e) => onInputScore(e.target.value)}
                      />
                      <div>
                        <button onClick={() => onChangeTarget(data, i, 'plus')}>+</button>
                        <button onClick={() => onChangeTarget(data, i, 'minus')}>-</button>
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => setActiveForm(data.id)}>
                      Input Score
                    </button>
                  )}
                </div>
              ))}
        </div>
      </section>
    </main>
  );
};

export default App;
