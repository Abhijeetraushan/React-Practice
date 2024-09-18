function customRender(container,reactElement)
{
    /*const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute("href",reactElement.props.href);
    domElement.setAttribute("target",reactElement.props.target)

    container.appendChild(domElement);*/

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props)
    {
        if(prop==="children")
            continue;

        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}
const reactElement={
    type:"a",
    props:{
        href:"https://chromewebstore.google.com/?pli=1",
        target:"_blans"
    },
    children:"click me to visit google"
}
const mainContainer=document.querySelector("#root")

customRender(mainContainer,reactElement)

