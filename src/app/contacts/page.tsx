import { Form } from '@/components/Form/Form';
import { ContentBlock } from '@/components';

// ! testing
import { FlexContainer } from '@/layout';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam enim. In faucibus sollicitudin justo quis sollicitudin. Nullam eget turpis non elit consectetur sagittis. Aliquam vel libero blandit, lobortis velit sed, pharetra odio. Duis ut dui metus. '

function Contacts() {
    return (
        <>
            <FlexContainer>
                <ContentBlock title='Get in touch' text={text} />
                <Form />
            </FlexContainer>
        </>
    );
}

export default Contacts;