import { TypeAction } from "./action";

function threadsReducer(threadsData = [], action = {}) {
  switch (action.type) {
    case TypeAction.SET_LONGEST_CONTENT:
      return action.payload.threadsData.reverse();
    case TypeAction.SET_CREATE_THREAD:
      return [action.payload.threadData].concat(threadsData);
    case TypeAction.SET_ALL_THREADS_DATA:
      return action.payload.threadsData;
    case TypeAction.SET_UP_THREAD:
      return threadsData.map((thread) => {
        if (thread.id === action.payload.id) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy.concat([action.payload.userId]),
            downVotesBy: thread.downVotesBy.filter(
              (id) => id !== action.payload.userId
            ),
          };
        }
        return thread;
      });
    case TypeAction.SET_DOWN_THREAD:
      return threadsData.map((thread) => {
        if (thread.id === action.payload.id) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter(
              (id) => id !== action.payload.userId
            ),
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    case TypeAction.SET_REMOVE_UP_THREAD: {
      return threadsData.map((thread) => {
        if (thread.id === action.payload.id) {
          const threadFilter = thread.upVotesBy.filter(
            (item) => item !== action.payload.userId
          );
          return { ...thread, upVotesBy: threadFilter };
        }

        return thread;
      });
    }
    case TypeAction.SET_REMOVE_DOWN_THREAD: {
      return threadsData.map((thread) => {
        if (thread.id === action.payload.id) {
          const threadFilter = thread.downVotesBy.filter(
            (item) => item !== action.payload.userId
          );
          return { ...thread, downVotesBy: threadFilter };
        }

        return thread;
      });
    }

    default:
      return threadsData;
  }
}

function threadDetailReducer(threadDetail = [], action = {}) {
  switch (action.type) {
    case TypeAction.SET_THREAD_DETAIL:
      return action.payload.threadDetail;
    case TypeAction.SET_CREATE_COMMENT:
      return {
        ...threadDetail,
        comments: [...threadDetail.comments, action.payload.content],
      };
    case TypeAction.SET_UP_COMMENTS:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? [
                    ...comment.upVotesBy.filter(
                      (id) => id !== action.payload.userId
                    ),
                  ]
                : [...comment.upVotesBy, action.payload.userId],
              downVotesBy: comment.downVotesBy.filter(
                (id) => id !== action.payload.userId
              ),
            };
          }

          return comment;
        }),
      };
    case TypeAction.SET_DOWN_COMMENTS:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter(
                (id) => id !== action.payload.userId
              ),
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? [
                    ...comment.downVotesBy.filter(
                      (id) => id !== action.payload.userId
                    ),
                  ]
                : [...comment.downVotesBy, action.payload.userId],
            };
          }

          return threadDetail;
        }),
      };

    default:
      return threadDetail;
  }
}

export { threadsReducer, threadDetailReducer };
