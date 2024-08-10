import IntroBlock from "@/components/main-blocks/intro-block/IntroBlock";
import FeaturesBlock from "@/components/main-blocks/features-block/FeaturesBlock";
import ProductsBlock from "@/components/main-blocks/products-block/ProductsBlock";
import RoomsBlock from "@/components/main-blocks/rooms-block/RoomsBlock";
import TipsBlock from "@/components/main-blocks/tips-block/TipsBlock";
import ShareBlock from "@/components/main-blocks/share-block/ShareBlock";

export default function Home() {
  return (
    <main >
      <IntroBlock/>
      <FeaturesBlock/>
      <ProductsBlock/>
      <RoomsBlock/>
      <TipsBlock/>
      <ShareBlock/>
    </main>
  );
}
