declare namespace ScotGov.Component.Field {
    namespace Radios {
        type Size = 'small';

        interface Item extends React.HTMLProps<HTMLInputElement> {
            type?: 'radio',
            hintText?: string,
            size?: Size,
        }
    }

    interface Radios extends Field<'radio', Radios.Item, undefined> {
        inline?: boolean,
        size?: Radios.Size,
    }
}
