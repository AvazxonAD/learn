import { connect } from "react-redux";
import type { ConnectedProps } from 'react-redux'
import type { RootState } from "../redux/store";
import { setUser } from "../redux/actions";
import { useEffect } from "react";

type ReduxProps = ConnectedProps<typeof connector>;

type ComponentProps = {
    isActive: boolean;
};

type Props = ReduxProps & ComponentProps;

function Profile(props: Props) {
    useEffect(() => {
        setTimeout(() => {
            props.setUser({
                name: "Avazbek",
                id: "132312",
            })
        }, 5000)
    }, [])
    return <h1>Profile</h1>
}

const mapStateToProps = (state: RootState) => ({
    user: state.currentUser,
});

const mapDispatchToProps = {
    setUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Profile);