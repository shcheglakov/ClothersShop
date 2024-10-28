import BrandsBlock from "../../components/brands_block/BrandsBlock";
import ClothingList from "../../components/clothing_list/ClothingList";
import InfoBlock from "../../components/info_block/InfoBlock";
import ReviewsList from "../../components/reviews_list/ReviewsList";

export default function Home() {
  return (
    <div>
        <InfoBlock />
        <BrandsBlock />
        <ClothingList title="NEW ARRIVALS"/>
        <ClothingList title="TOP SELLING"/>
        <ReviewsList />
    </div>
  )
}
