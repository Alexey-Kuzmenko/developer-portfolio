import { Form } from '@/components/Form/Form';
import { ContentBlock } from '@/components';

// ! testing
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam enim. In faucibus sollicitudin justo quis sollicitudin. Nullam eget turpis non elit consectetur sagittis. Aliquam vel libero blandit, lobortis velit sed, pharetra odio. Duis ut dui metus. '

function Contacts() {
    return (
        <>
            <ContentBlock title='Get in touch' text={text} />
            <Form />
        </>
    );
}

export default Contacts;