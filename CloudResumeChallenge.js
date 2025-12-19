document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("visitorBtn");
  const countDisplay = document.getElementById("visitorCount");

  button.addEventListener("click", async () => {
    try {
      const response = await fetch("https://your-api-url/visitor-count", {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("API error");
      }

      const data = await response.json();
      countDisplay.textContent = data.count;

    } catch (error) {
      console.error(error);
      countDisplay.textContent = "Error!";
    }
  });
});