import React from "react";

//Component
import Bemvindo from "../../../components/BoxBalloon";
import Background from "../../../components/Background";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <Bemvindo />
      <Background />
    </S.Container>
  );
}

export default Home;
