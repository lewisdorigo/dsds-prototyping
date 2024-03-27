declare namespace ScotGov.Component.Field {
    namespace Checkboxes {
        type Size = 'small';

        interface Item extends React.HTMLProps<HTMLInputElement> {
            type?: 'checkbox',
            size?: Size,
            hintText?: string,
            exclusive?: boolean,
            value: string,
        }
    }

    interface Checkboxes extends Field<'checkbox', Checkboxes.Item, undefined> {
        size?: Checkboxes.Size,
        value?: string[],
    }
}
