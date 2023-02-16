import url from "./url"
import { redirect } from "react-router-dom"

//Create
export async function createAction({ request }) {
  //Get form data
  const formData = await request.formData()

  //Construct new data
  const newTodo = {
    subject: formData.get("subject"),
    details: formData.get("details"),
  }

  //Send request to backend
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })

  //Redirect back to index page
  return redirect("/")
}

//Update
export async function updateAction({ request, params }) {
  //Get form data
  const formData = await request.formData()

  //Construct new data
  const updatedTodo = {
    subject: formData.get("subject"),
    details: formData.get("details"),
  }

  //Send request to backend
  await fetch(url + params.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  })

  //Redirect back to index page
  return redirect("/")
}

//Delete
export async function deleteAction({ params }) {
  //Send request to backend
  await fetch(url + params.id + "/", {
    method: "delete",
  })

  // redirect back to show page page
  return redirect("/")
}
