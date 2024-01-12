const parent = React.createElement('div', {id : 'parent'}, 
    [React.createElement('div', {id : 'child'}, 
    [React.createElement('h1', {id : 'heading'}, 'Hello React1'),
    React.createElement('h2', {id : 'heading'}, 'Hello React2')]),
    React.createElement('div', {id : 'child2'}, 
    [React.createElement('h1', {id : 'heading'}, 'Hello React1'),
    React.createElement('h2', {id : 'heading'}, 'Hello React2')])]);



// const heading = React.createElement('h1', {id : 'heading'}, 'Hello React');
console.log('heading',parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);