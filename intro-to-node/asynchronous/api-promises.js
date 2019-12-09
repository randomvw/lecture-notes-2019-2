function getFullName(firstName, lastName) {
  // Return a promise that resolves to a full name value.
  let fullNamePromise = new Promise((resolve, reject) => {
    if (firstName === "Bob") {
      reject("Did you mean Robert?");
    }
    resolve(firstName + " " + lastName);
  });

  return fullNamePromise;
}

let displayFullName = (fullName) => {
  console.log(fullName);
  return fullName;
};

getFullName("Bob", "Robinson")
  .then(displayFullName)
  .catch((errorMessage) => {
    console.log(errorMessage);
  });