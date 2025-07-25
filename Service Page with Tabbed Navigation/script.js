document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".services-container");

 
  document.querySelector("#web").classList.add("active");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      
      tabs.forEach(t => t.classList.remove("active"));

      
      tab.classList.add("active");

     
      contents.forEach(content => content.classList.remove("active"));

      
      const targetId = tab.getAttribute("href").substring(1);
      document.getElementById(targetId).classList.add("active");
    });
  });
});
