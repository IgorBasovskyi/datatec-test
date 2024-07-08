import Options from "./components/Options";
import Discount from "./components/Discount";
import DiscountGenerator from "./components/DiscountGenerator";
import NoteBook from "./components/Notebook";

const App = () => {
  return (
    <main className="grid grid-cols-1 divide-y m-5">
      <section className="section-padding">
        <Options />
      </section>
      <section className="section-padding">
        <Discount />
      </section>
      <section className="section-padding">
        <DiscountGenerator />
      </section>
      <section className="section-padding">
        <NoteBook />
      </section>
    </main>
  );
};

export default App;
