console.clear();

//people droping off a form (Action)
const createPolicy = (name, amount) => {
  return {
    //Action
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};
const deletePolicy = name => {
  return {
    //Action
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};
const claimPolicy = (name, amountOfMoneyToCollect) => {
  return {
    //Action
    type: "CLAIM_POLICY",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Reducers(Department)
const claimHistory = (oldListOfClaim = [], action) => {
  if (action.type === "CLAIM_POLICY") {
    //we care about this claim
    return [...oldListOfClaim, action.payload];
  }
  //we dont care the action(form)
  return oldListOfClaim;
};

const accounting = (bagOfMoney = 10000, action) => {
  if (action.type === "CLAIM_POLICY") {
    //we care about this
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  //we dont care the action(form)
  return bagOfMoney;
};
const policies = (listOfPolicy = [], action) => {
  if (action.type === "CREATE_POLICY") {
    //we care about this
    return [...listOfPolicy, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicy.filter(policy => policy !== action.payload.name);
  }
  return listOfPolicy;
};
const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  claimHistory: claimHistory,
  accounting: accounting,
  policies: policies
});
const store = createStore(ourDepartments);
store.dispatch(createPolicy("raja", 200));
store.dispatch(createPolicy("ravi", 250));
store.dispatch(createPolicy("anu", 250));
store.dispatch(claimPolicy("anu", 100));
store.dispatch(deletePolicy("ravi"));
console.log(store.getState());
