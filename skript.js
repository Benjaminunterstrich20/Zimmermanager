// Daten beim Start laden
loadData();

// Klick-Events hinzufügen
document.querySelectorAll(".room").forEach(room => {
  room.addEventListener("click", () => {
    toggleRoom(room);
    saveData();
  });
});

// Zustand toggeln
function toggleRoom(room) {
  if (room.classList.contains("free")) {
    room.classList.remove("free");
    room.classList.add("taken");

  } else if (room.classList.contains("taken")) {
    room.classList.remove("taken");
    room.classList.add("unknown");

  } else if (room.classList.contains("unknown")) {
    room.classList.remove("unknown");

  } else {
    room.classList.add("free");
  }
}

// Speichern in localStorage
function saveData() {
  const data = {};

  document.querySelectorAll(".room").forEach(room => {
    const id = room.dataset.id;

    if (room.classList.contains("free")) data[id] = "free";
    if (room.classList.contains("taken")) data[id] = "taken";
    if (room.classList.contains("unknown")) data[id] = "unknown";
  });

  localStorage.setItem("zimmerkarten", JSON.stringify(data));
}

// Daten wiederherstellen
function loadData() {
  const data = JSON.parse(localStorage.getItem("zimmerkarten") || "{}");

  document.querySelectorAll(".room").forEach(room => {
    const id = room.dataset.id;

    if (data[id]) {
      room.classList.add(data[id]);
    }
  });
}
