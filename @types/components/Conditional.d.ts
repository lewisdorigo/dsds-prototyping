declare namespace ScotGov.Component {
    interface Conditional extends React.PropsWithChildren {
        conditional: FormCondition | FormConditions,
    }
}
