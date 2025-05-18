import { View } from "react-native";
import Casa from "./Casa";
import { Peca } from "@/jogo/Peca";

interface IProps {
  lado: number;
  tabuleiro: (Peca | null)[][];
  jogadaHumano: (linha: number, coluna: number) => void;
  vezJogador1: boolean;
}

export default function Tabuleiro(props: IProps): JSX.Element {
  const { lado, tabuleiro, jogadaHumano, vezJogador1 } = props;

  return (
    <View style={{ width: lado*3, height: lado*3, backgroundColor: "lightgreen" }}>
      { tabuleiro.map((linha, idxLinha) => (
        <View key={idxLinha} style={{ flexDirection: "row" }}>
          { linha.map((coluna, idxColuna) => (
            <Casa key={idxLinha + "," + idxColuna} lado={lado} tabuleiro={tabuleiro} jogadaHumano={jogadaHumano} linha={idxLinha} coluna={idxColuna} vezJogador1={vezJogador1} />    
          ))}
        </View>
      ))}
    </View>
    
  );
}