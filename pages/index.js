import CategoryItem from "../components/CategoryItem/CategoryItem";

export default function Home({ data }) {
  const { categories } = data;
  return (
    <div>
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-3 gap-6">
          {
            categories.map((category, index) => <CategoryItem key={index} category={category} />)
          }
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await res.json();
  return {
    props: { data }
  }
}
