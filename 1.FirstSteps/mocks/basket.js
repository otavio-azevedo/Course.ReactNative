import companyLogo from '../assets/company-logo.png';

import tomate from '../assets/itens/tomate.png';
import brocolis from '../assets/itens/brocolis.png';
import batata from '../assets/itens/batata.png';
import pepino from '../assets/itens/pepino.png';
import abobora from '../assets/itens/abobora.png';

const basket = {
  top: {
    title: "Details",
  },
  details: {
    name: "Surprise Basket",
    companyLogo: companyLogo,
    companyName: "Jenny Jack Farm",
    description: "A basket with carefully selected products from the farm straight to your kitchen.",
    price: "R$ 40,00",
    textButton: "Add to cart",
   },
  itens: {
    title: "Basket Itens",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      }
    ]
  }
}

export default basket;