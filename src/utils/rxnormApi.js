const BASE_URL = "https://rxnav.nlm.nih.gov/REST";

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(new Error("Failed to fetch medication data"));
  }

  return res.json();
}

export function searchMedication(query) {
  return fetch(`${BASE_URL}/drugs.json?name=${encodeURIComponent(query)}`).then(
    checkResponse
  );
}
