const dadJokes = [
  "Why don't scientists trust atoms? Because they make up everything.",
  "I'm reading a book on the history of glue. I just can't seem to put it down.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the coffee file a police report? It got mugged.",
];

function getRandomDadJoke() {
  const randomIndex = Math.floor(Math.random() * dadJokes.length);
  return dadJokes[randomIndex];
}

function handleRequest(request) {
  const headers = {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*",
  };
  const response = new Response(getRandomDadJoke(), {
    headers: headers,
  });
  return response;
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
