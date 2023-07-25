import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: " Crispy chicken Burger",
    description: "Finest chicken and veggies",
    price: 350,
  },
  {
    id: "m2",
    name: "Paneer Burger",
    description: "A specialty!",
    price: 300,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 400,
  },
  {
    id: "m4",
    name: "Aloo tikki Burger",
    description: "Crispy and delicious",
    price: 250,
  },
];

function AvailableMeals() {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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
