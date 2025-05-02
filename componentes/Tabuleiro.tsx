import { View } from "react-native";
import Casa from "./Casa";

interface IProps {
  lado: number;
  tabuleiro: string[][];
  setTabuleiro: (tabuleiro: string[][]) => void;
  vez: string;
  setVez: (vez: string) => void;
}

export default function Tabuleiro(props: IProps): JSX.Element {
  const { lado, tabuleiro, setTabuleiro, vez, setVez } = props;

  return (
    <View style={{ width: lado*3, height: lado*3, backgroundColor: "lightgreen" }}>
      { tabuleiro.map((linha, idxLinha) => (
        <View key={idxLinha} style={{ flexDirection: "row" }}>
          { linha.map((coluna, idxColuna) => (
            <Casa key={idxLinha + "," + idxColuna} lado={lado} tabuleiro={tabuleiro} setTabuleiro={setTabuleiro} linha={idxLinha} coluna={idxColuna} vez={vez} setVez={setVez}/>    
          ))}
        </View>
      ))}
    </View>
    
  );
}