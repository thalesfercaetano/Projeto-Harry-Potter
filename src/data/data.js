import bellatrix from '../assets/personagens/bellatrix.jpg'
import harry from '../assets/personagens/harry.jpg'
import hermione from '../assets/personagens/hermione.jpg'
import draco from '../assets/personagens/draco.jpg'
import luna from '../assets/personagens/luna.jpg'
import cedrico from '../assets/personagens/cedrico.jpg'
import snape from '../assets/personagens/snape.webp'
import cho from '../assets/personagens/cho.jpg'
import rony from '../assets/personagens/rony.jpg'
import newt from '../assets/personagens/newt.jpg'
import dumbledore from '../assets/personagens/dumbledore.jpg'
import minerva from '../assets/personagens/minerva.avif'
import voldemort from '../assets/personagens/voldemort.webp'
import gilderoy from '../assets/personagens/gilderoy.jpg'
import ninfadora from '../assets/personagens/ninfadora.jpg'
import sirius from '../assets/personagens/sirius.jpg'
import lucius from '../assets/personagens/lucius.jpg'
import filius from '../assets/personagens/filius.webp'
import pomona from '../assets/personagens/pomona.webp'
import neville from '../assets/personagens/neville.jpg'

const personagens = [
  
  {
    id: 1,
    nome: "Harry Potter",
    casa: "Grifinória",
    afiliacao: "Armada de Dumbledore",
    imagem: harry,
    descricao: "O Menino que Sobreviveu, famoso por sua cicatriz de raio e coragem inabalável."
  },
  {
    id: 2,
    nome: "Hermione Granger",
    casa: "Grifinória",
    afiliacao: "Armada de Dumbledore",
    imagem: hermione,
    descricao: "A bruxa mais brilhante de sua era, mestre em feitiços e lógica."
  },
  {
    id: 3,
    nome: "Draco Malfoy",
    casa: "Sonserina",
    afiliacao: "Comensais da Morte",
    imagem: draco,
    descricao: "Membro de uma linhagem puro-sangue, rival de Harry e talentoso em Poções."
  },
  {
    id: 4,
    nome: "Luna Lovegood",
    casa: "Corvinal",
    afiliacao: "Armada de Dumbledore",
    imagem: luna,
    descricao: "Conhecida por sua excentricidade e por ver o mundo de uma forma única."
  },
  {
    id: 5,
    nome: "Cedrico Diggory",
    casa: "Lufa-Lufa",
    afiliacao: "Neutro",
    imagem: cedrico,
    descricao: "Um exemplo de lealdade e justiça, foi um dos campeões do Torneio Tribruxo."
  },
  {
    id: 6,
    nome: "Severo Snape",
    casa: "Sonserina",
    afiliacao: "Ordem da Fênix",
    imagem: snape,
    descricao: "O enigmático Mestre das Poções e ex-diretor da Sonserina."
  },
  {
    id: 7,
    nome: "Cho Chang",
    casa: "Corvinal",
    afiliacao: "Armada de Dumbledore",
    imagem: cho,
    descricao: "Apanhadora do time de Quadribol da Corvinal e membro da Armada de Dumbledore."
  },
  {
    id: 8,
    nome: "Rony Weasley",
    casa: "Grifinória",
    afiliacao: "Armada de Dumbledore",
    imagem: rony,
    descricao: "O melhor amigo de Harry, estrategista de xadrez bruxo e dono de um grande coração."
  },
  {
    id: 9,
    nome: "Bellatrix Lestrange",
    casa: "Sonserina",
    afiliacao: "Comensais da Morte",
    imagem: bellatrix,
    descricao: "Uma Comensal da Morte fiel e extremamente perigosa em duelos."
  },
  {
    id: 10,
    nome: "Newt Scamander",
    casa: "Lufa-Lufa",
    afiliacao: "Neutro",
    imagem: newt,
    descricao: "Magizoologista famoso por escrever 'Animais Fantásticos e Onde Habitam'."
  },
  {
    id: 11,
    nome: "Alvo Dumbledore",
    casa: "Grifinória",
    afiliacao: "Ordem da Fênix",
    imagem: dumbledore,
    descricao: "Considerado por muitos o maior bruxo de todos os tempos e diretor de Hogwarts."
  },
  {
    id: 12,
    nome: "Minerva McGonagall",
    casa: "Grifinória",
    afiliacao: "Ordem da Fênix",
    imagem: minerva,
    descricao: "Mestra em Transfiguração, rigorosa mas extremamente justa."
  },
  {
    id: 13,
    nome: "Tom Riddle (Voldemort)",
    casa: "Sonserina",
    afiliacao: "Comensais da Morte",
    imagem: voldemort,
    descricao: "O Lorde das Trevas que buscou a imortalidade e o controle do mundo bruxo."
  },
  {
    id: 14,
    nome: "Gilderoy Lockhart",
    casa: "Corvinal",
    afiliacao: "Neutro",
    imagem: gilderoy,
    descricao: "Um autor famoso especializado em feitiços de memória e... marketing pessoal."
  },
  {
    id: 15,
    nome: "Ninfadora Tonks",
    casa: "Lufa-Lufa",
    afiliacao: "Ordem da Fênix",
    imagem: ninfadora,
    descricao: "Uma Aurora metamorfomaga capaz de mudar sua aparência à vontade."
  },
  {
    id: 16,
    nome: "Sirius Black",
    casa: "Grifinória",
    afiliacao: "Ordem da Fênix",
    imagem: sirius,
    descricao: "O padrinho de Harry e o único a escapar de Azkaban por conta própria."
  },
  {
    id: 17,
    nome: "Lúcio Malfoy",
    casa: "Sonserina",
    afiliacao: "Comensais da Morte",
    imagem: lucius,
    descricao: "Um influente aristocrata bruxo e fervoroso seguidor das artes das trevas."
  },
  {
    id: 18,
    nome: "Filius Flitwick",
    casa: "Corvinal",
    afiliacao: "Ordem da Fênix",
    imagem: filius,
    descricao: "Mestre de Feitiços e antigo campeão de duelos bruxos."
  },
  {
    id: 19,
    nome: "Pomona Sprout",
    casa: "Lufa-Lufa",
    afiliacao: "Ordem da Fênix",
    imagem: pomona,
    descricao: "Chefe do departamento de Herbologia e especialista em plantas mágicas."
  },
  {
    id: 20,
    nome: "Neville Longbottom",
    casa: "Grifinória",
    afiliacao: "Armada de Dumbledore",
    imagem: neville,
    descricao: "De um estudante tímido a um herói corajoso que liderou a Armada de Dumbledore."
  }
];

export default personagens