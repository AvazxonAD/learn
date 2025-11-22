import type { IUser } from "../shared/interfaces/userInterface";
import { ActionType } from "./reducer";

export const setUser = (user: IUser) => {
    return {
        type: ActionType.UserSuccess,
        payload: user
    }
}