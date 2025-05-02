import { Image, Text, TouchableOpacity, View } from "react-native";

interface IProps {
    lado: number;
    tabuleiro: string[][];
    setTabuleiro: (tabuleiro: string[][]) => void;
    linha: number;
    coluna: number;
    vez: string;
    setVez: (vez: string) => void;
}

export default function Casa(props: IProps): JSX.Element {
    const { lado, tabuleiro, setTabuleiro, linha, coluna, vez, setVez } = props;
    
    return (
      <TouchableOpacity 
        onPress={() => {
            if (tabuleiro[linha][coluna] == "") {
                let novoTabuleiro = [...tabuleiro];
                novoTabuleiro[linha][coluna] = vez;
                setTabuleiro(novoTabuleiro);
                setVez(vez == "x" ? "o" : "x");
            }
        }}
      >
        <View style={{ width: lado, height: lado, borderWidth: 1, borderColor: "black" }}>
          {
            tabuleiro[linha][coluna] == "x" ?
                <Image 
                    source={require("../assets/images/xis.jpg")}
                    style={{ width: '100%', height: '100%' }}
                /> : tabuleiro[linha][coluna] == "o" ?
                <Image 
                    source={require("../assets/images/circulo.jpg")}
                    style={{ width: '100%', height: '100%' }}
                /> :
                null
        }
        </View>
      </TouchableOpacity>
    );
  }