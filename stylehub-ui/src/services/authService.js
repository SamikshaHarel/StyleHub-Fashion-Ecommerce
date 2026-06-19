export const loginUser = async (username, password) => {

  const response = await fetch(
    "http://localhost:8080/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    }
  );

  return await response.json();
};

export const registerUser = async (username, password, category) => {
  const res = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, category })
  });

  return await res.json();
};