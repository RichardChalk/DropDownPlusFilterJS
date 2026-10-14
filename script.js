// En array med 10 kunder.
// Varje kund har Name, Company och Region.
const customers = [
  { name: "Anna", company: "IKEA", region: "North" },
  { name: "Erik", company: "Volvo", region: "South" },
  { name: "Sara", company: "Spotify", region: "East" },
  { name: "Johan", company: "Ericsson", region: "West" },
  { name: "Maria", company: "H&M", region: "North" },
  { name: "Peter", company: "Scania", region: "South" },
  { name: "Emma", company: "Klarna", region: "East" },
  { name: "David", company: "Electrolux", region: "West" },
  { name: "Linda", company: "Telia", region: "North" },
  { name: "Oscar", company: "ABB", region: "South" },
];

// Hämta HTML-elementen.
const regionFilter = document.querySelector("#regionFilter");
const customerList = document.querySelector("#customerList");

// Funktion som visar kunder på sidan.
function displayCustomers(customerArray) {
  // Töm listan innan nya kunder visas.
  customerList.innerHTML = "";

  // Loopa igenom kunderna.
  customerArray.forEach((customer) => {
    // Skapa ett HTML-kort för varje kund.
    const customerCard = document.createElement("div");
    customerCard.classList.add("customer");

    customerCard.innerHTML = `
      <h3>${customer.name}</h3>
      <p>Company: ${customer.company}</p>
      <p>Region: ${customer.region}</p>
    `;

    // Lägg till kortet på sidan.
    customerList.appendChild(customerCard);
  });
}

// Lyssna efter att användaren ändrar dropdown.
regionFilter.addEventListener("change", () => {
  // Hämta vald region.
  const selectedRegion = regionFilter.value;

  // Börja med alla kunder.
  let filteredCustomers = customers;

  // Filtrera endast om användaren inte valt All.
  if (selectedRegion !== "All") {
    filteredCustomers = customers.filter(
      (customer) => customer.region === selectedRegion,
    );
  }

  // Visa endast kunderna som matchar.
  displayCustomers(filteredCustomers);
});

// Visa alla kunder när sidan öppnas.
displayCustomers(customers);
