import React from "react";

interface Card {
  id: number;
  name: string;
  description: string;
  flavor: string;
}
const cards = [
  {
    id: 1,
    name: "Aurum",
    description: `
      O dragão dourado Aurum é uma criatura majestosa e imponente. Sua pele brilha com um tom dourado intenso e sua envergadura é impressionante, com asas que parecem feitas de puro ouro. Suas garras afiadas e dentes pontiagudos são temidos por todos que se aproximam dele.
      Quando Aurum cospe fogo, sua chama é tão intensa que pode iluminar até mesmo a noite mais escura. Seu fogo é capaz de derreter qualquer material, incluindo aço e pedra. Poucos ousam enfrentar o poder de Aurum, pois sabem que sua força é avassaladora.
      Apesar de ser uma criatura temida e respeitada, Aurum é também conhecido por sua sabedoria. Muitos procuram seus conselhos, pois sabem que ele tem uma visão clara e perspicaz do mundo ao seu redor.
    `,
    flavor: `"Eu sou o fogo que ilumina as trevas e reduz a cinzas tudo o que se opõe a mim. Temam meu poder, mortais, pois eu sou o dragão dourado, o senhor da destruição!"`
  }
]

export default function HomeScreen() {
  return (
    <div>
      <h1>CardIA Wars</h1>

      <ul>
        {cards.map((card: Card) => (
          <li key={card.id}>
            <h2>{card.name}</h2>
            <img width="200" src={`/cards/${card.id}.png`} />
            <p>História: {card.description}</p>
            <p>Flavor da Carta: {card.flavor}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}