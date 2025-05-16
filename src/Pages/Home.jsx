
import Hero from "../components/Hero"
import Advantages from '../components/Advantages'
import ImportedCars from "../components/ImportedCars"
import ImportedReviews from "../components/ImportedReviews"
import ImportStats from '../components/ImportStats'
import ConsultationBlock from '../components/ConsultationBlock'


export default function Home() {
  return (
    <div>
     
      <Hero />
      <Advantages />
     <ImportedCars />
     <ImportedReviews />
     <ImportStats />
      <ConsultationBlock />
    </div>
  );
}
