import { useState } from "react";
import { View } from "react-native";
import { useWindowDimensions } from "react-native";
import style from "@/style";
import EstadoJogo from "@/componentes/EstadoJogo";
import Tabuleiro from "@/componentes/Tabuleiro";

export default function Index(): JSX.Element {

  const { height, width } = useWindowDimensions();
  const lado: number = Math.floor((width - 20) / 3)

  const [tabuleiro, setTabuleiro] = useState<string[][]>([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [vez, setVez] = useState<string>("x");

  return (
    <View style={style.container}>
      
      <EstadoJogo/>

      <Tabuleiro 
        lado={lado} 
        tabuleiro={tabuleiro} 
        setTabuleiro={setTabuleiro} 
        vez={vez} 
        setVez={setVez}
      />
    </View>
  );
}

