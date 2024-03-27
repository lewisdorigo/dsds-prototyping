declare namespace ScotGov.Component.Field {
    interface Date extends Field<Types>, React.AllHTMLAttributes<HTMLInputElement> {
        multiple?: boolean,
        disabledDates?: Date[],
        maxDate?: string | Date,
        minDate?: string | Date,
        defaultValue?: string,
    }
}
