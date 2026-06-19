const demoReplies = {
  node: 'Pedro tiene experiencia sólida con Node.js y Express para construir APIs REST escalables.',
  python: 'Usa Python con FastAPI para microservicios, con validación de datos vía Pydantic.',
  docker: 'Tiene experiencia con Docker y Docker Compose para contenedores, y fundamentos de Kubernetes.',
  proyecto: 'Pedro tiene 3 proyectos principales: una API REST, un sistema de microservicios y una CLI de automatización.',
  disponible: 'Sí, Pedro está disponible para oportunidades remote o híbridas actualmente.',
  experiencia: 'Desarrollador backend con experiencia en APIs, microservicios, bases de datos relacionales y NoSQL.',
  cartagena: 'Pedro está basado en Cartagena, Colombia y abierto a trabajo remoto internacional.',
  salario: 'Para discutir compensación, te recomiendo contactar directamente a Pedro.',
  default: 'Buena pregunta. Te recomiendo revisar las secciones del portafolio o contactar directamente a Pedro para más detalles.',
}

export function getDemoReply(text) {
  const lower = text.toLowerCase()
  for (const [key, val] of Object.entries(demoReplies)) {
    if (lower.includes(key)) return val
  }
  return demoReplies.default
}

export async function getAIResponse(message, config = {}) {
  const { mode = 'demo', apiKey = '', endpoint = '', systemPrompt = '' } = config

  if (mode === 'demo') {
    await new Promise(r => setTimeout(r, 600))
    return getDemoReply(message)
  }

  if (mode === 'openai' && apiKey) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt || 'Eres un asistente del portafolio de Pedro Caraballo, un desarrollador backend.' },
          { role: 'user', content: message },
        ],
        max_tokens: 200,
      }),
    })
    const data = await res.json()
    return data.choices?.[0]?.message?.content || 'Lo siento, no pude procesar tu mensaje.'
  }

  if (mode === 'custom' && endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, systemPrompt }),
    })
    return res.text()
  }

  return getDemoReply(message)
}
