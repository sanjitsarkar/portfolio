//Project
const initProject = async()=>{
    const project_list = document.querySelector('.code_list')
    
    const projects = await (await fetch("../data/projects.json")).json()
   projects.forEach(_project => {
    const project  = document.createElement('div')
    project.classList.add('card','code_card')
    const title = document.createElement('h1')
    title.classList.add('title_secondary')
    const published_date = document.createElement('h4')
    published_date.classList.add('published_date')
    const desc = document.createElement('p')
    desc.classList.add('desc')
    const cta_btns = document.createElement('div')
    cta_btns.classList.add('cta_btns')
    const live_project_btn = document.createElement('a')
    live_project_btn.classList.add('btn_primary','btn','live_project')
    const view_source_btn = document.createElement('a')
    live_project_btn.textContent = "Live Project"
    live_project_btn.href = _project.live_url
    view_source_btn.classList.add('btn_secondary','btn','view_source')
    view_source_btn.textContent = "View Source"
    view_source_btn.href = _project.source_url

    
    cta_btns.appendChild(live_project_btn)
    cta_btns.appendChild(view_source_btn)
    
    title.textContent = _project.title
    published_date.textContent = _project.publishedDate
    desc.innerHTML = _project.projectDesc
    project.appendChild(title)
    project.appendChild(published_date)
    project.appendChild(desc)
    project.appendChild(cta_btns)
    project_list.appendChild(project)
   });
    }
    
    initProject()