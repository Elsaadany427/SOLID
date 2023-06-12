import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function filterProducts(products: any[], rate: number) {
    return products.filter(
        (product: any) => product.rating.rate > rate
    );
}

interface IFilterProduct {
    filterRate: number;
    handleRate: (rate: number) => void;
}

export function Filter(props: IFilterProduct) {
    const { filterRate, handleRate } = props;
    return (
        <div className="flex flex-col justify-center items-center mb-4">
            <span className="font-semibold">Minimum Rating </span>
            <Rating
                initialValue={filterRate}
                SVGclassName="inline-block"
                onClick={handleRate}
            />
        </div>
    );
}