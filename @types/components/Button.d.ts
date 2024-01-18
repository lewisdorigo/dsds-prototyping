declare namespace ScotGov.Component {
    namespace Button {
        type IconSides = 'left' | 'right' | 'icon-only';
        type Variant = 'primary' | 'secondary' | 'cancel';
        type Size = 'small' | 'fixed' | 'max';
        type Type = 'submit' | 'reset' | 'button';

        interface Base<T> extends React.AllHTMLAttributes<T> {
            icon?: string,
            iconSide?: IconSides,
            variants?: Variant | Variant[],
            type?: ButtonTypes,
            size?: Size | Size[],
        }

        interface Anchor extends Base<HTMLAnchorElement> {
            type?: never,
        }

        interface Button extends Base<HTMLButtonElement> {
            type: ButtonTypes,
        }
    }

    type Button = Button.Anchor | Button.Button;
}
