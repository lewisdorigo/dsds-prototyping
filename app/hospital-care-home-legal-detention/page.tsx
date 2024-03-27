/* eslint-disable max-len */

import type { Metadata } from 'next';
import Image from 'next/image';
import hospitalPic1 from '@/public/images/hospital-care-01.jpg';
import hospitalPic2 from '@/public/images/hospital-care-02.jpg';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';

export const metadata:Metadata = {
    title: 'About any current stay in a hospital, care home or legal detention',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const HospitalCareHomeLegalDetention:React.FC = function HospitalCareHomeLegalDetention() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    return (
        <>
            <Wrapper>
                <PageHeader title={pageTitle} />
            </Wrapper>
            <Wrapper>
                <Image
                    src={hospitalPic1}
                    alt="A hospital"
                    width={500}
                />
                <Image
                    src={hospitalPic2}
                    alt="A hospital"
                    width={500}
                />
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask whether you&apos;re currently staying in:</p>
                <ul>
                    <li>hospital</li>
                    <li>care home</li>
                    <li>legal detention</li>
                </ul>
                <p>We will also ask how this is paid for, if you&apos;re in a hospital or care home.</p>
                <p>We ask about this because it can affect:</p>
                <ul>
                    <li>how much Pension Age Disability Payment you&apos;re paid</li>
                    <li>when your payments will start</li>
                </ul>
                <p>You can also tell us if you&apos;re not sure.</p>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="hospital-care-home-legal-detention/stay-hospital-care-home-legal-detention"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HospitalCareHomeLegalDetention;
