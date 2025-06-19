import React from "react";
import { listingItems } from "../data/listing-data";
import { CiStar } from "react-icons/ci";

function Listing() {
    return (
        <div>
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
        <div>
            <div>
                <img src={img} alt={listingName} />
                <div>{discount}%</div>
                {rating && (
                    <div>
                        <CiStar />
                        {rating}
                    </div>
                )}
            </div>
            <div>
                <h6>{listingName}</h6>
                <p>{description}</p>
                <p>${price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Listing;