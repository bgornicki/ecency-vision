import { Dispatch } from "redux";

import { DynamicProps, State, Actions, ActionTypes, FetchedAction } from "./types";

import { getDynamicProps } from "../../api/hive";

export const initialState: State = {
  hivePerMVests: 1,
  base: 1,
  quote: 1,
  fundRecentClaims: 1,
  fundRewardBalance: 1,
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.FETCHED: {
      return { ...action.props };
    }
    default:
      return state;
  }
};

/* Actions */
export const fetchDynamicProps = () => (dispatch: Dispatch) => {
  getDynamicProps().then((r) => {
    dispatch(fetchedAct(r));
  });
};

/* Action Creators */
export const fetchedAct = (props: DynamicProps): FetchedAction => {
  return {
    type: ActionTypes.FETCHED,
    props,
  };
};
