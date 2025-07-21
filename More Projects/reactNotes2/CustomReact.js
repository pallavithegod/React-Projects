
function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const mainContainer = document.querySelector('#root')

// custom created element
const reactElement2 = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click here to visit google'
}


//element created using react library (won't be fxnal here as packages not installed)
const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target: '_blank'},
    'click here to visit google'
)

customRender(reactElement, mainContainer)

