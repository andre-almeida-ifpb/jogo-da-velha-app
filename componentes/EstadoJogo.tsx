import { Text, View } from "react-native";
import style from "@/style";

interface IProps {
    jogador1: string;
    vitoriasJogador1: number;
    jogador2: string;
    vitoriasJogador2: number;
    partidas: number;
    vezJogador1: boolean;
}

export default (props: IProps) => {
    const { jogador1, vitoriasJogador1, jogador2, vitoriasJogador2, partidas, vezJogador1 } = props;

    return (
        <>
            <View style={style.estado}>
                <Text style={[style.textoEstado, {flex: 1}]}>{jogador1}</Text>
                <Text style={[style.textoEstado, {flex: 1}]}>{vitoriasJogador1}</Text>
                <Text style={[style.textoEstado, {flex: 1}]}>x</Text>
                <Text style={[style.textoEstado, {flex: 1}]}>{vitoriasJogador2}</Text>
                <Text style={[style.textoEstado, {flex: 1}]}>{jogador2}</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "flex-end" }}>
                <Text style={[style.textoEstado, {marginRight: 10}]}>Partidas:</Text>
                <Text style={style.textoEstado}>{partidas}</Text>
            </View>
        </>
    );
}