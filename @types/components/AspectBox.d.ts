declare namespace ScotGov.Component {
    namespace AspectBox {
        type Ratio = 'square' | '43' | '219';
    }

    interface AspectBox extends WrapperTag {
        ratio?: AspectBox.Ratio,
    }
}
