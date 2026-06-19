import CodeBlock from '../ui/CodeBlock'

const code = `<span style="color:#FF7B72">from</span> <span style="color:#E6EDF3">fastapi</span> <span style="color:#FF7B72">import</span> <span style="color:#E6EDF3">FastAPI, HTTPException</span>
<span style="color:#FF7B72">from</span> <span style="color:#E6EDF3">pydantic</span> <span style="color:#FF7B72">import</span> <span style="color:#E6EDF3">BaseModel</span>

<span style="color:#E6EDF3">app</span> <span style="color:#FF7B72">=</span> <span style="color:#D2A8FF">FastAPI</span>(<span style="color:#A5D6FF">title</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"Pedro's API"</span>)

<span style="color:#FF7B72">@app.get</span>(<span style="color:#A5D6FF">"/health"</span>)
<span style="color:#FF7B72">async def</span> <span style="color:#D2A8FF">health</span>():
    <span style="color:#FF7B72">return</span> {<span style="color:#A5D6FF">"status"</span>: <span style="color:#A5D6FF">"ok"</span>, <span style="color:#A5D6FF">"dev"</span>: <span style="color:#A5D6FF">"Pedro Caraballo"</span>}

<span style="color:#FF7B72">@app.get</span>(<span style="color:#A5D6FF">"/projects"</span>)
<span style="color:#FF7B72">async def</span> <span style="color:#D2A8FF">get_projects</span>():
    <span style="color:#8B949E"># Retorna proyectos del portafolio</span>
    <span style="color:#FF7B72">return</span> {<span style="color:#A5D6FF">"data"</span>: projects_db, <span style="color:#A5D6FF">"total"</span>: <span style="color:#79C0FF">3</span>}`

export default function ProjectApiPage() {
  return (
    <div className="page">
      <CodeBlock code={code} lang="api-rest.py" />
    </div>
  )
}
