function enviarPregunta() {
  const pregunta = document.getElementById('pregunta').value;
  const respuestaDiv = document.getElementById('respuesta');

  if (pregunta.trim() === "") {
    respuestaDiv.innerText = "Por favor, escribe una pregunta.";
    return;
  }

  respuestaDiv.innerText = "Pensando...";

  // Aquí puedes integrar la lógica para el chatbot con IA
  // Por ejemplo, usando OpenAI o cualquier otro servicio

  // Simulación de respuesta
  setTimeout(() => {
    respuestaDiv.innerText = "Esta es una respuesta simulada a tu pregunta: " + pregunta;
  }, 1000);
}