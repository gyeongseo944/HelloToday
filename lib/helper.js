const BASE = "http://localhost:3000";

export const getTodo = async () => {
  const response = await fetch(`${BASE}/api/get`, { method: "POST" });
  const json = await response.json();

  return json;
};

export const addTodo = async (formData) => {
  const response = await fetch(`${BASE}/api/todo`, { method: "POST", body: JSON.stringify(formData) });
  const json = await response.json();

  return json;
};

export const updateTodo = async (option) => {
  const response = await fetch(`${BASE}/api/todo`, { method: "PATCH", body: JSON.stringify(option) });
  const json = await response.json();

  return json;
};
