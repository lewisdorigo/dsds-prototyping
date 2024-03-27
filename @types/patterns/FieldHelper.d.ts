declare namespace ScotGov.Pattern {
    interface FieldHelper {
        field: string | ScotGov.Field<unknown, unknown, unknown>,
    }

    interface FieldsHelper {
        fields: (string | ScotGov.Field<unknown, unknown, unknown>)[],
        errors?: ScotGov.Form.Error[],
        values?: {[key: string]: ScotGov.Form.Value },
    }
}
