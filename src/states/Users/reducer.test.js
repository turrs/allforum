import { usersReducer } from "./reducer";

describe("users reducer", () => {
  it("should return initial state if given by 'Unknown' ", () => {
    const initialState = [];
    const action = {
      type: "UNKNOWN",
    };
    const nextstate = usersReducer(initialState, action);
    expect(nextstate).toEqual(initialState);
  });
  it("should return user data if given by SET_USER_DATA", () => {
    const initialState = [];
    const action = {
      type: "SET_USER_DATA",
      payload: {
        userData: {
          id: "john_doe",
          name: "John Doe",
          email: "john@example.com",
          avatar: "https://generated-image-url.jpg",
        },
      },
    };
    const nextstate = usersReducer(initialState, action);
    expect(nextstate).toEqual(action.payload.userData);
  });
});
