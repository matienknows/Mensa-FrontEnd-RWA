import http from '../http-common'

class MealTableDataService {
        retrieveAllMeatTables() {
            return http.get();
        }

        retrieveMealTableById(id){
            return http.get(`/weekly/${id}`);
        }
}
export default new MealTableDataService();