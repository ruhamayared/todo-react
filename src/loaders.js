import url from "./url"

export async function IndexLoader() {
  const response = await fetch(url)
  const todos = await response.json()
  console.log("Index loader:", todos)
  return todos
}

export async function ShowLoader({ params }) {
  const response = await fetch(url + params.id + "/")
  const todo = await response.json()
  console.log("Show loader:", todo)
  return todo
}
