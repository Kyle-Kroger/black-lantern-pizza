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
    title: "Lasagna Bolognese with Garlic Bread",
    price: "$20",
    tags: "Layers of pasta, ground beef, and béchamel sauce, baked to perfection and served with a side of crispy garlic bread",
  },
  {
    title: "Fettuccine Alfredo with Grilled Chicken and Broccoli",
    price: "$16",
    tags: "Creamy fettuccine pasta with grilled chicken and broccoli, topped with Parmesan cheese.",
  },
  {
    title: "Spaghetti Carbonara with Grilled Asparagus",
    price: "$18",
    tags: "Classic spaghetti dish with a creamy egg and pancetta sauce, served with grilled asparagus on the side",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Best Pizza Crust",
    subtitle: "From the Pizza Pros",
  },
  {
    imgUrl: images.award01,
    title: "Family-friendly atmosphere",
    subtitle: "From the Association of Pizza Moms",
  },
  {
    imgUrl: images.award05,
    title: "Local Favorite",
    subtitle: "From Arcadia Valley Style",
  },
  {
    imgUrl: images.award01,
    title: "Best Pizza to Cure a Curse",
    subtitle: "from the Society of Spellcasters and Healers",
  },
];

export default { pizzas, specials, awards };
