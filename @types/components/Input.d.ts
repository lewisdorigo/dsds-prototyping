declare namespace WebFrontEnd {
    namespace Field {
        namespace Input {
            type Types = 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
        }

        interface Input extends Field<Types>, Partial<React.HTMLProps<HTMLInputElement>> {
            width?: string,
        }
    }
}
