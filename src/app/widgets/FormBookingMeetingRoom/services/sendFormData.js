export const sendFormData = formData => {
  const data = {}

  for (const [key, value] of formData) {
    data[key] = value
  }

  const JSONData = JSON.stringify(data)

  console.log(JSONData)
}
