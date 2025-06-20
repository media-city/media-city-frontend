export const signupUser = async (uname, fname, lname, email) => {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      Username: uname,
      FirstName: fname,
      LastName: lname,
      Email: email,
      PhoneNumber: null,
      DateOfBirth: null,
      Gender: null,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
