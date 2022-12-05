import Link from "next/link";

const CategoryItem = ({ category }) => {
    const { strCategory, strCategoryDescription, strCategoryThumb } = category;
    return (
        <div className="card glass">
            <figure><img className="cursor-pointer" src={strCategoryThumb} alt="Category Thumbnail" /></figure>
            <div className="card-body bg-base-200 px-3">
                <Link href={`/category/${strCategory}`} className="cursor-pointer"><h2 className="card-title">{strCategory}</h2></Link>
                <p>{strCategoryDescription.slice(0, 100)}</p>
            </div>
        </div>
    );
}

export default CategoryItem;
