import { useEffect, useState } from "react";
import axios from "axios";

export function useRateFilterProducts(): any {
    const [filterRate, setFilterRate] = useState(1);

    const handleRate = (rate: number) => {
        setFilterRate(rate);
    }
    return {filterRate, handleRate};
}
