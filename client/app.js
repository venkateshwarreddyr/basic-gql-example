const GQL_URL = "http://localhost:9000";

async function fetchGreetings() {
  const response = await fetch(GQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `{
            greeting
        }`,
    }),
  });
  const { data } = await response.json();
  console.log({data})
  return data;
}

fetchGreetings()
  .then(({ greeting }) => {
    console.log({ greeting });
    title = document.querySelector("h1");
    title.textContent = greeting;
  })
  .catch((err) => console.log({ err }));
