import {GoogleLogin, GoogleLogout} from "react-google-login"

const clientId="378065727427-30rffrf9i1jpvvj4vl76gql74eu81j62.apps.googleusercontent.com";


function GLogin(){
    const onSuccess=(res)=>{
        console.log("success",res);
    }
    const onFailure=(res)=>{
        console.log("falilure",res);
    }
    return (

        <div>
        <GoogleLogin
        clientId={clientId}

        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single host orgin'}

        isSignedIn={true}

        />
        </div>
    );
}

export function GLogout(){
    const onSuccess=(res)=>{
        console.log("success",res);
    }
    const onFailure=(res)=>{
        console.log("falilure",res);
    }
    return (

        <div>
        <GoogleLogout  id="signOutButton"
        clientId={clientId}

        buttonText={"Logout"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single host orgin'}

        isSignedIn={false}


        />
        </div>
    );
}
export default GLogin;