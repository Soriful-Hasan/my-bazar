import Header from "./components/Header/Header";
import AllProducts from "./hotProducts/HotProducts";
import GadgetCategorySection from "./components/Categoryes/GadgetCategorySection";
export default function Home() {
  return (
    <>
      <Header />
      <GadgetCategorySection />
      <AllProducts />
    </>
  );
}
