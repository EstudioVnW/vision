import React from "react";

//Component
import Bemvindo from "../../../components/BoxBalloon";
import Background from "../../../components/Background";

import * as S from "./styles";

function Home() {
  return (
    <S.ContainerWrapper>
      <Bemvindo />
      <Background />
    </S.ContainerWrapper>
  );
}

export default Home;
