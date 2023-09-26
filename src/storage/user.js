export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function loadUsers() {
  let json = localStorage.getItem("users");
  if (json === null) {
    return [];
  } else {
    return JSON.parse(json);
  }
}