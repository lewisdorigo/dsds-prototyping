declare namespace ScotGov {
    namespace Session {
        interface RouteValues {
            [key:string]: string | string[] | number | number[],
        }
    }

    interface Session {
        [key:string]: Session.RouteValues,
    }
}
