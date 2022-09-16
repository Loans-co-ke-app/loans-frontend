import React from "react";


type MyProps = {
    // using `interface` is also ok
    children: React.ReactNode;
};
type MyState = {
    hasError: boolean;
};
export class ErrorBoundary extends React.Component<MyProps, MyState> {
    public state: MyState
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}