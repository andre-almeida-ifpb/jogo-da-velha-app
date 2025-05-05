import { useEffect, useRef, useState } from "react";
import { Alert, View, useWindowDimensions } from "react-native";
import style from "@/style";
import EstadoJogo from "@/componentes/EstadoJogo";
import Tabuleiro from "@/componentes/Tabuleiro";
import Jogo from "@/jogo/Jogo";
import Jogador from "@/jogo/Jogador";
import JogadorAutomatizado from "@/jogo/JogadorAutomatizado";
import { Peca } from "@/jogo/Peca";
import Partida from "@/jogo/Partida";
import { SituacaoPartida } from "@/jogo/SituacaoPartida";

export default function Index(): JSX.Element {

  const { height, width } = useWindowDimensions();
  const lado: number = Math.floor((width - 20) / 3)

  let jogoRef = useRef<Jogo>(new Jogo(new Jogador("Você"), new JogadorAutomatizado("CPU")));
  let partidaRef = useRef<Partida>(jogoRef.current.iniciaPartida());

  const [jogador1, setJogador1] = useState<string>(jogoRef.current.getJogador1().getNome());
  const [jogador2, setJogador2] = useState<string>(jogoRef.current.getJogador2().getNome());
  const [vitoriasJogador1, setVitoriasJogador1] = useState<number>(partidaRef.current.getJogador1().getVitorias());
  const [vitoriasJogador2, setVitoriasJogador2] = useState<number>(partidaRef.current.getJogador2().getVitorias());
  const [partidas, setPartidas] = useState<number>(jogoRef.current.getNumeroPartidas());
  const [tabuleiro, setTabuleiro] = useState<(Peca | undefined)[][]>(partidaRef.current.getTabuleiro());  
  const [vezJogador1, setVezJogador1] = useState<boolean>(partidaRef.current.getVezJogador1());  

  useEffect(() => {
    if (!vezJogador1) {

      // O turno mudou para a CPU
      let jogadaCpu: [number, number] | undefined = (jogoRef.current.getJogador2() as JogadorAutomatizado).realizaJogada(partidaRef.current.getTabuleiro());
      if (jogadaCpu != undefined) {
        if (!partidaRef.current.joga(jogadaCpu[0], jogadaCpu[1])) {
        
          Alert.alert("CPU realizou jogada inválida!");  
        } else {
          
          // Verifica se a partida terminou
          if (partidaRef.current.verificaFim() != SituacaoPartida.EmAndamento) {
          
            finalizaPartida();
          }  else {

            // Se a jogada foi válida, atualiza o tabuleiro
            setTabuleiro(partidaRef.current.getTabuleiro());
            setVezJogador1(!vezJogador1);                    
          }
        }
      } else {
      
        Alert.alert("CPU não realizou jogada!");
      }
    }
  }, [vezJogador1]);

  function finalizaPartida(){
    
    // Incrementa contadores e informa usuário do resultado da partida
    let situacao: SituacaoPartida = partidaRef.current.verificaFim();
    if (situacao == SituacaoPartida.VitoriaJogador1) {
        partidaRef.current.getJogador1().adicionaVitoria();
        Alert.alert(`${partidaRef.current.getJogador1().getNome()} venceu!`);
    } else if (situacao == SituacaoPartida.VitoriaJogador2) {
        partidaRef.current.getJogador2().adicionaVitoria();
        Alert.alert(`${partidaRef.current.getJogador2().getNome()} venceu!`);
    } else if (situacao == SituacaoPartida.Empate) {  
        Alert.alert("Empate!");
    }

    jogoRef.current.incrementaPartidas();
    
    // Inicia nova partida
    partidaRef.current = jogoRef.current.iniciaPartida();
     
    // Atualiza propriedades de estado
    setVitoriasJogador1(jogoRef.current.getJogador1().getVitorias());
    setVitoriasJogador2(jogoRef.current.getJogador2().getVitorias());
    setPartidas(jogoRef.current.getNumeroPartidas());
    setTabuleiro(partidaRef.current.getTabuleiro());
    setVezJogador1(partidaRef.current.getVezJogador1());    
  }

  function jogadaHumano(linha: number, coluna: number): void {
    if (!partidaRef.current.joga(linha, coluna)) {
      
      Alert.alert("Jogada inválida");
    } else {
      
      // Verifica se a partida terminou
      if (partidaRef.current.verificaFim() != SituacaoPartida.EmAndamento) {      
        
        finalizaPartida();
      } else {
      
        // Se a jogada foi válida, atualiza o tabuleiro
        setTabuleiro(partidaRef.current.getTabuleiro());
        setVezJogador1(!vezJogador1);    
      }                        
    }
  }

  return (
    <View style={style.container}>
      
      <EstadoJogo
        jogador1={jogador1} 
        vitoriasJogador1={vitoriasJogador1}
        jogador2={jogador2}
        vitoriasJogador2={vitoriasJogador2}
        partidas={partidas}
        vezJogador1={vezJogador1}
      />

      <Tabuleiro 
        lado={lado} 
        tabuleiro={tabuleiro} 
        jogadaHumano={jogadaHumano}
        vezJogador1={vezJogador1}
      />
    </View>
  );
}

