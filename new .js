const button = document.getElementById("visitorBtn");
const countDisplay = document.getElementById("visitorCount");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("https://your-api-url/visitor-count", {
      method: "POST"
    });
    const data = await response.json();
    countDisplay.textContent = data.count;
  } catch (err) {
    countDisplay.textContent = "Error!";
  }
});
