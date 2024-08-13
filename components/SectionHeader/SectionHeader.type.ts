import { Component } from 'dsds-react/dist/utils/types';

export interface SectionHeader extends Component<
    'section-header',
    HTMLDivElement
> {
    link?: string,
}
