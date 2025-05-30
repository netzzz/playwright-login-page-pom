import { decryptData } from '../utils/encryption';

export enum LoginErrorType {
    InvalidUsername = "InvalidUsername",
    InvalidPassword = "InvalidPassword"
}

export class LoginPageData {
    private static validUsername: string = "student";
    private static validPassword: string = "swpnU+f5OPTZM3XlQuT4gkq5dcQCMW8DDi3OYmE3TfyPqahVRfylBMBhzsuX1W8I";
    private static invalidUsername: string = "invalidUser";
    private static invalidPassword: string = "invalidPassword";


    private static errorMessages: { [key: string]: string } = {
        InvalidUsername: "Your username is invalid!",
        InvalidPassword: "Your password is invalid!"
    }

    public static getValidUsername = () => this.validUsername;
    public static getValidPassword = () => decryptData(this.validPassword);
    public static getInvalidUsername = () => this.invalidUsername;
    public static getInvalidPassword = () => this.invalidPassword;

    public static getErrorMessage(errorType: LoginErrorType): string {
        return LoginPageData.errorMessages[errorType];
    }

    public static getPasswordType(password: string): string {
        if (password === decryptData(this.validPassword)) {
            return 'Valid Password';
        }
        else {
            return 'Invalid Password';
        }
    }

    public static getUsernameType(username: string): string {
        if (username === this.validUsername) {
            return 'Valid Username';
        }
        else {
            return 'Invalid Username';
        }
    }
}