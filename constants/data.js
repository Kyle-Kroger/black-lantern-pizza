import images from "./images";

const pizzas = [
  {
    title: "Cheese",
    price: "$16.50",
    tags: "Our Signature Five Cheese Pizza",
  },
  {
    title: "The Lantern Special",
    price: "$24.50",
    tags: "Sausage, Pepperoni, green peppers, and onion",
  },
  {
    title: "Hawaiian",
    price: "$20.00",
    tags: "Pineapple and Canadian Bacon",
  },
  {
    title: "Vegetarian",
    price: "$24.00",
    tags: "Mushrooms, onions, tomatoes, green peppers and black olives",
  },
  {
    title: "BBQ Chicken",
    price: "$21.50",
    tags: "Chicken and cheese with BBQ sauce",
  },
];

const specials = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { pizzas, specials, awards };
