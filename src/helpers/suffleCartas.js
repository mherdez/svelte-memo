// const cartasIni = ['😴', '😬', '🫠', '😵', '🥴', '🤗']
const cartasIni = ['😉', '😬', '😍', '🙃', '😂', '🤗']

export const suffleCartas = () => [...cartasIni, ...cartasIni].sort(() => Math.random() - 0.5)
