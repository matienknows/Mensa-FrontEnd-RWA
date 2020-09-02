import http from '../http-common'

class MealTableDataService {
        retrieveAllMeatTables() {
            return http.get();
        }

        retrieveMealTableById(id){
            return http.get(`/mealtable/weekly/${id}`);
        }
}
export default new MealTableDataService();