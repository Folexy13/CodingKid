import React from "react";
import { Spinner, Main, Content } from "./Styles";
export const Loader: React.FC = () => {
  return (
    <Spinner>
      <Main>
        <Content style={{ "--i": 1 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 2 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 3 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 4 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 5 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 6 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 7 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 8 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 9 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 10 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 11 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 12 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 13 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 14 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 15 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 16 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 17 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 18 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 19 } as React.CSSProperties}></Content>
        <Content style={{ "--i": 20 } as React.CSSProperties}></Content>
        <Content className="text">C.K.A</Content>
      </Main>
    </Spinner>
  );
};
