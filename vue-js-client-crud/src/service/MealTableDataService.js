import http from '../http-common'

class MealTableDataService {
    retrieveAllMeatTables() {
        return http.get('/mealtable');
    }

    retrieveMealTableById(id) {
        return http.get(`/mealtable/weekly/${id}`);
    }

    addMealTableWeek(data) {
        return http.post('/mealtable', data);
    }

    updateMealTableWeek(data) {
        return http.put('/mealtable', data);
    }

    deleteMealTableWeek(id) {
        return http.delete(`/mealtable/${id}`);
    }

    deleteMealFromTableWeek(mealTableId, mealId, weekday) {
        return http.delete(`/mealtable/${mealTableId}/delete/${mealId}/${weekday}`);
    }
}

export default new MealTableDataService();