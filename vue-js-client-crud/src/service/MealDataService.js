import http from '../http-common'

class MealDataService {
    retrieveAllMeals() {
        return http.get('/meal');
    }

    deleteMealById(id) {
        return http.delete(`/meal/${id}`);
    }

    getMealById(id) {
        return http.get(`/meal/${id}`);
    }

    updateMealById(data) {
        return http.put('/meal', data);
    }

    addMealById(data) {
        return http.post('/meal', data);
    }
}

export default new MealDataService();