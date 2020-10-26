import http from '../http-common'

class MealTableDataService {
    retrieveAllMeatTables() {
        return http.get();
    }

    retrieveMealTableById(id) {
        return http.get(`/mealtable/weekly/${id}`);
    }

    addMealTableWeek(data) {
        console.log("add");
        return http.post('/mealtable', data);
    }
}

export default new MealTableDataService();