document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }
    return 'N/A';
}
function updateWindChill() {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChill !== 'N/A' ? `${windChill.toFixed(2)} °C` : windChill;
}
document.addEventListener("DOMContentLoaded", updateWindChill);