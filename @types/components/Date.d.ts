declare namespace ScotGov.Component.Field {
    interface Date extends Field<Types>, React.AllHTMLAttributes<HTMLInputElement> {
        multiple?: boolean,
        disabledDates?: Date[],
        maxDate?: Date[],
        minDate?: Date[],
        defaultValue?: string,
    }
}
