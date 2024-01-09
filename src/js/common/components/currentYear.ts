/**
* get current year
*/
const currentYear = () => {
  
  const yearElement = document.getElementById("year");

  if (yearElement !== null) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = currentYear.toString();
  }
}

export default currentYear