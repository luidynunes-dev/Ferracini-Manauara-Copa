export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  isNew?: boolean;
  description?: string;
}

export const categories = ["Todos", "Sapatênis", "Sneakers", "Mocassim"];

export const products: Product[] = [
  {
    id: "mocassim-malta",
    name: "Mocassim Malta",
    category: "Mocassim",
    price: 399.90,
    image: "https://i.postimg.cc/ZYQqPD9D/Mocassim-Malta-confeccionado-em-soldado-TR-proporciona-leveza-e-durabilidade-R-399-90.jpg",
    colors: ["#8B5A2B", "#111111"],
    isNew: true,
    description: "Mocassim Malta, confeccionado com solado TR que proporciona leveza, flexibilidade e alta durabilidade no uso diário."
  },
  {
    id: "sapatenis-milan",
    name: "Sapatênis Milan",
    category: "Sapatênis",
    price: 319.90,
    image: "https://i.postimg.cc/J7Fh3dDV/Sapateira-Milan-confeccionado-em-couro-legi-timo-com-textura-natura-R-319-90.jpg",
    colors: ["#5C4033", "#111111"],
    isNew: false,
    description: "Sapatênis Milan, confeccionado em couro legítimo com textura natural. Oferece visual elegante e grande durabilidade."
  },
  {
    id: "sapatenis-max",
    name: "Sapatênis Max",
    category: "Sapatênis",
    price: 449.90,
    image: "https://i.postimg.cc/VshN9Hrc/Sapatenis-Max-confeccionado-em-coito-legi-timo-traz-recortes-em-diferentes-texturas-R-449-90.jpg",
    colors: ["#111111", "#4A3B32"],
    isNew: true,
    description: "Sapatênis Max, confeccionado em couro legítimo premium. Traz recortes em diferentes texturas para um estilo moderno e arrojado."
  },
  {
    id: "sneaker-impulse",
    name: "Sneaker Impulse",
    category: "Sneakers",
    price: 509.90,
    image: "https://i.postimg.cc/h4YG83zK/Sneaker-Impulse-com-couro-legitimo-de-alta-qualidade-roporciona-durabilidade-resiste-ncia-e-confor.jpg",
    colors: ["#222222", "#8B5A2B"],
    isNew: false,
    description: "Sneaker Impulse feito com couro legítimo de altíssima qualidade. Proporciona durabilidade excepcional, alta resistência e conforto extremo."
  },
  {
    id: "sneaker-speed",
    name: "Sneaker Speed",
    category: "Sneakers",
    price: 459.90,
    image: "https://i.postimg.cc/c1zJ75gs/Sneaker-Speed-cabedal-em-couro-nobre-aliado-ao-soldado-EVA-com-tecnologia-vazada-proporciona-uma-exp.jpg",
    colors: ["#3D251E", "#111111"],
    isNew: true,
    description: "Sneaker Speed com cabedal em couro nobre premium aliado ao solado de EVA com tecnologia vazada, oferecendo uma experiência superior de conforto e desempenho."
  }
];
