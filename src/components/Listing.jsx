import { listingItems } from "../data/listing-data";
import { FaStar } from "react-icons/fa";

function Listing() {
    return (
        <div className="listing-area">
            {listingItems.map(({ discount, rating, img, listingName, price, description }, index) => (
                <ListingItem
                    key={index}
                    img={img}
                    discount={discount}
                    rating={rating}
                    listingName={listingName}
                    price={price}
                    description={description}
                />
            ))}
        </div>
    );
}

function ListingItem({ img, discount, rating, listingName, description, price }) {
    return (
        <div className="listing-card">
            <div>
                <img src={img} alt={listingName} className="img-fluid" />
                <div className="discount">{discount}%</div>
                {rating && (
                    <div className="rating">
                        <FaStar className="star" />
                        {rating.toFixed(2)}
                    </div>
                )}
            </div>
            <div className="listing-details">
                <h3>{listingName}</h3>
                <p>{description}</p>
                <p className="price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Listing;