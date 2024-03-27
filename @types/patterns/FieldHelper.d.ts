declare namespace ScotGov.Pattern {
    interface FieldHelper {
        field: string | ScotGov.Field,
    }

    interface FieldsHelper {
        fields: (string | ScotGov.Field)[],
        errors?: ScotGov.Form.Error[],
        values?: {[key: string]: string },
    }
}
