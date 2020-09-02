import http from '../http-common'

class MealDataService {
    retrieveAllMeals() {
        return http.get('/meal');
    }
    delete(id) {
        return http.delete(`/meal/${id}`);
    }
}
export default new MealDataService();