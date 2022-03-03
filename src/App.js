import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const App = () => {
  const [limitPlayer, setLimitPlayer] = useState(false);
  const [listPlayers] = useState([]);
  const [activeForm, setActiveForm] = useState("");
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

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
      score:
        type === "plus"
          ? parseInt(data.score) + parseInt(score)
          : parseInt(data.score) - parseInt(score),
    };

    listPlayers[i] = newData;
    setActiveForm("");
    setScore("");
  };

  return (
    <main className="App">
      <h1 className="text-center my-2">~REMI~</h1>
      {!limitPlayer && (
        <section id="input-form">
          <Card body>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Input Your players"
                aria-label="Input Your players"
                aria-describedby="basic-addon2"
                onChange={(e) => onChangeform(e.target.value)}
                value={name}
              />
            </InputGroup>
            <Button
              variant="primary"
              size="md"
              className="w-100"
              onClick={() => onSubmitPlayers()}
            >
              CREATE
            </Button>
          </Card>
        </section>
      )}

      <section id="list-players">
        <h2 className="mt-4">LIST PLAYERS :</h2>
        <Row>
          {listPlayers.length === 0
            ? "Not Players"
            : listPlayers.map((data, i) => (
                <Col className="my-2" xs={6} lg={3} key={i}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <h3>{data.name}</h3>
                      </Card.Title>
                      <Card.Text className="text-center">
                        <h4>{data.score}</h4>
                      </Card.Text>
                      {activeForm === data.id ? (
                        <Row>
                          <Col xs={12}>
                            <InputGroup className="mb-3">
                              <FormControl
                                type="number"
                                aria-label="Input Your players"
                                aria-describedby="basic-addon2"
                                value={score}
                                onChange={(e) => onInputScore(e.target.value)}
                              />
                            </InputGroup>
                          </Col>
                          {score !== "" && (
                            <>
                              <Col xs={6}>
                                {" "}
                                <Button
                                  variant="success"
                                  size="md"
                                  className="w-100"
                                  onClick={() =>
                                    onChangeTarget(data, i, "plus")
                                  }
                                >
                                  +
                                </Button>
                              </Col>
                              <Col xs={6}>
                                {" "}
                                <Button
                                  variant="danger"
                                  size="md"
                                  className="w-100"
                                  onClick={() =>
                                    onChangeTarget(data, i, "minus")
                                  }
                                >
                                  -
                                </Button>
                              </Col>
                            </>
                          )}
                        </Row>
                      ) : (
                        <Button
                          variant="primary"
                          onClick={() => setActiveForm(data.id)}
                        >
                          {" "}
                          Input Score
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
        </Row>
      </section>
    </main>
  );
};

export default App;
