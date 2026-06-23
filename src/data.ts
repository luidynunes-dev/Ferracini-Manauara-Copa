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

export const categories = ["Todos", "Social", "Sapatênis", "Botas", "Mocassim", "Acessórios"];

export const products: Product[] = [
  {
    id: "produto-teste",
    name: "Produto Teste",
    category: "Social",
    price: 349.90,
    image: "/src/assets/images/ferracini_social_1782220255263.jpg",
    colors: ["#111111"],
    isNew: true,
    description: "Modelo para testes iniciais de layout e usabilidade do catálogo Ferracini Manauara."
  }
];
