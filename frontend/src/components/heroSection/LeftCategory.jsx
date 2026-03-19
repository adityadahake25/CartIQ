import { Link } from "react-router-dom";

function LeftCategory() {
  const categories = [
    {
      name: "Grocery",
      heading: "Groceries / Fresh Produce",
      img: "/CategoryImages/grocery_ctg.png",
      tagline: "From Farm to You",
    },
    {
      name: "Clothing & Apparel",
      heading: "Clothing / Fashion",
      img: "/CategoryImages/clothing_and_apparel_ctg.png",
      tagline: "Style That Speaks – Trendy Looks, Everyday Comfort.",
    },
    {
      name: "Electronics",
      heading: "Electronics / Appliances",
      img: "/CategoryImages/electronics_ctg.png",
      tagline: "Smart Choices for a Smarter Home.",
    },
  ];

  return (
    <>
      {categories.map((category, index) => (
        <div className="ctgItem" key={index}>
          <Link
            to={`/category/${encodeURIComponent(category.name.toLowerCase())}`}
            className="ctgImg"
          >
            <img src={category.img} alt={category.name} />
            <div className="img-card-overlay">
              <h2>{category.heading}</h2>
              <i>"{category.tagline}"</i>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default LeftCategory;
