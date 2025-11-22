import type { IUser } from "../shared/interfaces/userInterface";

interface UserState {
    currentUser: IUser | null;
}

const initialState: UserState = {
    currentUser: null,
};

export enum ActionType {
    UserSuccess = 'USER_SUCCESS',
}

interface SetUserAction {
    type: ActionType.UserSuccess;
    payload: IUser;
}

type Actions = SetUserAction;

const reducer = (state = initialState, action: Actions): UserState => {
    switch (action.type) {
        case ActionType.UserSuccess:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;