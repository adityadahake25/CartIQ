import { Link } from "react-router-dom";

function RightCategory() {
  const categories = [
    {
      name: "Home & Kitchen",
      img: "/CategoryImages/home_and_kitchen_ctg.png",
      tagline: "Smart Living – Made Simple at Home.",
    },
    {
      name: "Beauty & Personal Care",
      img: "/CategoryImages/beauty_and_personalCare_ctg.png",
      tagline: "Glow Everyday – Your Self-Care Starts Here!",
    },
    {
      name: "Books & Media",
      img: "/CategoryImages/books_and_media_ctg.png",
      tagline: "Make Every Corner Smarter & Cozier.",
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
              <h2>{category.name}</h2>
              <i>"{category.tagline}"</i>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default RightCategory;
