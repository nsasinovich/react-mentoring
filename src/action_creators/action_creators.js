import ActionTypes from '../constants/action_types';

export const changeSort = sort => ({
    type: ActionTypes.CHANGE_SORT,
    sort,
});
