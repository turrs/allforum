import { id } from "date-fns/locale";
import { threadsReducer, threadDetailReducer } from "./reducer";

/**
 * testing
 *
 * threads reducers function
 * -should return default if action give action not declared before (unknown)
 * -should return threads data if type action is SET_ALL_THREADS_DATA
 * -should return the threads data with the new thread when given by SET_CREATE_THREAD
 * -should return the threads data with the toggle up thread when given by SET_UP_THREAD
 * -should return the threads data with the toggle down thread when given by SET_DOWN_THREAD
 */

/**
 * testing
 *
 * thread detail reducers function
 * -should return default if action give action not declared before (unknown)
 * -should return threads detail if type action is SET_THREAD_DETAIL
 * -should return the threads detail with the new comment when given by SET_CREATE_COMMENT
 */
describe("Thread Reducer", () => {
  it("must return default", () => {
    const initialState = [];
    const action = { type: "UNKNOWN" };
    const nextstate = threadsReducer(initialState, action);
    expect(nextstate).toEqual(initialState);
  });
  it("should returl threads data when given by SET_ALL_THREADS_DATA action", () => {
    const initialState = [];
    const action = {
      type: "SET_ALL_THREADS_DATA",
      payload: {
        threadsData: [
          {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };
    const nextstate = threadsReducer(initialState, action);
    expect(nextstate).toEqual(action.payload.threadsData);
  });
  it("should return threads data with new thread when given by SET_CREATE_THREAD", () => {
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: "SET_CREATE_THREAD",
      payload: {
        threadData: {
          id: "thread-2",
          title: "Thread Kedua",
          body: "Ini adalah thread Kedua",
          category: "General",
          createdAt: "2021-06-21T07:00:00.000Z",
          ownerId: "users-1",
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };
    const nextstate = threadsReducer(initialState, action);
    expect(nextstate).toEqual([action.payload.threadData].concat(initialState));
  });
  it("should return the threads data with toggle up when given by SET_UP_THREAD", () => {
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: "SET_UP_THREAD",
      payload: {
        id: "thread-1",
        userId: "users-1",
      },
    };
    const nextstate = threadsReducer(initialState, action);
    expect(nextstate).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });
  it("should return the threads data with toggle Down when given by SET_DOWN_THREAD", () => {
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: "SET_DOWN_THREAD",
      payload: {
        id: "thread-1",
        userId: "users-1",
      },
    };
    const nextstate = threadsReducer(initialState, action);
    expect(nextstate).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
  it("should return initial state if given by 'unknown' ", () => {
    const initialState = [];
    const action = {
      type: "unknown",
    };
    const nextstate = threadDetailReducer(initialState, action);
    expect(nextstate).toEqual(initialState);
  });
  it("should return thread detail if given by 'SET_THREAD_DETAIL' ", () => {
    const initialState = [];
    const action = {
      type: "SET_THREAD_DETAIL",
      payload: {
        threadDetail: {
          id: "thread-1",
          title: "Thread Pertama",
          body: "Ini adalah thread pertama",
          category: "General",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: "comment-1",
              content: "Ini adalah komentar pertama",
              createdAt: "2021-06-21T07:00:00.000Z",
              owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };
    const nextstate = threadDetailReducer(initialState, action);
    expect(nextstate).toEqual(action.payload.threadDetail);
  });
  it("should return thread detail with new comment if given by SET_CREATE_COMMENT", () => {
    const initialState = {
      id: "thread-1",
      title: "Halo! Selamat datang dan silakan perkenalkan diri kamu!",
      body: "<div>Bagaimana kabarmu? Semoga baik-baik saja ya. </div>",
      createdAt: "2022-11-13T09:55:55.353Z",
      owner: {
        id: "user-6oWew2w2Wx5xLUTU",
        name: "Dicoding",
        avatar: "https://ui-avatars.com/api/?name=Dicoding&background=random",
      },
      category: "introduction",
      comments: [
        {
          id: "comment-1",
          content: "Halo! ini comment testing",
          createdAt: "2022-11-13T09:57:52.762Z",
          owner: {
            id: "user-1",
            name: "Testing",
            avatar:
              "https://ui-avatars.com/api/?name=Testing&background=random",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };

    const action = {
      type: "SET_CREATE_COMMENT",
      payload: {
        idThread: "thread-1",
        content: {
          id: "comment-2",
          content: "Halo! ini comment testing",
          createdAt: "2022-11-13T09:57:52.762Z",
          owner: {
            id: "user-2",
            name: "Testing",
            avatar:
              "https://ui-avatars.com/api/?name=Testing&background=random",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };
    const nextstate = threadDetailReducer(initialState, action);
    expect(nextstate).toEqual({
      ...initialState,
      comments: [action.payload.content, ...initialState?.comments],
    });
  });
});
