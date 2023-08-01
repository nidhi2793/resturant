import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m2",
    name: "Veggie Burger",
    description: "veg patty, fresh lettuce,tomato ",
    price: 150,
    type: "veg",
  },
  {
    id: "m2",
    name: "Paneer Peppy Burger",
    description: "Thick Paneer Patty,veggies, sauces ",
    price: 290,
    type: "veg",
  },
  {
    id: "m2",
    name: "Corn & Cheese Burger",
    description: "Tempting cheese with fresh corn ",
    price: 230,
    type: "veg",
  },

  {
    id: "m4",
    name: "Aloo tikki Burger",
    description: "Crispy and delicious",
    price: 200,
    type: "veg",
  },
  {
    id: "m1",
    name: " Crispy chicken Burger",
    description: "Finest chicken and veggies",
    price: 350,
    type: "non-veg",
  },
  {
    id: "m1",
    name: " Crispy chicken Cheesy Burger",
    description: "Lots of cheese loaded &Finest chicken and veggies",
    price: 380,
    type: "non-veg",
  },
  {
    id: "m3",
    name: "Chicken Double Burger",
    description: "Double crispy chicken patty",
    price: 420,
    type: "non-veg",
  },
];

function AvailableMeals() {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      type={meal.type}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
