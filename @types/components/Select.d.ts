declare namespace ScotGov.Component.Field {
    namespace Select {
        interface Item extends React.HTMLProps<HTMLOptionElement> {
        }
    }

    interface Select extends Field<'select', Select.Item, undefined>,
        Partial<React.HTMLProps<HTMLSelectElement>>
    {
        width?: string,
        allowNull?: boolean,
    }
}
