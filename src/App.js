import React from "react";
import Bemvindo from "./components/BoxBalloon";
import Background from "./components/Background";
import * as S from "./Global";

function App() {
  return (
    <S.ContainerWrapper>
      <Bemvindo />
      <Background />
    </S.ContainerWrapper>
  );
}

export default App;
