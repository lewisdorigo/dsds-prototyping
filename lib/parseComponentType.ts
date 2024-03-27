export default function parseComponentType(component:ScotGov.Field) {
    switch (component.type) {
        case 'date':
            return component as ScotGov.Component.Field.Date;
        default:
            return component as ScotGov.Component.Field.Input;
    }
}
