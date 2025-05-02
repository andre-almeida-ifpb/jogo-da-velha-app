import { Text, View } from "react-native";
import style from "@/style";

export default () => {
    return (
        <>
            <View style={style.estado}>
                <Text style={[style.textoEstado, {flex: 1}]}>Você</Text>
                <Text style={[style.textoEstado, {flex: 1}]}>0</Text>
                <Text style={[style.textoEstado, {flex: 1}]}>x</Text>
                <Text style={[style.textoEstado, {flex: 1}]}>0</Text>
                <Text style={[style.textoEstado, {flex: 1}]}>CPU</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "flex-end" }}>
                <Text style={[style.textoEstado, {marginRight: 10}]}>Partidas:</Text>
                <Text style={style.textoEstado}>0</Text>
            </View>
        </>
    );
}