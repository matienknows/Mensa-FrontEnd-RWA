import http from '../http-common'

class MealTableDataService {
        retrieveAllMeatTables() {
            return http.get();
        }
}
export default new MealTableDataService();