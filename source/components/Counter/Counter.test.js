import Counter from './';

import dom from 'react-test-renderer'

const  renderTree = dom.create(
    <Counter count = {4}/>
).toJSON();

test('Counter component should correspond to its snapshot', ()=> {
    expect(renderTree).toMatchSnapshot()
})
