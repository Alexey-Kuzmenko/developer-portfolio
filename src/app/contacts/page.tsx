import { Form } from '@/components/Form/Form';
import styles from './page.module.scss';

import { ContentBlock } from '@/components';
import { FlexContainer } from '@/layout';
import { IconBox } from '@/components';

// ! testing
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam enim. In faucibus sollicitudin justo quis sollicitudin. Nullam eget turpis non elit consectetur sagittis. Aliquam vel libero blandit, lobortis velit sed, pharetra odio. Duis ut dui metus. '

function Contacts() {
    return (
        <div className={styles.ContactsPage}>
            <FlexContainer>
                <ContentBlock title='Get in touch' text={text} />
                <Form />
            </FlexContainer>

            <IconBox size='small' iconType='telegram' />
            <IconBox size='small' iconType='email' />
            <IconBox size='small' iconType='linkedIn' />
        </div>
    );
}

export default Contacts;