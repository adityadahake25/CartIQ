function RightCategory() {
  return (
    <>
      <div className="ctgItem">
        <a href="#" className="ctgImg">
          <img
            src="/CategoryImages/home_and_kitchen_ctg.png"
            alt="home_and_kitchen"
          />
          <div className="img-card-overlay">
            <h2>Home & Kitchen</h2>
            <i>"Smart Living – Made Simple at Home."</i>
          </div>
        </a>
      </div>

      <div className="ctgItem">
        <a href="#" className="ctgImg">
          <img
            src="/CategoryImages/beauty_and_personalCare_ctg.png"
            alt="beauty"
          />
          <div className="img-card-overlay">
            <h2>Beauty & Personal Care</h2>
            <i>"Glow Everyday – Your Self-Care Starts Here!"</i>
          </div>
        </a>
      </div>

      <div className="ctgItem">
        <a href="#" className="ctgImg">
          <img
            src="/CategoryImages/books_and_media_ctg.png"
            alt="books_and_media"
          />
          <div className="img-card-overlay">
            <h2>Books & Media</h2>
            <i>"Make Every Corner Smarter & Cozier."</i>
          </div>
        </a>
      </div>
    </>
  );
}

export default RightCategory;
