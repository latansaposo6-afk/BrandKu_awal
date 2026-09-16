import Hero from "../component/Hero.jsx";
import CardGrid from "../component/CardGrid.tsx";
import { featureData } from "../data/features.js";

function Home() {
  return (
    <div>
      <div>Home</div>

      <section>
        <Hero />
      </section>

      <section>
        <CardGrid features={featureData} />
      </section>
    </div>
  );
}

export default Home;