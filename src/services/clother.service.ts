import axios from "axios"
import { IClothers, IReviews } from "../pages/home/types"

class ClotherService {

    private URL = 'http://localhost:5173/db.json'

    async getClothers() {
        const response = await axios.get<{clotherts: IClothers[]}>(this.URL)
        return response.data.clotherts;
    }

    async getReviews() {
        const response = await axios.get<{reviews: IReviews[]}>(this.URL)
        return response.data.reviews;
    }
    
}

export const clotherService = new ClotherService()