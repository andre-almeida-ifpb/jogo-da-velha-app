import { Peca } from "@/jogo/Peca";
import { Image, TouchableOpacity, View } from "react-native";

interface IProps {
    lado: number;
    tabuleiro: (Peca | undefined)[][];
    jogadaHumano: (linha: number, coluna: number) => void;
    linha: number;
    coluna: number;   
    vezJogador1: boolean; 
}

export default function Casa(props: IProps): JSX.Element {
    const { lado, tabuleiro, jogadaHumano, linha, coluna, vezJogador1 } = props;
    
    return (
      <TouchableOpacity 
        onPress={() => {
            if (vezJogador1 && tabuleiro[linha][coluna] == undefined) {
                            
              jogadaHumano(linha, coluna);
            } 
        }}
      >
        <View style={{ width: lado, height: lado, borderWidth: 1, borderColor: "black" }}>
          {
            tabuleiro[linha][coluna] == Peca.Xis ?
                <Image 
                    source={require("../assets/images/xis.jpg")}
                    style={{ width: '100%', height: '100%' }}
                /> : tabuleiro[linha][coluna] == Peca.Circulo ?
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