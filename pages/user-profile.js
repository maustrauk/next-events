import { Fragment } from "react";

function UserProfilePage(props) {
    return (<Fragment>
        <h1>{props.username}</h1>
    </Fragment>)
}

export default UserProfilePage;

export async function getServerSideProps(context) {
    return {
        props: {
            username: 'Max'
        }
    }
}