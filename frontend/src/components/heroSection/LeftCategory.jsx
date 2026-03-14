function LeftCategory() {
  return (
    <>
      <div className="ctgItem">
        <a href="#" className="ctgImg">
          <img src="/CategoryImages/grocery_ctg.png" alt="grocery" />
          <div className="img-card-overlay">
            <h2>Groceries / Fresh Produce</h2>
            <i>“From Farm to You”</i>
          </div>
        </a>
      </div>

      <div className="ctgItem">
        <a href="#" className="ctgImg">
          <img
            src="/CategoryImages/clothing_and_apparel_ctg.png"
            alt="clothing"
          />
          <div className="img-card-overlay">
            <h2>Clothing / Fashion</h2>
            <i>“Style That Speaks – Trendy Looks, Everyday Comfort.”</i>
          </div>
        </a>
      </div>

      <div className="ctgItem">
        <a href="#" className="ctgImg">
          <img src="/CategoryImages/electronics_ctg.png" alt="electronics" />
          <div className="img-card-overlay">
            <h2>Electronics / Appliances</h2>
            <i>“Smart Choices for a Smarter Home.”</i>
          </div>
        </a>
      </div>
    </>
  );
}

export default LeftCategory;
