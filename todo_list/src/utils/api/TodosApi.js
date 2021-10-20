import Base from "./Base";

export default class TodosApi extends Base {
    get() {
        return super.get('todos', {
            params: {
                _limit: 10
            }
        });
    }
}
