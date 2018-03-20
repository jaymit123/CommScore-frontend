import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js';


const POOL_DATA = {
    UserPoolId: process.env.REACT_APP_COGNITO_USERPOOLID,
    ClientId: process.env.REACT_APP_COGNITO_CLIENTID
};


const userPool = new CognitoUserPool(POOL_DATA);


export const SignUpUser = ({ username, password, email }, setAlert) => {
    const attributeList = []
    const dataEmail = { Name: 'email', Value: email };
    var attributeEmail = new CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);


    userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
            setAlert('error', err.message);
        } else {
            setAlert('success', 'Successfully Registered, Please check your email for verification');
        }
    });

}

export const ConfirmUser = ({ username, code }, setAlert) => {
    const userData = {
        Username: username,
        Pool: userPool
    }
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, function (err, result) {
        if (err) {
            setAlert('error', err.message);
        } else {
            setAlert('success', 'Successfully verified your account!');
        }
    });

}


export const AuthenticateUser = ({ username, password }, callback) => {
    const authenticationData = {
        Username: username,
        Password: password,
    };

    var authenticationDetails = new AuthenticationDetails(authenticationData);

    var userData = {
        Username: username,
        Pool: userPool
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            callback(result);
        },
        onFailure: function (err) {
            callback(null);
        },

    });

};



export const logout = () => getAuthenticatedUser().signOut();

export const getAuthenticatedSession = (callback) => {
    const user = getAuthenticatedUser();
    if (!user) callback(null);
    else user.getSession((err, session) => {
        if (err) callback(null);
        else if (session.isValid()) callback(session);
        else callback(null);
    });
}

export const getAuthenticatedUser = () => {
    return userPool.getCurrentUser();
}




