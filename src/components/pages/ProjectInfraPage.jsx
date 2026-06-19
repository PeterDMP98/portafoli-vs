import CodeBlock from '../ui/CodeBlock'

const code = `<span style="color:#8B949E">#!/bin/bash</span>
<span style="color:#8B949E"># Script de despliegue — Pedro Caraballo</span>

<span style="color:#79C0FF">IMAGE</span>=<span style="color:#A5D6FF">"pedro-portfolio-api"</span>
<span style="color:#79C0FF">TAG</span>=<span style="color:#A5D6FF">"latest"</span>

<span style="color:#D2A8FF">echo</span> <span style="color:#A5D6FF">"Construyendo imagen Docker..."</span>
docker build <span style="color:#FF7B72">-t</span> $IMAGE:$TAG .

<span style="color:#D2A8FF">echo</span> <span style="color:#A5D6FF">"Iniciando contenedores..."</span>
docker-compose up -d

<span style="color:#D2A8FF">echo</span> <span style="color:#A5D6FF">"✓ Despliegue completado"</span>`

export default function ProjectInfraPage() {
  return (
    <div className="page">
      <CodeBlock code={code} lang="infra-docker.sh" />
    </div>
  )
}
