import { Component } from "react";
import type { ReactNode, ErrorInfo } from 'react'

interface IProps {
    children?: ReactNode;
}

interface IState {
    hasError: boolean;
}



class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error)
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error)
        console.log(errorInfo)
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <h1>Xatolik yuz berdi</h1>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary