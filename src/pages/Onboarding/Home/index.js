import React from "react";

//Component
import Bemvindo from "../../../components/BoxBalloon";
import Background from "../../../components/Background";

import * as S from "./styles";

const Home = (props) => {
  return (
    <S.Container>
      <Bemvindo history={props.history} />
      <Background />
    </S.Container>
  );
};

export default Home;
