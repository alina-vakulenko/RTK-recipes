import "../styles/App.css";
import { AllRecipes } from "../features/allRecipes/AllRecipes";

function App(props) {
  return (
    <div className="App">
      <section>Search Bar</section>
      <section>Favorite Recipes</section>
      <section>
        <h2>All Recipes</h2>
        <AllRecipes allRecipes={props.allRecipes} />
      </section>
    </div>
  );
}

export default App;
