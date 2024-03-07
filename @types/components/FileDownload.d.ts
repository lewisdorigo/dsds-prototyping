declare namespace ScotGov.Component {
    namespace FileDownload {
        type Types = (
            'csv'
            | 'excel'
            | 'file'
            | 'generic'
            | 'geodata'
            | 'image'
            | 'pdf'
            | 'ppt'
            | 'rtf'
            | 'text'
            | 'word'
            | 'xml'
        );
    }

    interface FileDownload extends React.AllHTMLAttributes<HTMLDivElement> {
        link: string,
        title: string,
        type?: FileDownload.Types,
        image?: string,
        metadata?: ScotGov.Component.Metadata.Item[],
        highlight?: boolean,
    }
}
