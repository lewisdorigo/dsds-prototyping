/* eslint-disable max-len */

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Checkboxes from '@/components/Checkbox';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    return (
        <>
            <Wrapper>
                <PageHeader title="How your stay in a hospital or care home is paid for" />
            </Wrapper>
            <Wrapper>
                <Checkboxes
                    name="care-checkboxes"
                    id="care-checkboxes"
                    label="Tell us how your stay in a hospital or care home is paid for, if you know. "
                    hintText="You can select more than one box."
                    items={[
                        {
                            label: 'By the NHS, council or other public body',
                            value: 'NHS',
                        },
                        {
                            label: 'My own money or savings',
                            value: 'self',
                        },
                        {
                            label: 'Private healthcare',
                            value: 'private',
                        },
                        {
                            label: 'Another way',
                            value: 'another',
                        },
                        {
                            label: 'I do not know',
                            value: 'dont-know',
                            exclusive: true,
                        },
                    ]}
                />
            </Wrapper>

            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/hospital-care-home-legal-detention/stay-hospital-care-home-legal-detention"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="/hospital-care-home-legal-detention/review-answers"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
