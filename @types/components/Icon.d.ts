declare namespace WebFrontEnd {
    interface Icon extends React.SVGProps<SVGSVGElement> {
        icon: string,
        size?: string | number,
        title?: string,
        accessible?: boolean,
        className?: string,
    }
}
