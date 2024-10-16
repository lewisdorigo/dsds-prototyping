import { Component, FormComponent } from 'dsds-react/dist/utils/types';
import { HasTag } from 'dsds-react/dist/utils/types/meta';

export interface Grid extends HasTag, Component<
    'grid',
    HTMLElement,
    Component | FormComponent
> {
    columns?: 4 | 3 | 2 | 1,
}
