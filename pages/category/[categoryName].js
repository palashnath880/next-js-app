import { useRouter } from "next/router";

const CategoryPosts = () => {
    const router = useRouter();
    return (
        <div>
            <h1 className="text-3xl"></h1>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { categoryName } = context.params;
    const res = await fetch('www.themealdb.com/api/json/v1/1/filter.php?c=' + categoryName);
    const data = await res.json();
    return {
        props: {}
    };
}

export default CategoryPosts;
