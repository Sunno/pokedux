export const logActions = (store) => (next) => (actionInfo) => {
    console.log("disparando action: ", actionInfo);
    next(actionInfo);
}
